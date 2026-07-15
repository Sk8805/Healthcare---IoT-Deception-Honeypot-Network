import { useEffect, useState } from "react";

function TopTargets() {
  const [devices, setDevices] = useState([]);

  const fetchTargets = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:5001/api/top-targets"
      );
      const data = await response.json();
      setDevices(data);
    } catch (error) {
      console.error("Error fetching top targets:", error);
    }
  };

  useEffect(() => {
    fetchTargets();

    const interval = setInterval(() => {
      fetchTargets();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const maxAttacks =
    devices.length > 0
      ? Math.max(...devices.map((device) => device.attacks))
      : 1;

  return (
    <div
      style={{
        background: "#1e2b45",
        marginTop: "35px",
        borderRadius: "12px",
        padding: "25px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        Top Targeted Devices
      </h2>

      {devices.map((device, index) => (
        <div key={index} style={{ marginBottom: "18px" }}>
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
                width: `${(device.attacks / maxAttacks) * 100}%`,
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