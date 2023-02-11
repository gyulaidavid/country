import React from "react";
import { useParams } from "react-router-dom";

function Countrydetails({
  setCountries,
  setCountriesToRender,
  countries,
  countriesToRender,
}) {
  const { id } = useParams();

  // console.log(countries);

  let foundId;
  if (countries.length > 0) {
    foundId = countries.find((country) => country.name.official === id);
  }

  // console.log(foundId);

  return (
    <>
      <div>Countrydetails {id}
      
      {countries.map ((countryInfo, i) => (
      
        <h1>{countryInfo.name.official}</h1>


      ))}
      
      </div>
    </>
  );
}

export default Countrydetails;
