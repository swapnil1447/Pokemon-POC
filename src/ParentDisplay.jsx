import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown.jsx";
function ParentDisplay() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        let fetchData = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=50"
        );
        let result = await fetchData.json();
        setData(result.results);
      } catch (err) {
        cosole.log(err);
      }
    };
    fetchdata();
  }, []);
  return (
    <>
      ----------------- <br />
      <h1>POKEMON APP</h1>
      ----------------- <br />
      <Dropdown pokArr={data} />
    </>
  );
}
export default ParentDisplay;
