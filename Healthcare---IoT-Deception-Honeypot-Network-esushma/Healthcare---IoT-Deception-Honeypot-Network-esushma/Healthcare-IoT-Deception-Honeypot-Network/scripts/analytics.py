from __future__ import annotations

import argparse

from db import (
    COWRIE_COLLECTION,
    THREAT_COLLECTION,
    cowrie_aggregation_pipeline,
    ensure_indexes,
    get_collection,
    threat_aggregation_pipeline,
)


def recent_commands_pipeline(limit: int = 10) -> list[dict[str, object]]:
    return [
        {"$match": {"command": {"$ne": None}}},
        {"$group": {"_id": "$command", "count": {"$sum": 1}, "last_seen": {"$max": "$timestamp"}}},
        {"$sort": {"count": -1, "last_seen": -1}},
        {"$limit": limit},
    ]


def print_documents(title: str, documents: list[dict[str, object]]) -> None:
    print(f"\n{title}")
    print("-" * len(title))
    for document in documents:
        print(document)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Run MongoDB aggregation queries for the project.")
    parser.add_argument(
        "report",
        choices=["top-attackers", "threat-summary", "recent-commands"],
        help="Aggregation report to run.",
    )
    parser.add_argument("--limit", type=int, default=10, help="Limit for the recent-commands report.")
    return parser


def main() -> None:
    args = build_parser().parse_args()
    ensure_indexes()

    if args.report == "top-attackers":
        results = list(get_collection(COWRIE_COLLECTION).aggregate(cowrie_aggregation_pipeline()))
        print_documents("Top attacker IPs", results)
    elif args.report == "threat-summary":
        results = list(get_collection(THREAT_COLLECTION).aggregate(threat_aggregation_pipeline()))
        print_documents("Threat indicator summary", results)
    else:
        results = list(get_collection(COWRIE_COLLECTION).aggregate(recent_commands_pipeline(args.limit)))
        print_documents("Recent commands", results)


if __name__ == "__main__":
    main()