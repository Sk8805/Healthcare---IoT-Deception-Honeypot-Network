import os
import requests
from pymongo import MongoClient
from dotenv import load_dotenv

# Load API key from .env file
load_dotenv()
API_KEY = os.getenv("VIRUSTOTAL_API_KEY")
headers = {"x-apikey": API_KEY}

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["threat_intel"]
collection = db["indicators"]

def fetch_domain_report(domain):
    url = f"https://www.virustotal.com/api/v3/domains/{domain}"
    response = requests.get(url, headers=headers)
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
                "harmless_votes": stats.get("harmless", 0)
            }
            collection.insert_one(indicator)
            print(f"Stored malicious domain: {domain}")
    else:
        print("Error:", response.text)

def fetch_ip_report(ip):
    url = f"https://www.virustotal.com/api/v3/ip_addresses/{ip}"
    response = requests.get(url, headers=headers)
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
                "harmless_votes": stats.get("harmless", 0)
            }
            collection.insert_one(indicator)
            print(f"Stored malicious IP: {ip}")
    else:
        print("Error:", response.text)

if __name__ == "__main__":
    print("Fetching indicators from VirusTotal...")

    test_domains = ["malware.com", "phishing-site.xyz"]
    test_ips = ["185.220.101.1", "45.33.32.156"]

    for domain in test_domains:
        fetch_domain_report(domain)

    for ip in test_ips:
        fetch_ip_report(ip)

    print("Done! Saved indicators into MongoDB.")
