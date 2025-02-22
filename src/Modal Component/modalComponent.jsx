const ModalReuseable = ({ isopen, onClose, children }) => {
  if (!isopen) return null;
  return (
    <>
      <div>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </>
  );
};
export default ModalReuseable;
