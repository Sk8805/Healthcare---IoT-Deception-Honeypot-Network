import { useState } from "react";

function DashboardHeader() {
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const refreshDashboard = () => {
    setLastUpdated(new Date());
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "35px",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "42px",
            margin: 0,
          }}
        >
          Healthcare IoT Deception Honeypot Dashboard
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginTop: "10px",
          }}
        >
          Last Updated: {lastUpdated.toLocaleTimeString()}
        </p>
      </div>

      <button
        onClick={refreshDashboard}
        style={{
          background: "#38bdf8",
          color: "#071330",
          border: "none",
          padding: "12px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "15px",
        }}
      >
        Refresh
      </button>
    </div>
  );
}

export default DashboardHeader;