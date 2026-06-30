import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Threat Monitoring", path: "/threat-monitoring" },
    { name: "Threat Analytics", path: "/threat-analytics" },
    { name: "Firewall Logs", path: "/firewall-logs" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "25px 20px",
        borderRight: "1px solid #1e293b",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          marginBottom: "40px",
          color: "#38bdf8",
        }}
      >
        🛡 Honeypot
      </h1>

      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <div
            style={{
              padding: "14px 18px",
              marginBottom: "12px",
              borderRadius: "10px",
              cursor: "pointer",
              backgroundColor:
                location.pathname === item.path
                  ? "#1e293b"
                  : "transparent",
              transition: "0.3s",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;