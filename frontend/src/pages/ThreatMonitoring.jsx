import AttackLogs from "../components/AttackLogs";
import HoneypotStatus from "../components/HoneypotStatus";
import SecurityAlerts from "../components/SecurityAlerts";

function ThreatMonitoring() {
  return (
    <>
      <h1>Threat Monitoring</h1>

      <AttackLogs />

      <HoneypotStatus />

      <SecurityAlerts />
    </>
  );
}

export default ThreatMonitoring;