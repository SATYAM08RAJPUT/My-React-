const Input = ({ type, value, placeholder, onchange }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onchange}
      />
    </>
  );
};
export default Input;
