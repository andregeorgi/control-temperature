import React, { useState } from "react";

function App() {
  const [temperature, setTemperature] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  function increaseTemp() {
    if (temperature === 30) return;
    const newTemperature = temperature + 1;

    if (newTemperature >= 15) {
      setTemperatureColor("hot");
    }

    setTemperature(newTemperature);
  }

  function decreaseTemp() {
    if (temperature === 0) return;
    const newTemperature = temperature - 1;

    if (newTemperature < 15) {
      setTemperatureColor("cold");
    }
    setTemperature(newTemperature);
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperature}℃
        </div>
      </div>
      <div className="button-container">
        <button onClick={increaseTemp}>+</button>
        <button onClick={decreaseTemp}>-</button>
      </div>
    </div>
  );
}

export default App;
