function LoadingScreen() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#071330",
        color: "white",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          border: "6px solid #27324a",
          borderTop: "6px solid #38bdf8",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />

      <h2
        style={{
          marginTop: "25px",
        }}
      >
        Loading Dashboard...
      </h2>

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default LoadingScreen;