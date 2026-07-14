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

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/dashboard")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
      })
      .catch((err) => console.log(err));
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