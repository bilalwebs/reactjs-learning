import Button from "./components/Button";
import Students from "./components/Students";

const App = () => {
  // ================= Buttons =================

  const buttons = [
    { id: 1, text: "Login" },
    { id: 2, text: "Logout" },
    { id: 3, text: "Sign Up" },
    { id: 4, text: "Visit Website" },
    { id: 5, text: "Download" },
  ];

  // ================= Students =================

  const students = [
    {
      id: 1,
      name: "Bilal",
      age: 22,
      isStudent: true,
    },
    {
      id: 2,
      name: "Ali",
      age: 25,
      isStudent: false,
    },
    {
      id: 3,
      name: "Ahmed",
      age: 20,
      isStudent: true,
    },
  ];

  return (
    <div className="">
      <h1>React Props Practice</h1>

      <hr />

      <h2>Students</h2>

      {students.map((std) => (
        <Students
          key={std.id}
          name={std.name}
          age={std.age}
          isStudent={std.isStudent}
        />
      ))}
      <br />
      <hr />

      <h2>Buttons</h2>
      {buttons.map((button) => (
        <Button key={button.id} text={button.text} />
      ))}
    </div>
  );
};

export default App;
