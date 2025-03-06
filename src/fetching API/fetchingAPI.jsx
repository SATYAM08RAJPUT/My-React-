import { useEffect, useState } from "react";

const FetchApi = () => {
  const [todoSdata, SetTodosData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => SetTodosData(data));
  }, []);
  console.log(todoSdata);
  return (
    <>
      <h3>Fetch API</h3>
      {todoSdata.slice(0, 10).map((itm) => (
        <div>{itm.title}</div>
      ))}
    </>
  );
};
export default FetchApi;
