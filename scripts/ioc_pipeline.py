import re
import logging
import os

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s"
)

class IoCPipeline:
    def __init__(self, log_file):
        self.log_file = log_file
        self.logs = []
        self.ips = []
        self.hashes = []
        self.commands = []

    def load_logs(self):
        try:
            if not os.path.exists(self.log_file):
                raise FileNotFoundError(f"Log file not found: {self.log_file}")
            with open(self.log_file, "r") as f:
                self.logs = f.readlines()
            logging.info(f"Logs loaded successfully from {self.log_file}.")
        except Exception as e:
            logging.error(f"Failed to load logs: {e}")
            raise

    def extract_ips(self):
        try:
            ip_pattern = re.compile(r"\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b")
            self.ips = [ip for line in self.logs for ip in ip_pattern.findall(line)]
            logging.info(f"Extracted {len(self.ips)} IPs.")
        except Exception as e:
            logging.error(f"Failed to extract IPs: {e}")
            raise

    def extract_hashes(self):
        try:
            hash_pattern = re.compile(r"\b[a-fA-F0-9]{32,64}\b")
            self.hashes = [h for line in self.logs for h in hash_pattern.findall(line)]
            logging.info(f"Extracted {len(self.hashes)} hashes.")
        except Exception as e:
            logging.error(f"Failed to extract hashes: {e}")
            raise

    def extract_commands(self):
        try:
            cmd_pattern = re.compile(r"(?:cmd|powershell|bash|sh)\s+[^\n]+", re.IGNORECASE)
            self.commands = [cmd for line in self.logs for cmd in cmd_pattern.findall(line)]
            logging.info(f"Extracted {len(self.commands)} commands.")
        except Exception as e:
            logging.error(f"Failed to extract commands: {e}")
            raise

    def run(self):
        self.load_logs()
        self.extract_ips()
        self.extract_hashes()
        self.extract_commands()
        logging.info("Pipeline execution completed successfully.")

if __name__ == "__main__":
    # ✅ Use the exact path you confirmed
    pipeline = IoCPipeline(
        "C:/Users/sushm/Healthcare-IoT-Deception-Honeypot-Network/Healthcare-IoT-Deception-Honeypot-Network/logs/system_logs.txt"
    )
    pipeline.run()
    print("IPs:", pipeline.ips)
    print("Hashes:", pipeline.hashes)
    print("Commands:", pipeline.commands)
