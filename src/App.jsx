import "./App.css";
import ColorPicker from "./Color Picker/colorpicker";
import Messages from "./Messages/messages";
import Modal from "./Modal Component/useModal";

function App() {
  return (
    <>
      <ColorPicker />
      <Modal />
      <Messages isLoggedin={true} />
      <Messages isLoggedin={false} />
    </>
  );
}

export default App;
