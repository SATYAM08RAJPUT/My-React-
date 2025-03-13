import { useState } from "react";

const UpdateText = () => {
  const [text, setText] = useState("Satyam");
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleUpdate = () => {
    setEdit(true);
  };

  const handleOnchange = (e) => {
    setNewText(e.target.value);
  };

  const hadleSave = () => {
    setText(newText);
    setEdit(false);
  };

  const handleDelete = () => {
    setText("");
    setEdit(false);
    setNewText("");
  };

  return (
    <>
      {edit ? (
        <>
          <input onChange={handleOnchange} type="text" value={newText} />
          <button onClick={hadleSave}>save</button>
        </>
      ) : (
        <>
          {text}
          <button onClick={handleUpdate}>Update Text</button>
        </>
      )}
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};
export default UpdateText;
