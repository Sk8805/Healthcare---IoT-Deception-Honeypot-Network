# MongoDB Connection Guide

This project uses MongoDB for the honeypot event store and threat indicator store.

## Where the connection is configured

- The shared MongoDB helper lives in [scripts/db.py](scripts/db.py).
- The MongoDB container is defined in [docker-compose.yml](docker-compose.yml).
- The main collections are `cowrie_events` and `threat_indicators`.

## Default connection string

The scripts default to:

```text
mongodb://localhost:27017/
```

That works when the scripts run on the host machine.

## When to use another URI

Use this URI if you run Python scripts inside another container on the same Compose network:

```text
mongodb://mongodb:27017/
```

You can override the URI with the `MONGO_URI` environment variable.

## Environment variables

Recommended variables:

```text
MONGO_URI=mongodb://localhost:27017/
MONGO_DB_NAME=honeypot
ELASTICSEARCH_URL=http://localhost:9200
ELASTICSEARCH_INDEX_PREFIX=honeypot
```

## How the connection is used

- `scripts/log_parser.py` reads Cowrie JSON logs and inserts documents into `cowrie_events`.
- `scripts/vt_fetch.py` enriches indicators from VirusTotal and upserts them into `threat_indicators`.
- `scripts/analytics.py` runs aggregation queries against MongoDB.
- `scripts/es_sync.py` syncs MongoDB documents into Elasticsearch for Kibana.

## Quick verification

Run these commands from the project root:

```powershell
.\venv\Scripts\python scripts\log_parser.py --dry-run --limit 1
.\venv\Scripts\python scripts\log_parser.py --limit 1
.\venv\Scripts\python scripts\analytics.py top-attackers --limit 5
.\venv\Scripts\python scripts\es_sync.py
```

If the second command succeeds, MongoDB is accepting writes.

## Troubleshooting

- If you get `Connection refused`, make sure the `mongodb` container is running.
- If you run from the host and MongoDB is inside Docker, verify that port `27017` is published.
- If you run inside a container, set `MONGO_URI=mongodb://mongodb:27017/`.
- If indicators are not saved, confirm that `VIRUSTOTAL_API_KEY` is set in the environment.