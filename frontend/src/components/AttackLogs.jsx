import { useEffect, useState } from "react";

function AttackLogs() {
  const [logs, setLogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/logs")
      .then((res) => res.json())
      .then((data) => {
        setLogs(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
      <h2 style={{ marginBottom: "20px" }}>
        Recent Attack Logs
      </h2>

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
            <th style={{ padding: "12px" }}>Timestamp</th>
            <th style={{ padding: "12px" }}>Source IP</th>
            <th style={{ padding: "12px" }}>Device</th>
            <th style={{ padding: "12px" }}>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredLogs.map((log, index) => (
            <tr key={index}>
              <td style={{ padding: "12px" }}>
                {log.timestamp}
              </td>

              <td style={{ padding: "12px" }}>
                {log.ip}
              </td>

              <td style={{ padding: "12px" }}>
                {log.device}
              </td>

              <td
                style={{
                  padding: "12px",
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