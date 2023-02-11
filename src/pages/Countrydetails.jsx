import React from "react";
import { useParams } from "react-router-dom";
import Favorite from "../components/Favorite";

function Countrydetails({ countries }) {
  const { id } = useParams();

console.log(countries);

  return (
    <>
      <div>
       <Favorite/>
        {countries
          .filter((filterCountry) => filterCountry.name.official === id)
          .map((filterCountry, i) => (
            <div key={i}>
              <h1>{filterCountry.name.official}</h1>
              <h1>{filterCountry.capital}</h1>
              <img src={filterCountry.coatOfArms.png} alt='' />
              <iframe 
              src={filterCountry.maps.googleMaps}
              width={800} height={500}></iframe>
            </div>
          ))}
        {/* {countries.map((countryInfo, i) => (
          <h1>{countryInfo.name.official}</h1>
        ))} */}
      </div>
    </>
  );
}

export default Countrydetails;
