import { useEffect, useState } from "react";

function ThreatAnalytics() {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/analytics")
      .then((res) => res.json())
      .then((data) => setAnalytics(data))
      .catch((err) => console.log(err));
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
      <h2 style={{ marginBottom: "20px" }}>
        Threat Analytics
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {analytics.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#0f172a",
              flex: "1",
              minWidth: "180px",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h3>{item.title}</h3>

            <h1
              style={{
                color: "#38bdf8",
                marginTop: "10px",
              }}
            >
              {item.value}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThreatAnalytics;