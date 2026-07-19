import React, { useEffect, useState } from "react";
import Details from "./Details.jsx";
export default function Dropdown({ pokArr }) {
  const [show, setShow] = useState("");
  const [api, setApi] = useState("");
  const handleChange = (event) => {
    setShow(event.target.value);
    const selpok = pokArr.find((p) => {
      return p.name === event.target.value;
    });
    setApi(selpok?.url || "");
  };
  return (
    <>
      <label htmlFor="Pokemon">Select suitable Pokemon: </label>
      <select name="pokemon" onChange={handleChange}>
        <option value="">Select any</option>
        {pokArr.map((p) => {
          return (
            <option value={p.name} key={p.name}>
              {p.name}
            </option>
          );
        })}
      </select>
      ---------------------
      <br />
      Display Name:{show}
      <br />
      <Details url={api} />
    </>
  );
}
