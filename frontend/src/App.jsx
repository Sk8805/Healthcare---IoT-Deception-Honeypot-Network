import StatCard from "./components/StatCard";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#071330",
        minHeight: "100vh",
        width: "100vw",
        color: "white",
        padding: "40px",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "50px",
          marginTop: "20px",
        }}
      >
        Healthcare IoT Deception Honeypot Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        <StatCard title="Total Attacks" value="120" />
        <StatCard title="Unique Attackers" value="45" />
        <StatCard title="Active Honeypots" value="3" />
      </div>
    </div>
  );
}

export default App;