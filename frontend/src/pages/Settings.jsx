function Settings({ theme, setTheme }) {
  return (
    <div>
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "30px",
        }}
      >
        Settings
      </h1>

      <div
        style={{
          background: "#2a3552",
          padding: "30px",
          borderRadius: "14px",
        }}
      >
        <h2>Appearance</h2>

        <p style={{ marginTop: "20px" }}>Theme</p>

        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "30px",
            borderRadius: "8px",
            background: "#111827",
            color: "white",
          }}
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>

        <h2>Notifications</h2>

        <p>
          <input type="checkbox" defaultChecked /> Email Alerts
        </p>

        <p>
          <input type="checkbox" defaultChecked /> Push Notifications
        </p>

        <br />

        <h2>Dashboard</h2>

        <p>Auto Refresh</p>

        <select
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "30px",
            borderRadius: "8px",
            background: "#111827",
            color: "white",
          }}
        >
          <option>15 sec</option>
          <option>30 sec</option>
          <option>60 sec</option>
        </select>

        <h2>Project Information</h2>

        <p>Version : v1.0</p>
        <p>Environment : Development</p>
        <p>Backend Status : Waiting for API</p>
      </div>
    </div>
  );
}

export default Settings;