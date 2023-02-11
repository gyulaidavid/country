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
              <img height={400} src={filterCountry.coatOfArms.png} alt='coat-of-arms' />
              <iframe 
              src={filterCountry.maps.googleMaps}
             height={400} width={400} title='map'></iframe>
            </div>
          ))}
      
      </div>
    </>
  );
}

export default Countrydetails;
