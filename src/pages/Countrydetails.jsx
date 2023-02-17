import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import Favorite from "../components/Favorite";
import { Box, Button, Typography, Modal, Tooltip } from "@mui/material";

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

  return (
    <>
      <Box sx={{ p: 1, display: "flex" }}>
        {countries
          .filter((filterCountry) => filterCountry.name.official === id)
          .map((filterCountry, i) => (
            <div key={i}>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant='h3' sx={{ pb: 2 }}>
                  Official name: {filterCountry.name.official}
                </Typography>

                <Favorite />
              </Box>
              <Typography variant='h4' sx={{ pb: 2 }}>
                Capital: {filterCountry.capital}
              </Typography>

              {/* Coat-of-arms Start */}

              <Box>
                <Typography>Coat-of-arms:</Typography>
                <Button onClick={handleOpen}>
                  <Tooltip title='Click to enlarge image' placement='right'>
                    <img
                      height={200}
                      src={filterCountry.coatOfArms.png}
                      alt='Click to enlarge image'
                    />
                  </Tooltip>
                </Button>
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
                      {filterCountry.coatOfArms.length === 0 ? (
                        "Nincs címer" //Bouvet Island
                      ) : (
                        <img
                          height={600}
                          src={filterCountry.coatOfArms.png}
                          alt='coat-of-arms'
                        />
                        )}
                    </Typography>
                  </Box>
                </Modal>
              </Box>
                   

              <iframe
                http-equiv='X-Frame-Options'
                content='CROSSORIGIN'
                src={filterCountry.maps.googleMaps}
                height={400}
                width={400}
                title='map'
              ></iframe>
            </div>
          ))}
      </Box>
    </>
  );
}

export default Countrydetails;
