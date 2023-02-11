import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Favorite from "../components/Favorite";
import { Box, Button, Typography, Modal } from "@mui/material";

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

  console.log(countries);

  return (
    <>
      <div>
        <Favorite />
        {countries
          .filter((filterCountry) => filterCountry.name.official === id)
          .map((filterCountry, i) => (
            <div key={i}>
              <h1>{filterCountry.name.official}</h1>
              <h1>{filterCountry.capital}</h1>

              <Button onClick={handleOpen}>
                <img
                  height={200}
                  src={filterCountry.coatOfArms.png}
                  alt='coat-of-arms'
                />
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
                    <img
                      height={600}
                      src={filterCountry.coatOfArms.png}
                      alt='coat-of-arms'
                    />
                  </Typography>
                </Box>
              </Modal>

              <iframe
                src={filterCountry.maps.googleMaps}
                height={400}
                width={400}
                title='map'
              ></iframe>
            </div>
          ))}
      </div>
    </>
  );
}

export default Countrydetails;
