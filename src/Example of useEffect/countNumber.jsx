import { useEffect, useState } from "react";

const CountNumber = () => {
  const [number, setNumber] = useState([]);

  useEffect(() => {
    let container = [];
    for (let i = 0; i <= 10; i++) {
      setTimeout(() => {
        console.log(i);
        container.push(i);
        setNumber([...container]);
      }, i * 2000);
    }
    return () => clearInterval(container);
  }, []);

  return (
    <>
      {number.map((itm) => (
        <div>{itm}</div>
      ))}
    </>
  );
};

export default CountNumber;
