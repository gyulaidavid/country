import React, { useState, useEffect } from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Selectregion() {
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setSelectedRegion(event.target.value);
    handleOpen()
  };

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`)
      .then((res) => res.json())
      .then((data) => setRegions(data));
  }, [selectedRegion]);

  console.log(selectedRegion, regions);

  return (
    <>
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        >
         
        <Box sx={style}>
          <Typography variant="h5">{selectedRegion}</Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
             {regions.map((regio, i) => (
              <Box key={i}> {regio.name.official}</Box>))}
           
              </Typography> 
        </Box>
      </Modal>
    </>
  );
}

export default Selectregion;
