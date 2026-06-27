from __future__ import annotations

import argparse
import json
from pathlib import Path

from db import COWRIE_COLLECTION, cowrie_document, ensure_indexes, get_collection


def parse_log(file_path: Path, dry_run: bool = False, limit: int | None = None) -> int:
    inserted = 0
    collection = get_collection(COWRIE_COLLECTION) if not dry_run else None

    with file_path.open("r", encoding="utf-8") as handle:
        for line in handle:
            if limit is not None and inserted >= limit:
                break

            line = line.strip()
            if not line:
                continue

            try:
                event = json.loads(line)
                document = cowrie_document(event)
                if collection is not None:
                    collection.insert_one(document)
                inserted += 1
                print(f"Parsed event: {document['eventid']} from {document['src_ip']}")
            except Exception as exc:  # noqa: BLE001
                print(f"Error parsing line: {exc}")

    return inserted


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Parse Cowrie JSON logs into MongoDB.")
    parser.add_argument("--file", default="cowrie-logs/cowrie.json", help="Path to the Cowrie JSON log file.")
    parser.add_argument("--dry-run", action="store_true", help="Parse without writing to MongoDB.")
    parser.add_argument("--limit", type=int, default=None, help="Stop after N parsed events.")
    return parser


def main() -> None:
    args = build_parser().parse_args()
    ensure_indexes()
    total = parse_log(Path(args.file), dry_run=args.dry_run, limit=args.limit)
    print(f"Completed parsing {total} event(s).")


if __name__ == "__main__":
    main()
