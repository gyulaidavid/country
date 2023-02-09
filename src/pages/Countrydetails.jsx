import React from "react";
import { useParams } from "react-router-dom";

function Countrydetails({
  setCountries,
  setCountriesToRender,
  countries,
  countriesToRender,
}) {
  const { id } = useParams();

  return (
    <>
      
      <div>Countrydetails {id}</div>
    </>
  );
}

export default Countrydetails;
