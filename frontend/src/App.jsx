import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import AttackLogs from "./components/AttackLogs";
import HoneypotStatus from "./components/HoneypotStatus";
import ThreatAnalytics from "./components/ThreatAnalytics";
import SecurityAlerts from "./components/SecurityAlerts";
import TopTargets from "./components/TopTargets";

function App() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#071330",
        color: "white",
        minHeight: "100vh",
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        {/* Dashboard Heading */}
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "40px",
            color: "#f8fafc",
          }}
        >
          Healthcare IoT Deception Honeypot Dashboard
        </h1>

        {/* Statistics Cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          <StatCard title="Total Attacks" value="120" />
          <StatCard title="Unique Attackers" value="45" />
          <StatCard title="Active Honeypots" value="3" />
        </div>

        {/* Attack Logs */}
        <AttackLogs />

        {/* Honeypot Status */}
        <HoneypotStatus />

        {/* Threat Analytics */}
        <ThreatAnalytics />

        {/* Recent Security Alerts */}
        <SecurityAlerts />

        {/* Top Targeted Devices */}
        <TopTargets />
      </div>
    </div>
  );
}

export default App;