Device Simulation

The honeypot environment was configured to mimic a medical IoT device:

- Added fake medical directories and logs (`/var/medlogs/patient_data.log`, `/device/heart_monitor/config.txt`) with sample text.  
- Updated SSH banner to display **Healthcare IoT Monitor v1.0** for deception.  
- Configured open ports (22, 80, 1883) to resemble IoT services such as SSH, web interface, and MQTT.  
- Verified Cowrie container was running and listening on the mapped ports.  
- Environment setup milestone completed with documentation committed to the repository.
