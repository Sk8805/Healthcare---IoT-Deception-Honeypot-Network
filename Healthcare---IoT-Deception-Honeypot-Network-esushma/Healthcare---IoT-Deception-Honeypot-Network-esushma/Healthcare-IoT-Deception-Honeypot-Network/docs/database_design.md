# Database Design

This project uses MongoDB as the primary operational database and Elasticsearch as the search and visualization store.

## Collections

### `cowrie_events`
Stores parsed Cowrie honeypot events.

Key fields:
- `eventid`
- `src_ip`
- `src_port`
- `dst_ip`
- `dst_port`
- `session`
- `protocol`
- `username`
- `password`
- `command`
- `timestamp`
- `raw`

### `threat_indicators`
Stores VirusTotal-enriched indicators.

Key fields:
- `value`
- `type`
- `source`
- `malicious_votes`
- `harmless_votes`
- `created_at`
- `updated_at`

## Indexes

- `cowrie_events`: `eventid + timestamp`, `src_ip + timestamp`, `session + timestamp`, `protocol + timestamp`, `username + timestamp`
- `threat_indicators`: unique `type + value`, `source + malicious_votes`, `updated_at`

## Aggregations

The database helpers include pipelines for:
- top attacker IPs from Cowrie logs
- threat indicator counts by type

## Storage flow

1. Cowrie JSON logs are parsed into `cowrie_events`.
2. VirusTotal results are upserted into `threat_indicators`.
3. MongoDB data can be synced into Elasticsearch for Kibana dashboards.