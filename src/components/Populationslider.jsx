import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import LoadingMask from "./LoadingMask";

function Populationslider({
  countries,
  setCountriesToRender,
  countriesToRender,
}) {
  const [population, setPopulation] = useState([0, 1402112000]);

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  const handleChangePopulation = (event, value) => {
    setPopulation(value);
  };

  const minPop = population[0];
  const maxPop = population[1];

  useEffect(() => {
    let filterPopulation = countries.filter(
      (country) => country.population >= minPop && country.population <= maxPop
    );
    console.log("slider find:", filterPopulation);
    setCountriesToRender(filterPopulation);
  }, [population]);

  return (
    <>
      <Box sx={{ width: 400 }}>
        <Slider
        sx={{color: '#A7C7E7'}}
          value={population}
          min={0}
          max={1402112000}
          onChange={handleChangePopulation}
        />

        <Typography >
          Minimum population: {formatNumber(minPop)}
        </Typography>
        <Typography >
          Maximum population: {formatNumber(maxPop)}
        </Typography>
        <Typography >
          Listed countries: {countriesToRender.length}
        </Typography>
      </Box>
    </>
  );
}

export default Populationslider;
