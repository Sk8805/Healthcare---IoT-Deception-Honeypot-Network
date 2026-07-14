import { useEffect, useState } from "react";

function DeviceOverview() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/devices")
      .then((res) => res.json())
      .then((data) => setDevices(data))
      .catch((err) => console.log(err));
  }, []);

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
          </div>

          <div
            style={{
              color:
                device.status === "Online"
                  ? "#22c55e"
                  : "#ef4444",
              fontWeight: "bold",
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