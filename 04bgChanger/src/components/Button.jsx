const Button = ({ color, text, changeColor }) => {
  return (
    <button
      className="shadow-sm outline-none px-4 py-1 rounded-full text-white"
      style={{ backgroundColor: color }}
      onClick={() => changeColor(color)}
    >
      {text}
    </button>
  );
};

export default Button;
