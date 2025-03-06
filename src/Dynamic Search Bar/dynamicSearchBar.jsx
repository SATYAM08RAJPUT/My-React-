import { useEffect, useState } from "react";

const DyanmiSearchBar = ({ url }) => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const userData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setUser(result);
    };
    userData();
  }, [url]);

  const filterData = user.filter((itm) => itm.title.includes(search));

  return (
    <>
      <h3>Dynamic Search Bar</h3>
      <input
        type="search"
        value={search}
        placeholder="Search a Item"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filterData.length > 0 ? (
        filterData.map((itm) => <li>{itm.title}</li>)
      ) : (
        <p>no found data</p>
      )}
    </>
  );
};
export default DyanmiSearchBar;
