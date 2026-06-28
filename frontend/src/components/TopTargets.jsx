function TopTargets() {
  const devices = [
    { name: "Patient Monitor", attacks: 42 },
    { name: "Infusion Pump", attacks: 31 },
    { name: "ECG Monitor", attacks: 24 },
    { name: "Smart Ventilator", attacks: 18 },
  ];

  return (
    <div
      style={{
        background: "#1e2b45",
        marginTop: "35px",
        borderRadius: "12px",
        padding: "25px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Top Targeted Devices</h2>

      {devices.map((device) => (
        <div key={device.name} style={{ marginBottom: "18px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "6px",
            }}
          >
            <span>{device.name}</span>
            <span>{device.attacks} attacks</span>
          </div>

          <div
            style={{
              background: "#101827",
              height: "8px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                width: `${device.attacks * 2}%`,
                height: "100%",
                background: "#38bdf8",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopTargets;