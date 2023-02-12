import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";

import "../App.css";
import Favorite from "./Favorite";
import { Link } from "react-router-dom";

function Country({ country }) {
  const [detailsShown, setDetailsShown] = useState(false);

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  return (
    <>
    <div className='countries'>
      <Box align='center'>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          
          <Button
        
          component={Link} to={`/${country.name.official}`}>
            <Typography variant='h4'> {country.name.official}</Typography>
         
          </Button>
          <Favorite />
        </Box>

        <Typography sx={{ mb: 1 }} variant='h6'>
          {" "}
          Capital: {country.capital}
        </Typography>
      </Box>

      <Button
        sx={{ backgroundColor: "#A7C7E7" }}
        style={{ justifyContent: "center" }}
        variant='contained'
        onClick={() => setDetailsShown((oldValue) => !oldValue)}
      >
        {detailsShown ? "Show less" : "Show more"}
      </Button>
      {detailsShown && (
        <>
          <Box align='center'>
            <Typography sx={{ my: 1 }} variant='h6'>
              Continent: {country.continents}
            </Typography>
            <Typography sx={{ mb: 1 }} variant='h6'>
              Subregion: {country.subregion}
            </Typography>

            <Typography sx={{ mb: 1 }} variant='h6'>
              Population: {formatNumber(country.population)}
            </Typography>
          </Box>
          <Box sx={{ boxShadow: 3, p: 1, m: 1 }}>
            <div>
              <img src={country.flags.png} alt='{country.name.official}' />
            </div>
          </Box>

          
        </>
      )}
      
    </div>
    
    </>
  );
}

export default Country;
