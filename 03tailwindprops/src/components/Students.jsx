const Students = ({ name, age, isStudent }) => {
  console.log({ name, age, isStudent });
  //   const { name, age, isStudent } = props;
  return (
    <div className="font-medium text-red-500 text-3xl align-text-top">
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "YES" : "NO"}</p>
      <br />
      <br />
    </div>
  );
};

export default Students;
