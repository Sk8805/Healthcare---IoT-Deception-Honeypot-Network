import json
from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["honeypot"]
collection = db["cowrie_events"]

def parse_log(file_path):
    with open(file_path, "r") as f:
        for line in f:
            try:
                event = json.loads(line.strip())
                # Extract useful fields
                record = {
                    "eventid": event.get("eventid"),
                    "src_ip": event.get("src_ip"),
                    "username": event.get("username"),
                    "password": event.get("password"),
                    "command": event.get("input"),
                    "timestamp": event.get("timestamp")
                }
                collection.insert_one(record)
                print(f"Inserted event: {record}")
            except Exception as e:
                print("Error parsing line:", e)

if __name__ == "__main__":
    parse_log("cowrie-logs/cowrie.json")
