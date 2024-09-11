import React, { useCallback, useState } from "react";

const ExpensiveComponent = React.memo(({ onClick }) => {
  console.log("Rendered Expensive Component");
  return <button onClick={onClick}>Click me!</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const inc = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h3>Count: {count}</h3>
      <ExpensiveComponent onClick={inc} />
    </div>
  );
};

export default ParentComponent;
