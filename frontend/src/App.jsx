import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";

function App() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#071330",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "40px",
            color: "#f8fafc",
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
    </div>
  );
}

export default App;