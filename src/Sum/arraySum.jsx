import { useEffect, useState } from "react";
import "./arraySum.css";
const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const SumArray = () => {
  const [sum, setSum] = useState(0);
  const [half, setHalf] = useState([]);

  const handleSumOfHalf = () => {
    const halfValue = [];
    array.forEach((itm) => {
      halfValue.push(itm / 5);
    });
    console.log(halfValue);
    const takeValue = halfValue.reduce(
      (acc, currentIndex) => acc + currentIndex
    );
    setSum(takeValue);
    return halfValue;
  };

  useEffect(() => {
    const halfValue = [];
    const halfArry = array.map((itm) => {
      halfValue.push(itm / 5);
    });
    setHalf(halfValue);
    console.log(halfArry);
    console.log(half);
  }, []);
  console.log(half);

  return (
    <>
      {array.map((itm, index) => (
        <div>
          {itm} /5 = <strong>{half[index]}</strong>
        </div>
      ))}

      <button onClick={handleSumOfHalf}>Sum of Half Value</button>
      {sum}
      {/* <div className="container" style={{ backgroundColor: color }}></div> */}
    </>
  );
};
export default SumArray;
