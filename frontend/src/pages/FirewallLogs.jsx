import { useState } from "react";

function FirewallLogs() {
  const [search, setSearch] = useState("");

  const logs = [
    {
      time: "10:15",
      ip: "192.168.1.101",
      protocol: "SSH",
      action: "Blocked",
    },
    {
      time: "10:25",
      ip: "10.0.0.55",
      protocol: "HTTP",
      action: "Allowed",
    },
    {
      time: "10:31",
      ip: "172.16.0.12",
      protocol: "HTTPS",
      action: "Blocked",
    },
    {
      time: "10:42",
      ip: "192.168.0.89",
      protocol: "FTP",
      action: "Blocked",
    },
  ];

  const filteredLogs = logs.filter(
    (log) =>
      log.ip.toLowerCase().includes(search.toLowerCase()) ||
      log.protocol.toLowerCase().includes(search.toLowerCase()) ||
      log.action.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "30px",
        }}
      >
        Firewall Logs
      </h1>

      <div
        style={{
          background: "#27324a",
          borderRadius: "16px",
          padding: "25px",
        }}
      >
        <input
          type="text"
          placeholder="Search by IP or Protocol..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "25px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            background: "#111827",
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
              <th style={heading}>Time</th>
              <th style={heading}>Source IP</th>
              <th style={heading}>Protocol</th>
              <th style={heading}>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredLogs.length > 0 ? (
              filteredLogs.map((log, index) => (
                <tr key={index}>
                  <td style={cell}>{log.time}</td>
                  <td style={cell}>{log.ip}</td>
                  <td style={cell}>{log.protocol}</td>

                  <td style={cell}>
                    <span
                      style={{
                        padding: "6px 14px",
                        borderRadius: "20px",
                        fontWeight: "bold",
                        background:
                          log.action === "Blocked"
                            ? "#14532d"
                            : "#78350f",
                        color:
                          log.action === "Blocked"
                            ? "#22c55e"
                            : "#fbbf24",
                      }}
                    >
                      {log.action}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  style={{
                    textAlign: "center",
                    padding: "30px",
                    color: "#94a3b8",
                  }}
                >
                  No matching firewall logs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

const heading = {
  textAlign: "left",
  padding: "15px",
  borderBottom: "1px solid #475569",
  color: "#cbd5e1",
  fontSize: "16px",
};

const cell = {
  padding: "16px",
  borderBottom: "1px solid #334155",
  fontSize: "15px",
};

export default FirewallLogs;