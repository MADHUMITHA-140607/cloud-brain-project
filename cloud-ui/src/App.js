import React, { useState } from "react";

function App() {
  const [status, setStatus] = useState("");

  const API = "http://13.51.161.235:8080/api";

  const getStatus = async () => {
    const res = await fetch(`${API}/status`);
    const data = await res.text();
    setStatus(data);
  };

  const fail = async () => {
    await fetch(`${API}/simulate-failure`);
    getStatus();
  };

  const heal = async () => {
    await fetch(`${API}/auto-heal`);
    getStatus();
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