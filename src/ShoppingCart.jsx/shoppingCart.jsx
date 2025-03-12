import "./shoppingCard.css";

const products = [
  { id: "1", name: "Mango", Price: 200 },
  { id: "2", name: "Apple", Price: 200 },
];

const ShoppingCard = () => {
  const handleIncrese = (itm) => {
    products.Price[itm];
  };

  return (
    <>
      <div className="container">
        {products.map((itm, id) => (
          <div>
            <li>
              {itm.name}
              <span> - {itm.Price * id}</span>{" "}
              <button onClick={() => handleIncrese(itm)}>Quantity</button>
            </li>
          </div>
        ))}
      </div>
    </>
  );
};
export default ShoppingCard;
