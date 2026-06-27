from __future__ import annotations

import os

from dotenv import load_dotenv
from elasticsearch import Elasticsearch

from db import COWRIE_COLLECTION, THREAT_COLLECTION, ensure_indexes, get_collection

load_dotenv()

ELASTICSEARCH_URL = os.getenv("ELASTICSEARCH_URL", "http://localhost:9200")
INDEX_PREFIX = os.getenv("ELASTICSEARCH_INDEX_PREFIX", "honeypot")


def get_elasticsearch_client() -> Elasticsearch:
    return Elasticsearch(ELASTICSEARCH_URL)


def sync_collection(collection_name: str, index_name: str) -> int:
    collection = get_collection(collection_name)
    client = get_elasticsearch_client()
    count = 0

    for document in collection.find({}):
        document_id = str(document.pop("_id"))
        client.index(index=index_name, id=document_id, document=document)
        count += 1

    return count


def main() -> None:
    ensure_indexes()
    cowrie_count = sync_collection(COWRIE_COLLECTION, f"{INDEX_PREFIX}-cowrie-events")
    threat_count = sync_collection(THREAT_COLLECTION, f"{INDEX_PREFIX}-threat-indicators")
    print(f"Synced {cowrie_count} cowrie events and {threat_count} threat indicators to Elasticsearch.")


if __name__ == "__main__":
    main()