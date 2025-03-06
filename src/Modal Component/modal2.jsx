import "./modal2.css";
const ModalTwo = ({ isopen, onclose, children }) => {
  if (!isopen) return null;
  return (
    <>
      <div className={"modal-overlay"}>
        <div className="modal">
          <button className="close-btn" onClick={onclose}>
            Close
          </button>
          {children}
        </div>
      </div>
    </>
  );
};
export default ModalTwo;
