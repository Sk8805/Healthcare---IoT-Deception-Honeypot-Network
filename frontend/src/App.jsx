import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import ThreatMonitoring from "./pages/ThreatMonitoring";
import ThreatAnalyticsPage from "./pages/ThreatAnalyticsPage";
import FirewallLogs from "./pages/FirewallLogs";
import Settings from "./pages/Settings";

function App() {
  const [theme, setTheme] = useState("dark");

  const darkTheme = {
    background: "#071330",
    text: "#ffffff",
  };

  const lightTheme = {
    background: "#f3f4f6",
    text: "#111827",
  };

  const currentTheme = theme === "dark" ? darkTheme : lightTheme;

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: currentTheme.background,
        color: currentTheme.text,
        transition: "all 0.3s ease",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "40px",
          overflowY: "auto",
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/threat-monitoring"
            element={<ThreatMonitoring />}
          />

          <Route
            path="/threat-analytics"
            element={<ThreatAnalyticsPage />}
          />

          <Route
            path="/firewall-logs"
            element={<FirewallLogs />}
          />

          <Route
            path="/settings"
            element={
              <Settings
                theme={theme}
                setTheme={setTheme}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;