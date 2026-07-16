const Button = ({ text }) => {
  console.log(`Button: ${text}`);
  return (
    <>
      <button className="px-10 m-5 border border-cyan-800">{text}</button>
    </>
  );
};

export default Button;
