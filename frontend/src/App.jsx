function App() {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1>Healthcare IoT Deception Honeypot Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>Total Attacks</h3>
          <h2>120</h2>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>Unique Attackers</h3>
          <h2>45</h2>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>Active Honeypots</h3>
          <h2>3</h2>
        </div>
      </div>
    </div>
  );
}

export default App;