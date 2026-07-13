function AttackChart() {
  const attacks = [
    { type: "SSH", count: 78, color: "#ef4444" },
    { type: "HTTP", count: 42, color: "#38bdf8" },
    { type: "Telnet", count: 26, color: "#f59e0b" },
    { type: "FTP", count: 18, color: "#22c55e" },
  ];

  const max = Math.max(...attacks.map((a) => a.count));

  return (
    <div
      style={{
        background: "#27324a",
        padding: "25px",
        borderRadius: "14px",
        marginTop: "30px",
      }}
    >
      <h2 style={{ marginBottom: "25px" }}>
        Attack Distribution
      </h2>

      {attacks.map((attack, index) => (
        <div key={index} style={{ marginBottom: "22px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <span>{attack.type}</span>
            <span>{attack.count}</span>
          </div>

          <div
            style={{
              height: "12px",
              width: "100%",
              background: "#0f172a",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${(attack.count / max) * 100}%`,
                background: attack.color,
                borderRadius: "20px",
                transition: "0.4s",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AttackChart;