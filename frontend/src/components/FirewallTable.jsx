import { useEffect, useState } from "react";

function FirewallTable() {
  const [logs, setLogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/firewall-logs")
      .then((res) => res.json())
      .then((data) => setLogs(data))
      .catch((err) => console.log(err));
  }, []);

  const filteredLogs = logs.filter(
    (log) =>
      log.source_ip.toLowerCase().includes(search.toLowerCase()) ||
      log.protocol.toLowerCase().includes(search.toLowerCase()) ||
      log.action.toLowerCase().includes(search.toLowerCase()) ||
      log.severity.toLowerCase().includes(search.toLowerCase())
  );

  const getActionColor = (action) => {
    return action === "Blocked" ? "#ef4444" : "#22c55e";
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "Critical":
        return "#ef4444";
      case "High":
        return "#f97316";
      case "Medium":
        return "#eab308";
      case "Low":
        return "#22c55e";
      default:
        return "white";
    }
  };

  return (
    <div
      style={{
        marginTop: "25px",
        background: "#1e293b",
        padding: "25px",
        borderRadius: "14px",
      }}
    >
      <input
        type="text"
        placeholder="Search by IP, Protocol, Action or Severity..."
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
            <th style={thStyle}>Time</th>
            <th style={thStyle}>Source IP</th>
            <th style={thStyle}>Port</th>
            <th style={thStyle}>Protocol</th>
            <th style={thStyle}>Action</th>
            <th style={thStyle}>Severity</th>
          </tr>
        </thead>

        <tbody>
          {filteredLogs.map((log, index) => (
            <tr key={index}>
              <td style={tdStyle}>{log.time}</td>

              <td style={tdStyle}>{log.source_ip}</td>

              <td style={tdStyle}>{log.port}</td>

              <td style={tdStyle}>{log.protocol}</td>

              <td
                style={{
                  ...tdStyle,
                  color: getActionColor(log.action),
                  fontWeight: "bold",
                }}
              >
                {log.action}
              </td>

              <td
                style={{
                  ...tdStyle,
                  color: getSeverityColor(log.severity),
                  fontWeight: "bold",
                }}
              >
                {log.severity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: "14px",
  textAlign: "left",
  borderBottom: "1px solid #475569",
};

const tdStyle = {
  padding: "14px",
  borderBottom: "1px solid #334155",
};

export default FirewallTable;