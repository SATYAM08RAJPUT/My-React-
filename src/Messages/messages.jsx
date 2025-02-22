const Messages = ({ isLoggedin }) => {
  if (!isLoggedin) return null;
  return (
    <>
      <h3>Hello Modal !!</h3>
    </>
  );
};
export default Messages;
