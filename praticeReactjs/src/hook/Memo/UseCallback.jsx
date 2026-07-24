import { memo, useCallback, useState } from "react";

// Child Component
const Button = memo(({ children, onClick }) => {
  console.log(`Rendering Button: ${children}`);

  return (
    <button
      onClick={onClick}
      className={`text-black mb-4 py-2 px-5 ${
        children === "Increment" ? "bg-green-400" : "bg-red-400"
      }`}
    >
      {children}
    </button>
  );
});

const UseCallback = () => {
  console.log("Parent Component Render");

  const [count, setCount] = useState(0);

  // Function will be created only once
  const increment = useCallback(() => {
    console.log("Increment Clicked");
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    console.log("Decrement Clicked");
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div className="p-4 h-screen flex flex-col justify-center items-center bg-black text-white">
      <h1 className="text-3xl mb-6">Count : {count}</h1>

      <Button onClick={increment}>Increment</Button>

      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};

export default UseCallback;
