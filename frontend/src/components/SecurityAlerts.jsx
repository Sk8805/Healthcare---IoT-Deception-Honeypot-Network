import { useEffect, useState } from "react";

function SecurityAlerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/alerts")
      .then((res) => res.json())
      .then((data) => setAlerts(data))
      .catch((err) => console.log(err));
  }, []);

  const getColor = (level) => {
    switch (level) {
      case "Critical":
        return "#ef4444";

      case "High":
        return "#f97316";

      case "Medium":
        return "#eab308";

      case "Info":
        return "#38bdf8";

      default:
        return "#22c55e";
    }
  };

  return (
    <div
      style={{
        marginTop: "30px",
        background: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        Recent Security Alerts
      </h2>

      {alerts.map((alert, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "15px",
            marginBottom: "12px",
            borderRadius: "8px",
            background: "#0f172a",
          }}
        >
          <div>
            <strong
              style={{
                color: getColor(alert.level),
              }}
            >
              {alert.level}
            </strong>

            <p>{alert.message}</p>
          </div>

          <span>{alert.time}</span>
        </div>
      ))}
    </div>
  );
}

export default SecurityAlerts;