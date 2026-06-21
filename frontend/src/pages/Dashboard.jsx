import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <>
      <h1>Healthcare IoT Deception Honeypot Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <StatCard title="Total Attacks" value="120" />
        <StatCard title="Unique Attackers" value="45" />
        <StatCard title="Active Honeypots" value="3" />
      </div>
    </>
  );
}

export default Dashboard;