import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

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
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        <Dashboard />
      </div>
    </div>
  );
}

export default App;