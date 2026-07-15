import { useEffect, useState } from "react";

function HoneypotStatus() {
  const [devices, setDevices] = useState([]);

  const fetchDevices = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5001/api/devices");
      const data = await response.json();
      setDevices(data);
    } catch (error) {
      console.error("Error fetching devices:", error);
    }
  };

  useEffect(() => {
    fetchDevices();

    const interval = setInterval(() => {
      fetchDevices();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

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

          <span
            style={{
              color:
                device.status === "Online"
                  ? "#22c55e"
                  : "#ef4444",
            }}
          >
            ● {device.status}
          </span>
        </div>
      ))}
    </div>
  );
}

export default HoneypotStatus;