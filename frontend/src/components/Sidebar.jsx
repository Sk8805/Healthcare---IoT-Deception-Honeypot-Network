function Sidebar() {
  const menuItems = [
    "Dashboard",
    "Attack Logs",
    "Threat Analytics",
    "Honeypots",
    "Settings",
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
        <div
          key={index}
          style={{
            padding: "14px 18px",
            marginBottom: "12px",
            borderRadius: "10px",
            cursor: "pointer",
            backgroundColor:
              item === "Dashboard" ? "#1e293b" : "transparent",
            transition: "0.3s",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;