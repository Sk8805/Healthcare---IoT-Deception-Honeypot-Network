function AttackLogs() {
  const logs = [
    {
      timestamp: "2026-06-23 10:15",
      ip: "192.168.1.101",
      device: "Patient Monitor",
      status: "Blocked",
    },
    {
      timestamp: "2026-06-23 10:22",
      ip: "10.0.0.55",
      device: "Infusion Pump",
      status: "Detected",
    },
    {
      timestamp: "2026-06-23 10:35",
      ip: "172.16.0.12",
      device: "ECG Monitor",
      status: "Blocked",
    },
  ];

  return (
    <div
      style={{
        marginTop: "40px",
        background: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <h2>Recent Attack Logs</h2>

      <table style={{ width: "100%", marginTop: "15px" }}>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Source IP</th>
            <th>Device</th>
            <th>Status</th>
          </tr>
          <br></br>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.timestamp}</td>
              <td>{log.ip}</td>
              <td>{log.device}</td>
              <td>{log.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttackLogs;