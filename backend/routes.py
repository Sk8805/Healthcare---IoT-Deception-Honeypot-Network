from flask import jsonify
from database import attack_logs, devices


def register_routes(app):

    # ---------------- Home ---------------- #

    @app.route("/")
    def home():
        return jsonify({
            "message": "Healthcare IoT Honeypot Backend Running"
        })

    # ---------------- Dashboard ---------------- #

    @app.route("/api/dashboard")
    def dashboard():
        return jsonify({
            "total_attacks": len(attack_logs),
            "unique_attackers": len(
                set(log["ip"] for log in attack_logs)
            ),
            "active_honeypots": len(
                [device for device in devices if device["status"] == "Online"]
            )
        })

    # ---------------- Attack Logs ---------------- #

    @app.route("/api/attack-logs")
    def attack_logs_api():
        return jsonify(attack_logs)

    # ---------------- Threat Monitoring ---------------- #

    @app.route("/api/logs")
    def logs():
        return jsonify(attack_logs)

    # ---------------- Device Overview ---------------- #

    @app.route("/api/devices")
    def device_status():
        return jsonify(devices)

    # ---------------- Activity Timeline ---------------- #

    @app.route("/api/activity")
    def activity():
        return jsonify([
            {
                "event": "SSH brute-force attack detected",
                "time": "10:45",
                "severity": "Critical"
            },
            {
                "event": "Malware payload uploaded",
                "time": "10:43",
                "severity": "Critical"
            },
            {
                "event": "New honeypot device registered",
                "time": "10:42",
                "severity": "Info"
            },
            {
                "event": "Firewall blocked suspicious IP",
                "time": "10:38",
                "severity": "High"
            },
            {
                "event": "HTTP scan detected",
                "time": "10:31",
                "severity": "Medium"
            }
        ])

    # ---------------- Notification Center ---------------- #

    @app.route("/api/alerts")
    def alerts():
        return jsonify([
            {
                "level": "Critical",
                "message": "Multiple SSH brute-force attempts detected",
                "time": "Just now"
            },
            {
                "level": "Critical",
                "message": "Malware upload detected from 192.168.1.101",
                "time": "1 min ago"
            },
            {
                "level": "High",
                "message": "Unauthorized Telnet login blocked",
                "time": "2 mins ago"
            },
            {
                "level": "Medium",
                "message": "HTTP vulnerability scan detected",
                "time": "5 mins ago"
            },
            {
                "level": "Info",
                "message": "New IoT device connected successfully",
                "time": "8 mins ago"
            }
        ])

    # ---------------- Attack Chart ---------------- #

    @app.route("/api/chart")
    def chart():
        return jsonify({
            "labels": [
                "SSH",
                "HTTP",
                "FTP",
                "Telnet",
                "SMTP",
                "DNS"
            ],
            "values": [
                25,
                16,
                9,
                13,
                6,
                4
            ]
        })