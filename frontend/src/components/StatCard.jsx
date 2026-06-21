function StatCard({ title, value }) {
  return (
    <div
      style={{
        backgroundColor: "#1e2b4a",
        width: "280px",
        padding: "25px",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}

export default StatCard;