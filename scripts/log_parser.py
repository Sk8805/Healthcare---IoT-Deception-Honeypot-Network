import re
import json

def normalize_log_entry(entry):
    """
    Normalize a single log entry.
    - If JSON, parse into dict.
    - If plain text, wrap into dict with 'message'.
    """
    try:
        return json.loads(entry)
    except json.JSONDecodeError:
        return {"message": entry.strip()}

def extract_attacker_ip(log_entry):
    """
    Extract attacker IP address from a normalized log entry.
    - If JSON, look for keys like 'attacker_ip' or 'ip'.
    - If plain text, use regex.
    """
    # Case 1: JSON dict
    if isinstance(log_entry, dict):
        for key in ["attacker_ip", "ip", "source_ip"]:
            if key in log_entry:
                return log_entry[key]

        # fallback: regex search inside values
        for value in log_entry.values():
            if isinstance(value, str):
                match = re.search(r"\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b", value)
                if match:
                    return match.group(0)

    # Case 2: Plain text dict {"message": "..."}
    if "message" in log_entry:
        match = re.search(r"\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b", log_entry["message"])
        if match:
            return match.group(0)

    return None
