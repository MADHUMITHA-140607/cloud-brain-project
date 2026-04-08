import React, { useState } from "react";

function App() {
  const [status, setStatus] = useState("");

  // 👉 IMPORTANT: Your EC2 backend IP
  const API = "http://51.20.98.145:8080/api";

  // Get system status
  const getStatus = async () => {
    try {
      const res = await fetch(`${API}/status`);
      const data = await res.text();
      setStatus(data);
    } catch (error) {
      console.error("Error fetching status:", error);
      setStatus("Error connecting to backend");
    }
  };

  // Simulate failure
  const fail = async () => {
    try {
      await fetch(`${API}/simulate-failure`);
      getStatus();
    } catch (error) {
      console.error("Error simulating failure:", error);
      setStatus("Error connecting to backend");
    }
  };

  // Auto heal
  const heal = async () => {
    try {
      await fetch(`${API}/auto-heal`);
      getStatus();
    } catch (error) {
      console.error("Error healing system:", error);
      setStatus("Error connecting to backend");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>☁️ Cloud Brain Dashboard</h1>

      <h2>Status: {status}</h2>

      <button onClick={getStatus}>Check Status</button>
      <br /><br />

      <button onClick={fail}>Simulate Failure</button>
      <br /><br />

      <button onClick={heal}>Auto Heal</button>
    </div>
  );
}

export default App;