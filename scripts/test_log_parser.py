from scripts import log_parser

def test_json_entry():
    entry = '{"timestamp": "2026-07-04T10:00:00", "event": "login_attempt"}'
    parsed = log_parser.normalize_log_entry(entry)
    assert parsed["event"] == "login_attempt"

def test_plain_text_entry():
    entry = "Failed SSH connection from 10.0.0.12"
    parsed = log_parser.normalize_log_entry(entry)
    assert parsed["message"] == "Failed SSH connection from 10.0.0.12"
