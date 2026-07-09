import pytest
from ioc_extraction import extract_ips, extract_domains, extract_hashes


# -----------------------------
# IP Extraction Tests
# -----------------------------
def test_extract_ips_valid():
    log = "Connection from 192.168.1.10 and 8.8.8.8"
    result = extract_ips(log)
    assert "192.168.1.10" in result
    assert "8.8.8.8" in result

def test_extract_ips_empty_log():
    log = ""
    result = extract_ips(log)
    assert result == []

def test_extract_ips_duplicates():
    log = "Connection from 8.8.8.8 and again 8.8.8.8"
    result = extract_ips(log)
    assert result.count("8.8.8.8") == 1  # deduplication

# -----------------------------
# Domain Extraction Tests
# -----------------------------
def test_extract_domains_valid():
    log = "Suspicious domain: badsite.com and sub.badsite.com"
    result = extract_domains(log)
    assert "badsite.com" in result
    assert "sub.badsite.com" in result

def test_extract_domains_invalid():
    log = "Domain: not_a_domain"
    result = extract_domains(log)
    assert result == []

def test_extract_domains_empty_log():
    log = ""
    result = extract_domains(log)
    assert result == []

# -----------------------------
# Hash Extraction Tests
# -----------------------------
def test_extract_hashes_valid_md5():
    log = "File hash: d41d8cd98f00b204e9800998ecf8427e"
    result = extract_hashes(log)
    assert "d41d8cd98f00b204e9800998ecf8427e" in result

def test_extract_hashes_valid_sha256():
    log = "SHA256: a3f5c9d8e7b9c2d4f1a0c3d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5"
    result = extract_hashes(log)
    assert len(result[0]) == 64  # SHA256 length

def test_extract_hashes_malformed():
    log = "File hash: notahash123"
    result = extract_hashes(log)
    assert result == []

def test_extract_hashes_empty_log():
    log = ""
    result = extract_hashes(log)
    assert result == []

# -----------------------------
# Mixed IoC Tests
# -----------------------------
def test_extract_mixed_iocs():
    log = """
    Connection from 10.0.0.1
    Suspicious domain: evil.com
    File hash: d41d8cd98f00b204e9800998ecf8427e
    """
    ips = extract_ips(log)
    domains = extract_domains(log)
    hashes = extract_hashes(log)

    assert "10.0.0.1" in ips
    assert "evil.com" in domains
    assert "d41d8cd98f00b204e9800998ecf8427e" in hashes
