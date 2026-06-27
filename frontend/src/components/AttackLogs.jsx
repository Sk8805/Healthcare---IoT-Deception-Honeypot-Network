import { useState } from "react";

function AttackLogs() {
  const logs = [
    {
      time: "2026-06-23 10:15",
      ip: "192.168.1.101",
      device: "Patient Monitor",
      status: "Blocked",
    },
    {
      time: "2026-06-23 10:22",
      ip: "10.0.0.55",
      device: "Infusion Pump",
      status: "Detected",
    },
    {
      time: "2026-06-23 10:35",
      ip: "172.16.0.12",
      device: "ECG Monitor",
      status: "Blocked",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredLogs = logs.filter(
    (log) =>
      log.ip.toLowerCase().includes(search.toLowerCase()) ||
      log.device.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "30px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Recent Attack Logs</h2>

      <input
        type="text"
        placeholder="Search by IP or Device..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "none",
          outline: "none",
          background: "#0f172a",
          color: "white",
          fontSize: "15px",
        }}
      />

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Source IP</th>
            <th>Device</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredLogs.map((log, index) => (
            <tr key={index}>
              <td style={{ padding: "12px" }}>{log.time}</td>
              <td>{log.ip}</td>
              <td>{log.device}</td>

              <td
                style={{
                  color:
                    log.status === "Blocked"
                      ? "#22c55e"
                      : "#f59e0b",
                  fontWeight: "bold",
                }}
              >
                {log.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttackLogs;