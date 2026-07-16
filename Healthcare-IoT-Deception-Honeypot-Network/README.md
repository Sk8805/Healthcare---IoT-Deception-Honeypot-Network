# Healthcare IoT Deception Honeypot Network

## 📌 Overview
This project implements a deception-based honeypot for Healthcare IoT devices.  
It collects attacker activity, parses logs to extract Indicators of Compromise (IoCs), and visualizes threat intelligence through a dashboard with geolocation analysis.

---

## 🚀 Features
- **Log Parsing & IoC Extraction**
  - Extract attacker IP addresses
  - Extract uploaded malware hashes (MD5/SHA256)
  - Extract executed terminal commands
  - Export IoCs to JSON/CSV for analysis

- **Threat Intelligence Dashboard**
  - 🌍 World map visualization of attack origins
  - 📊 Frequency charts of exploit techniques
  - 🔎 Filters by time range, country, and technique

- **Deployment**
  - Dockerized application with `Dockerfile` and `docker-compose.yml`
  - Easy setup and reproducibility

- **Documentation**
  - Safe architectural diagrams
  - Comprehensive analytical report

---

## 🛠️ Setup Instructions

### Prerequisites
- Python 3.10+  
- Docker & Docker Compose  
- Streamlit (for dashboard)  

### Installation
```bash
git clone https://github.com/yourusername/Healthcare-IoT-Deception-Honeypot-Network.git
cd Healthcare-IoT-Deception-Honeypot-Network
pip install -r requirements.txt
