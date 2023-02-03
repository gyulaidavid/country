import React, { useState } from "react";
import { Button } from "@mui/material";

function Country({ country }) {
  const [detailsShown, setDetailsShown] = useState(false);

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  return (
    <div>
      <h1>{country.name.official}</h1>

      <Button
        variant='contained'
        onClick={() => setDetailsShown((oldValue) => !oldValue)}
      >
        {detailsShown ? "Show less" : "Show more"}
      </Button>
      {detailsShown && (
        <>
          <h2>Continent: {country.continents}</h2>
          <h3>Subregion: {country.subregion}</h3>
          <h3>Population: {formatNumber(country.population)}</h3>
          <div>
            <img src={country.flags.png} alt='{country.name.official}' />
          </div>
        </>
      )}
    </div>
  );
}

export default Country;
