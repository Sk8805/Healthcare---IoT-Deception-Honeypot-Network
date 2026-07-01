import StatCard from "../components/StatCard";
import DashboardHeader from "../components/DashboardHeader";

function Dashboard() {
  return (
    <>
      <DashboardHeader />

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