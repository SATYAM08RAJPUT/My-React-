import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
      setName(value);
    }
    console.log(name);
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value.includes("@")) {
      setEmail(value);
    }
    console.log(value);
  };

  return (
    <>
      <div>
        <label>Name</label>
        <input type={"text"} value={name} onChange={handleName} />
        <label>Email</label>
        <input type={"email"} value={email} onChange={handleEmail} />
        <label>Password</label>
        <input
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {email}
    </>
  );
};
export default Form;
