function DeviceOverview() {
  const devices = [
    {
      name: "Patient Monitor",
      ip: "192.168.1.10",
      status: "Online",
      port: 22,
    },
    {
      name: "Infusion Pump",
      ip: "192.168.1.20",
      status: "Online",
      port: 23,
    },
    {
      name: "ECG Monitor",
      ip: "192.168.1.30",
      status: "Offline",
      port: 80,
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
      <h2>Healthcare IoT Devices</h2>

      {devices.map((device, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "15px 0",
            borderBottom: "1px solid #334155",
          }}
        >
          <div>
            <strong>{device.name}</strong>
            <div>{device.ip}</div>
          </div>

          <div>
            Port {device.port}
          </div>

          <div
            style={{
              color:
                device.status === "Online"
                  ? "#22c55e"
                  : "#ef4444",
            }}
          >
            ● {device.status}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DeviceOverview;