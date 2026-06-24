function HoneypotStatus() {
  const devices = [
    { name: "Patient Monitor", status: "Online" },
    { name: "Infusion Pump", status: "Online" },
    { name: "ECG Monitor", status: "Online" },
    
  ];

  return (
    <div
      style={{
        marginTop: "30px",
        background: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <h2>Honeypot Status</h2>

      {devices.map((device, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px 0",
            borderBottom: "1px solid #334155",
          }}
        >
          <span>{device.name}</span>
          <span style={{ color: "#22c55e" }}>
            ● {device.status}
          </span>
        </div>
      ))}
    </div>
  );
}

export default HoneypotStatus;