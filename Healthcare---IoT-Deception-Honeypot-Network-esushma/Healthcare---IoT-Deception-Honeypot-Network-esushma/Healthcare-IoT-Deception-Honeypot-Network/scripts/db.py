from __future__ import annotations

import os
from datetime import datetime, timezone
from typing import Any

from dotenv import load_dotenv
from pymongo import ASCENDING, DESCENDING, MongoClient

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")
MONGO_DB_NAME = os.getenv("MONGO_DB_NAME", "honeypot")

COWRIE_COLLECTION = "cowrie_events"
THREAT_COLLECTION = "threat_indicators"


def utc_now() -> datetime:
    return datetime.now(timezone.utc)


def get_mongo_client() -> MongoClient:
    return MongoClient(MONGO_URI)


def get_database():
    return get_mongo_client()[MONGO_DB_NAME]


def get_collection(name: str):
    return get_database()[name]


def ensure_indexes() -> None:
    cowrie = get_collection(COWRIE_COLLECTION)
    cowrie.create_index([("eventid", ASCENDING), ("timestamp", DESCENDING)])
    cowrie.create_index([("src_ip", ASCENDING), ("timestamp", DESCENDING)])
    cowrie.create_index([("session", ASCENDING), ("timestamp", DESCENDING)])
    cowrie.create_index([("protocol", ASCENDING), ("timestamp", DESCENDING)])
    cowrie.create_index([("username", ASCENDING), ("timestamp", DESCENDING)])

    threat = get_collection(THREAT_COLLECTION)
    threat.create_index([("type", ASCENDING), ("value", ASCENDING)], unique=True)
    threat.create_index([("source", ASCENDING), ("malicious_votes", DESCENDING)])
    threat.create_index([("updated_at", DESCENDING)])


def cowrie_document(event: dict[str, Any]) -> dict[str, Any]:
    return {
        "eventid": event.get("eventid"),
        "src_ip": event.get("src_ip"),
        "src_port": event.get("src_port"),
        "dst_ip": event.get("dst_ip"),
        "dst_port": event.get("dst_port"),
        "session": event.get("session"),
        "protocol": event.get("protocol"),
        "username": event.get("username"),
        "password": event.get("password"),
        "command": event.get("input"),
        "message": event.get("message"),
        "sensor": event.get("sensor"),
        "uuid": event.get("uuid"),
        "timestamp": event.get("timestamp"),
        "created_at": utc_now(),
        "raw": event,
    }


def threat_document(indicator: dict[str, Any]) -> dict[str, Any]:
    document = dict(indicator)
    document.setdefault("created_at", utc_now())
    document["updated_at"] = utc_now()
    return document


def cowrie_aggregation_pipeline() -> list[dict[str, Any]]:
    return [
        {"$match": {"src_ip": {"$ne": None}}},
        {"$group": {"_id": "$src_ip", "events": {"$sum": 1}, "last_seen": {"$max": "$timestamp"}}},
        {"$sort": {"events": -1, "last_seen": -1}},
    ]


def threat_aggregation_pipeline() -> list[dict[str, Any]]:
    return [
        {"$group": {"_id": "$type", "count": {"$sum": 1}, "avg_malicious_votes": {"$avg": "$malicious_votes"}}},
        {"$sort": {"count": -1, "_id": 1}},
    ]