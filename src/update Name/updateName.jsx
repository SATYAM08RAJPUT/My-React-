import { useState } from "react";

const UpdateName = () => {
  const [name, setName] = useState("SATYAM");
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(name);

  const handleUpdate = () => {
    setEdit(true);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSave = () => {
    setEdit(false);
    setText(name);
  };

  return (
    <>
      {edit ? (
        <>
          <input value={name} type="text" onChange={handleChange} />{" "}
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {name}
          <button onClick={handleUpdate}>Update Name</button>
        </>
      )}
    </>
  );
};

export default UpdateName;
