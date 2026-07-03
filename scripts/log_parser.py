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


def load_log_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        return f.readlines()


def parse_logs(filepath):
    raw_entries = load_log_file(filepath)
    return [normalize_log_entry(e) for e in raw_entries]


if __name__ == "__main__":
    sample_file = "sample_logs.txt"
    logs = parse_logs(sample_file)
    for log in logs:
        print(log)
