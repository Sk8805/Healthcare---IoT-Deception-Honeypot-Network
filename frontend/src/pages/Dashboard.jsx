import StatCard from "../components/StatCard";
import DashboardHeader from "../components/DashboardHeader";
import ActivityTimeline from "../components/ActivityTimeline";
import DeviceOverview from "../components/DeviceOverview";

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

      <ActivityTimeline />

      <DeviceOverview />
    </>
  );
}

export default Dashboard;