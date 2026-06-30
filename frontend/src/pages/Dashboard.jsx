import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <>
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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        <StatCard title="Total Attacks" value="120" />
        <StatCard title="Unique Attackers" value="45" />
        <StatCard title="Active Honeypots" value="3" />
      </div>
    </>
  );
}

export default Dashboard;