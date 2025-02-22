import { useState } from "react";
import "./colorPicker.css";

const ColorPicker = () => {
  const [color, sertColor] = useState("white");
  const handleColorPicker = (e) => {
    console.log(e.target.value);
    sertColor(e.target.value);
  };
  return (
    <>
      <input type="color" onChange={handleColorPicker} />
      <div style={{ backgroundColor: color }} className="container"></div>
    </>
  );
};
export default ColorPicker;
