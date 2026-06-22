function StatCard({ title, value }) {
  return (
    <div
      style={{
        background: "#1e293b",
        width: "280px",
        padding: "25px",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
      }}
    >
      <h3
        style={{
          color: "#94a3b8",
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          color: "#38bdf8",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default StatCard;