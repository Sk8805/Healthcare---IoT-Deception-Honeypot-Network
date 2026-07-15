import { useEffect, useState } from "react";

function ActivityTimeline() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5001/api/activity")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          ...item,
          color:
            item.severity === "Critical"
              ? "#ef4444"
              : item.severity === "High"
              ? "#22c55e"
              : item.severity === "Medium"
              ? "#f59e0b"
              : "#38bdf8",
        }));

        setActivities(formatted);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        background: "#27324a",
        borderRadius: "14px",
        padding: "25px",
        marginTop: "30px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        Activity Timeline
      </h2>

      {activities.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: item.color,
              marginRight: "15px",
            }}
          />

          <div style={{ flex: 1 }}>
            <div>{item.event}</div>

            <div
              style={{
                color: "#94a3b8",
                fontSize: "13px",
                marginTop: "3px",
              }}
            >
              {item.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActivityTimeline;