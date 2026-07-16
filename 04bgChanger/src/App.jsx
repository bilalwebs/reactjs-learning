import { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [color, setColor] = useState("olive");

  const colors = [
    {
      id: 1,
      text: "Red",
      color: "red",
    },
    {
      id: 2,
      text: "Blue",
      color: "blue",
    },
    {
      id: 3,
      text: "Green",
      color: "green",
    },
    {
      id: 4,
      text: "Yellow",
      color: "yellow",
    },
    {
      id: 5,
      text: "Purple",
      color: "purple",
    },
  ];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex justify-center bottom-12 inset-x-0">
        <div className="flex gap-3 bg-white p-3 rounded-3xl">
          {colors.map((item) => (
            <Button
              key={item.id}
              color={item.color}
              text={item.text}
              changeColor={setColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
