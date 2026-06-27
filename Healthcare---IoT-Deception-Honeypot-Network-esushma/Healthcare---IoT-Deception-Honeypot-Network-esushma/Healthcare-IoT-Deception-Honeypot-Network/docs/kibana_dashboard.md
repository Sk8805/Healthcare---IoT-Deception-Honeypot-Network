# Kibana Dashboard Plan

The Elasticsearch indices used by this project are:

- `honeypot-cowrie-events`
- `honeypot-threat-indicators`

## Recommended panels

- Top attacker IPs from Cowrie logs
- Event counts over time
- Successful login attempts
- Frequent commands entered by attackers
- Malicious domains vs IPs from VirusTotal
- Threat indicators by source

## Suggested fields

- `src_ip`
- `eventid`
- `session`
- `protocol`
- `username`
- `command`
- `timestamp`
- `value`
- `type`
- `source`
- `malicious_votes`

## Build order

1. Sync MongoDB data into Elasticsearch with `scripts/es_sync.py`.
2. Create data views for the two indices in Kibana.
3. Add Lens visualizations for the panels listed above.
4. Assemble the visualizations into a dashboard named `Healthcare IoT Honeypot Overview`.