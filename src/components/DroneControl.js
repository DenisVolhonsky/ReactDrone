import React, { useState } from "react";

// y - vertical (top and down)
// x - horizontal (left and right)

const DroneControl = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveDrone = (direction) => {
    switch (direction) {
      case "up":
        setPosition({ ...position, y: position.y + 1 });
        break;
      case "down":
        setPosition({ ...position, y: position.y - 1 });
        break;
      case "left":
        setPosition({ ...position, x: position.x - 1 });
        break;
      case "right":
        setPosition({ ...position, x: position.x + 1 });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h3>
        Drone position: X:{position.x}, Y:{position.y}
      </h3>
      <button onClick={() => moveDrone("up")}>UP</button>
      <button onClick={() => moveDrone("down")}>DOWN</button>
      <button onClick={() => moveDrone("left")}>LEFT</button>
      <button onClick={() => moveDrone("right")}>RIGHT</button>
    </div>
  );
};

export default DroneControl;
