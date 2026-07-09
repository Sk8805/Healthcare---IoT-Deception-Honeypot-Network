import re

def extract_ips(log: str):
    ips = re.findall(r'\b(?:\d{1,3}\.){3}\d{1,3}\b', log)
    return list(set(ips))  # deduplicate

def extract_domains(log: str):
    domains = re.findall(r'\b(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}\b', log)
    return list(set(domains))

def extract_hashes(log: str):
    hashes = re.findall(r'\b[a-fA-F0-9]{32}\b|\b[a-fA-F0-9]{64}\b', log)
    return list(set(hashes))
