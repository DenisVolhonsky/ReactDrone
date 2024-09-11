import React, { useState, useEffect } from "react";

const DroneData = () => {
  const [droneData, setDroneData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => setDroneData(data))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  if (!droneData) return;
  <p>Loading...</p>;

  console.log(droneData);
  return (
    <>
      <h3>Drone Telemetry:</h3>
      <p>Drone id: {droneData.id}</p>
      <p>Drone name: {droneData.title}</p>
      <p>Drone landed: {droneData.completed.toString()}</p>
    </>
  );
};

export default DroneData;
