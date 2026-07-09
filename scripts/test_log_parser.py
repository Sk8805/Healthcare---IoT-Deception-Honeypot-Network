import unittest
from scripts.log_parser import normalize_log_entry, extract_attacker_ip

class TestParser(unittest.TestCase):
    def test_json_ip_extraction(self):
        entry = '{"event":"attack","attacker_ip":"10.0.0.5"}'
        log = normalize_log_entry(entry)
        self.assertEqual(extract_attacker_ip(log), "10.0.0.5")

    def test_plain_text_ip_extraction(self):
        entry = "Attack detected from 192.168.1.10"
        log = normalize_log_entry(entry)
        self.assertEqual(extract_attacker_ip(log), "192.168.1.10")

    def test_no_ip(self):
        entry = "No attacker info"
        log = normalize_log_entry(entry)
        self.assertIsNone(extract_attacker_ip(log))