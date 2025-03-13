import { useState } from "react";
import "./App.css";
import ColorPicker from "./Color Picker/colorpicker";
import CountNumber from "./Example of useEffect/countNumber";
import Form from "./Form/form";
import CommonParent from "./Lifting State Up/commonParent";
import Messages from "./Messages/messages";
import Modal from "./Modal Component/useModal";
import SumArray from "./Sum/arraySum";
import Timer from "./Timer/timer";
import WindowResize from "./Window Event/windowresize";
import ModalTwo from "./Modal Component/modal2";
import DyanmiSearchBar from "./Dynamic Search Bar/dynamicSearchBar";
import FetchApi from "./fetching API/fetchingAPI";
import ToggleTheme from "./Toggle Themes/togglethemes";
import FirstUseReducer from "./Hooks/UseReducer/firstExample";
import SecondExample from "./Hooks/UseReducer/SecondExample";
import ShoppingCard from "./ShoppingCart.jsx/shoppingCart";
import TableGrid from "./Table/table";
import StudentGrid from "./Students Grid/student";

function App() {
  const [view, setView] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = () => {
    setView(true);
  };

  const handleCloseModal = () => {
    setView(false);
  };

  const handleFilechange = () => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      selectedImage(imageUrl);
    }
  };
  return (
    <>
      {/* <ColorPicker />
      <Modal />
      <Messages isLoggedin={true} />
      <Messages isLoggedin={false} />
      <Form />
      <SumArray /> */}
      {/* <Timer /> */}
      {/* <CommonParent /> */}
      {/* <CountNumber /> */}
      {/* <WindowResize /> */}
      <button onClick={handleOpenModal}>Open</button>
      <ModalTwo isopen={view} onclose={handleCloseModal}>
        <p>Helo satyam</p>
        <input type="file" onChange={handleFilechange} />
      </ModalTwo>
      {/* <DyanmiSearchBar url={"https://jsonplaceholder.typicode.com/posts"} /> */}
      <FetchApi />
      {/* <ToggleTheme /> */}
      {/* <FirstUseReducer /> */}
      {/* <SecondExample /> */}
      {/* <ShoppingCard /> */}
      {/* <TableGrid /> */}
      <StudentGrid />
    </>
  );
}

export default App;
