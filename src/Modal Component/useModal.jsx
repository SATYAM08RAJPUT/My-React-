import { useState } from "react";
import ModalReuseable from "./modalComponent";

const Modal = () => {
  const [isopenModal, setIsModalopen] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setIsModalopen(true)}>open Modal</button>
        <div>
          <ModalReuseable
            onClose={() => setIsModalopen(false)}
            isopen={isopenModal}
          >
            <p>This is a Modal</p>
          </ModalReuseable>
        </div>
      </div>
    </>
  );
};
export default Modal;
