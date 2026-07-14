attack_logs = [
    {
        "timestamp": "2026-06-23 10:15",
        "ip": "192.168.1.101",
        "device": "Patient Monitor",
        "attack": "SSH Brute Force",
        "status": "Blocked"
    },
    {
        "timestamp": "2026-06-23 10:22",
        "ip": "10.0.0.55",
        "device": "Infusion Pump",
        "attack": "HTTP Scan",
        "status": "Detected"
    },
    {
        "timestamp": "2026-06-23 10:35",
        "ip": "172.16.0.12",
        "device": "ECG Monitor",
        "attack": "FTP Login Attempt",
        "status": "Blocked"
    },
    {
        "timestamp": "2026-06-23 10:42",
        "ip": "192.168.1.150",
        "device": "Ventilator",
        "attack": "Telnet Login",
        "status": "Blocked"
    },
    {
        "timestamp": "2026-06-23 10:50",
        "ip": "203.0.113.20",
        "device": "Smart Bed",
        "attack": "SMTP Enumeration",
        "status": "Detected"
    }
]

devices = [
    {
        "name": "Patient Monitor",
        "ip": "192.168.1.10",
        "status": "Online",
        "port": 22
    },
    {
        "name": "Infusion Pump",
        "ip": "192.168.1.20",
        "status": "Online",
        "port": 23
    },
    {
        "name": "ECG Monitor",
        "ip": "192.168.1.30",
        "status": "Offline",
        "port": 80
    },
    {
        "name": "Ventilator",
        "ip": "192.168.1.40",
        "status": "Online",
        "port": 443
    },
    {
        "name": "Smart Bed",
        "ip": "192.168.1.50",
        "status": "Online",
        "port": 8080
    }
]