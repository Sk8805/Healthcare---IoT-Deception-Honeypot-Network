from __future__ import annotations

import argparse
import os

import requests
from dotenv import load_dotenv

from db import THREAT_COLLECTION, ensure_indexes, get_collection, threat_document

load_dotenv()
API_KEY = os.getenv("VIRUSTOTAL_API_KEY")
HEADERS = {"x-apikey": API_KEY} if API_KEY else {}

def fetch_domain_report(domain):
    url = f"https://www.virustotal.com/api/v3/domains/{domain}"
    response = requests.get(url, headers=HEADERS, timeout=30)
    if response.status_code == 200:
        data = response.json()
        stats = data.get("data", {}).get("attributes", {}).get("last_analysis_stats", {})
        malicious_count = stats.get("malicious", 0)

        if malicious_count > 0:
            indicator = {
                "value": domain,
                "type": "domain",
                "source": "VirusTotal",
                "malicious_votes": malicious_count,
                "harmless_votes": stats.get("harmless", 0),
            }
            get_collection(THREAT_COLLECTION).update_one(
                {"type": indicator["type"], "value": indicator["value"]},
                {"$set": threat_document(indicator)},
                upsert=True,
            )
            print(f"Stored malicious domain: {domain}")
    else:
        print("Error:", response.text)

def fetch_ip_report(ip):
    url = f"https://www.virustotal.com/api/v3/ip_addresses/{ip}"
    response = requests.get(url, headers=HEADERS, timeout=30)
    if response.status_code == 200:
        data = response.json()
        stats = data.get("data", {}).get("attributes", {}).get("last_analysis_stats", {})
        malicious_count = stats.get("malicious", 0)

        if malicious_count > 0:
            indicator = {
                "value": ip,
                "type": "ip",
                "source": "VirusTotal",
                "malicious_votes": malicious_count,
                "harmless_votes": stats.get("harmless", 0),
            }
            get_collection(THREAT_COLLECTION).update_one(
                {"type": indicator["type"], "value": indicator["value"]},
                {"$set": threat_document(indicator)},
                upsert=True,
            )
            print(f"Stored malicious IP: {ip}")
    else:
        print("Error:", response.text)

def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Fetch VirusTotal reputation data into MongoDB.")
    parser.add_argument("--domain", action="append", default=[], help="Domain to fetch. Can be repeated.")
    parser.add_argument("--ip", action="append", default=[], help="IP address to fetch. Can be repeated.")
    return parser


def main() -> None:
    args = build_parser().parse_args()
    ensure_indexes()

    if not API_KEY:
        raise SystemExit("VIRUSTOTAL_API_KEY is not set.")

    print("Fetching indicators from VirusTotal...")

    domains = args.domain or ["malware.com", "phishing-site.xyz"]
    ips = args.ip or ["185.220.101.1", "45.33.32.156"]

    for domain in domains:
        fetch_domain_report(domain)

    for ip in ips:
        fetch_ip_report(ip)

    print("Done! Saved indicators into MongoDB.")


if __name__ == "__main__":
    main()
