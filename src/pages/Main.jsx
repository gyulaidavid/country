import React, { useState, useEffect } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import Populationslider from "../components/Populationslider";
import LoadingMask from "../components/LoadingMask";
import Country from "../components/Country";
import Selectregion from "../components/Selectregion";
import Regio from "../components/Regio";

function Main({ setCountriesToRender, countries, countriesToRender, regions }) {
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("asc");

  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    sortBy === "asc"
      ? setCountriesToRender((oldValue) =>
          [...oldValue].sort((a, b) => (a.population < b.population ? 1 : -1))
        )
      : setCountriesToRender((oldValue) =>
          [...oldValue].sort((a, b) => (a.population > b.population ? 1 : -1))
        );
  }, [sortBy]);

  return (
    <>
      {/* Left menu START      */}

      <div className='App'>
        <div className='left'>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            sx={{ mx: "auto" }}
          >
            <TextField
              label='Search'
              variant='outlined'
              type='text'
              value={filter}
              onChange={(event) => {
                setFilter(event.target.value);
              }}
            />
          </Box>

          <div className='pop-slider'>
            <Typography variant='h6'>
              Choose the range of the population:
            </Typography>

            <Populationslider
              countries={countries}
              setCountriesToRender={setCountriesToRender}
              countriesToRender={countriesToRender}
            />
          </div>

          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            sx={{ mx: "auto" }}
          >
            <Button
              sx={{ backgroundColor: "#A7C7E7" }}
              variant='contained'
              onClick={() => {
                sortBy === "asc" ? setSortBy("desc") : setSortBy("asc");
              }}
            >
              Sort by population: {sortBy}
            </Button>
          </Box>

          <Box sx={{ mx: "auto" }}>
            <Selectregion
              setCountriesToRender={setCountriesToRender}
              countriesToRender={countriesToRender}
            />
          </Box>
        </div>

        {/* Right side content with countries START  |||| <Typography variant='h4'>Please, Choose Other Values.</Typography> :*/}

        <div className='right'>
          {countriesToRender.length > 0  ? (
            countriesToRender
              .filter((country) =>
                country.name.official
                  .toLowerCase()
                  .includes(filter.toLowerCase())
              )

              .map((country, i) => <Country country={country} key={i} />)
          ) : <LoadingMask/>
                    
          }

        </div>
      </div>
    </>
  );
}

export default Main;
