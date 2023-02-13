import React, { useState, useEffect } from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

function Selectregion() {
  
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`)
      .then((res) => res.json())
      .then((data) => setRegions(data));
  }, [selectedRegion]);

console.log(selectedRegion, regions);


  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Region</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={selectedRegion}
          label='Region'
          onChange={handleChange}
        >
          <MenuItem value={"Africa"}>Africa</MenuItem>
          <MenuItem value={"Americas"}>Americas</MenuItem>
          <MenuItem value={"Asia"}>Asia</MenuItem>
          <MenuItem value={"Europe"}>Europe</MenuItem>
          <MenuItem value={"Oceania"}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Selectregion;
