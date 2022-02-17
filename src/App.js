import { useEffect } from "react";
import DigitalCity from "./components/DigitalCity";
import './App.css'

function App() {
  useEffect(() => {
    DigitalCity()
  }, [])

  return (
    <div className="App">
      <canvas class="webgl"></canvas>
    </div>
  );
}

export default App;
