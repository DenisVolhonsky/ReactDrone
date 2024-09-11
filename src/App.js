import DroneControl from "./components/DroneControl.js";
import ParentComponent from "./components/ExpensiveComponents.js";
import DroneData from "./components/DroneData.js";
import FlightMap from "./components/FlightMap.js";
import WebSocketDrone from "./components/WebSocketDrone.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React drone tasks</h1>
      <DroneControl />
      <ParentComponent />
      <DroneData />
      <WebSocketDrone />
      <h3>MAP</h3>
      <FlightMap />
    </div>
  );
}
