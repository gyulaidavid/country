import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import Favorite from "../components/Favorite";
import {
  Box,
  Button,
  Typography,
  Modal,
  Tooltip,
  GlobalStyles,
  Card, CardContent, CardMedia, CardActionArea, CardActions 

} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function Countrydetails({ countries }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { id } = useParams();

  console.log();

  // const filteredCountry = useMemo(() => countries.filter((filterCountry) => filterCountry.name.official === id), [countries, id])

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  return (
    <>
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#A7C7E7" },
        }}
      />
      
        <Box sx={{ p: 1, display: "flex", color: "white" }}>
          {countries
            .filter((filterCountry) => filterCountry.name.official === id)
            .map((filterCountry, i) => (
              <div key={i}>
               
                  
                    <img
                      src={filterCountry.flags.png}
                      alt='{filterCountry.name.official}'
                    />
                  

                  <Typography variant='h3' sx={{ pb: 2,  display: 'flex', flexDirection: 'row'}}>
                    {filterCountry.name.official} <Favorite />
                  </Typography>
                
                <Typography variant='h4' sx={{ pb: 2 }}>
                  Capital: {filterCountry.capital}
                </Typography>

                {/* Coat-of-arms Start */}

                <Box>
                  {/* //Bouvet Island  */}
                  {filterCountry.coatOfArms.hasOwnProperty("png") ? (
                    <Button onClick={handleOpen}>
                      <Tooltip title='Click to enlarge image' placement='right'>
                        <img
                          height={200}
                          src={filterCountry.coatOfArms.png}
                          alt='Click to enlarge image'
                        />
                      </Tooltip>
                    </Button>
                  ) : (
                    "Nincs címer"
                  )}

                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                  >
                    <Box sx={style}>
                      <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'
                      >
                        <img
                          height={600}
                          src={filterCountry.coatOfArms.png}
                          alt='coat-of-arms'
                        />
                      </Typography>
                    </Box>
                  </Modal>
                </Box>

                <Box>
                  <Typography sx={{ my: 1 }} variant='h6'>
                    Continent: {filterCountry.continents}
                  </Typography>
                  <Typography sx={{ mb: 1 }} variant='h6'>
                    Subregion: {filterCountry.subregion}
                  </Typography>

                  <Typography sx={{ mb: 1 }} variant='h6'>
                    Population: {formatNumber(filterCountry.population)}
                  </Typography>
                </Box>
              </div>
            ))}
        </Box>
     
    </>
  );
}

export default Countrydetails;
