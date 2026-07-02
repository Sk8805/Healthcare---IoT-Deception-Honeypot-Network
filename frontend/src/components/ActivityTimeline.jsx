function ActivityTimeline() {
  const activities = [
    {
      time: "10:45",
      event: "SSH brute-force attack detected",
      color: "#ef4444",
    },
    {
      time: "10:42",
      event: "New honeypot device registered",
      color: "#38bdf8",
    },
    {
      time: "10:38",
      event: "Firewall blocked suspicious IP",
      color: "#22c55e",
    },
    {
      time: "10:31",
      event: "HTTP scan detected",
      color: "#f59e0b",
    },
  ];

  return (
    <div
      style={{
        background: "#27324a",
        borderRadius: "14px",
        padding: "25px",
        marginTop: "30px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        Activity Timeline
      </h2>

      {activities.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: item.color,
              marginRight: "15px",
            }}
          />

          <div style={{ flex: 1 }}>
            <div>{item.event}</div>

            <div
              style={{
                color: "#94a3b8",
                fontSize: "13px",
                marginTop: "3px",
              }}
            >
              {item.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActivityTimeline;