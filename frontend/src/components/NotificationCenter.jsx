function NotificationCenter() {
  const notifications = [
    {
      level: "Critical",
      message: "Multiple SSH brute-force attempts detected",
      time: "Just now",
      color: "#ef4444",
    },
    {
      level: "High",
      message: "Unauthorized Telnet login blocked",
      time: "2 mins ago",
      color: "#f97316",
    },
    {
      level: "Info",
      message: "New honeypot device registered successfully",
      time: "8 mins ago",
      color: "#38bdf8",
    },
    {
      level: "Success",
      message: "Firewall blocked suspicious IP address",
      time: "15 mins ago",
      color: "#22c55e",
    },
  ];

  return (
    <div
      style={{
        background: "#27324a",
        padding: "25px",
        borderRadius: "14px",
        marginTop: "30px",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          color: "#ffffff",
        }}
      >
        Notification Center
      </h2>

      {notifications.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 0",
            borderBottom:
              index !== notifications.length - 1
                ? "1px solid #3b4863"
                : "none",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: item.color,
                display: "inline-block",
              }}
            ></span>

            <div>
              <strong style={{ color: item.color }}>
                {item.level}
              </strong>

              <div
                style={{
                  color: "#ffffff",
                  marginTop: "4px",
                }}
              >
                {item.message}
              </div>
            </div>
          </div>

          <span
            style={{
              color: "#94a3b8",
              fontSize: "14px",
            }}
          >
            {item.time}
          </span>
        </div>
      ))}
    </div>
  );
}

export default NotificationCenter;