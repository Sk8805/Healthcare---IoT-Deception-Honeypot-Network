import { useEffect, useState } from "react";

function NotificationCenter() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/alerts")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          ...item,
          color:
            item.level === "Critical"
              ? "#ef4444"
              : item.level === "High"
              ? "#f97316"
              : item.level === "Success"
              ? "#22c55e"
              : "#38bdf8",
        }));

        setNotifications(formatted);
      })
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
      <h2
        style={{
          marginBottom: "20px",
          color: "#ffffff",
        }}
      >
        Notification Center
      </h2>

      {notifications.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 0",
            borderBottom:
              index !== notifications.length - 1
                ? "1px solid #3b4863"
                : "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: item.color,
                display: "inline-block",
              }}
            ></span>

            <div>
              <strong
                style={{
                  color: item.color,
                }}
              >
                {item.level}
              </strong>

              <div
                style={{
                  color: "#ffffff",
                  marginTop: "4px",
                }}
              >
                {item.message}
              </div>
            </div>
          </div>

          <span
            style={{
              color: "#94a3b8",
              fontSize: "14px",
            }}
          >
            {item.time}
          </span>
        </div>
      ))}
    </div>
  );
}

export default NotificationCenter;