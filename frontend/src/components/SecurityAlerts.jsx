function SecurityAlerts() {
  const alerts = [
    {
      level: "Critical",
      message: "Multiple SSH brute-force attempts detected",
      time: "2 mins ago",
    },
    {
      level: "High",
      message: "Unauthorized Telnet login detected",
      time: "10 mins ago",
    },
    {
      level: "Medium",
      message: "HTTP scan detected on Patient Monitor",
      time: "18 mins ago",
    },
  ];

  const getColor = (level) => {
    switch (level) {
      case "Critical":
        return "#ef4444";
      case "High":
        return "#f97316";
      case "Medium":
        return "#eab308";
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