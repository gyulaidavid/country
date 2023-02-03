import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import LoadingMask from "./LoadingMask";


function Populationslider({ countries, setCountriesToRender }) {
  const [population, setPopulation] = useState([0, 1502112000]);
  

  const handleChangePopulation = (event, value) => {
    setPopulation(value);
  };



  // const filterPopulation = () => {
  //   const minPop = population[0];
  //   const maxPop = population[1];

  //   countries.filter(
  //     (country) => country.population >= minPop && country.population <= maxPop
  //   );
  //   // console.log(countries);
  // };

  const minPop = population[0];
  const maxPop = population[1];

  useEffect(() => {
   let filterPopulation = countries.filter((country) => country.population >= minPop && country.population <= maxPop)
   console.log('slider find:' , filterPopulation);
   setCountriesToRender(filterPopulation)
  }, [population]);


  return (
    <>
    <Box sx={{ width: 400 }}>
      <Slider
        value={population}
        min={0}
        max={1502112000}
        onChange={handleChangePopulation}
        valueLabelDisplay='on'
      />
    </Box>

</>
  );
}

export default Populationslider;
