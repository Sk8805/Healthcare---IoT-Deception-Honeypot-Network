import { useEffect, useState } from "react";

import StatCard from "../components/StatCard";
import DashboardHeader from "../components/DashboardHeader";
import ActivityTimeline from "../components/ActivityTimeline";
import DeviceOverview from "../components/DeviceOverview";
import NotificationCenter from "../components/NotificationCenter";
import AttackChart from "../components/AttackChart";

function Dashboard() {
  const [stats, setStats] = useState({
    total_attacks: 0,
    unique_attackers: 0,
    active_honeypots: 0,
  });

  // Fetch dashboard data
  const fetchDashboard = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5001/api/dashboard");
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error("Error fetching dashboard:", error);
    }
  };

  useEffect(() => {
    fetchDashboard();

    const interval = setInterval(() => {
      fetchDashboard();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

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
        <StatCard
          title="Total Attacks"
          value={stats.total_attacks}
        />

        <StatCard
          title="Unique Attackers"
          value={stats.unique_attackers}
        />

        <StatCard
          title="Active Honeypots"
          value={stats.active_honeypots}
        />
      </div>

      <ActivityTimeline />
      <NotificationCenter />
      <DeviceOverview />
      <AttackChart />
    </>
  );
}

export default Dashboard;