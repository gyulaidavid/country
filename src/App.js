import React, { useState, useEffect } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";

import "./App.css";
import Country from "./components/Country";
import LoadingMask from "./components/LoadingMask";
import Populationslider from "./components/Populationslider";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("asc");
  const [countriesToRender, setCountriesToRender] = useState(0);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setCountriesToRender(data);
      });
  }, []);

  console.log(countries);

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
      <header>
        <ul>
          <li>országok zászlói köré árnyék, vagy keret</li>
          <li>fejlécbe bejelentkezés icon</li>
        </ul>
      </header>

      <div className='App'>
        <div className='left'>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            sx={{ mx: "auto" }}
          >
            <TextField
              color='secondary'
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
              variant='contained'
              onClick={() => {
                sortBy === "asc" ? setSortBy("desc") : setSortBy("asc");
              }}
            >
              Sort by population: {sortBy}
            </Button>
          </Box>
        </div>

        <div className='right'>
          {!countriesToRender ? (
            <LoadingMask />
          ) : countriesToRender.length === 0 ? (
            <Typography variant='h3'>Please, Choose Other Values.</Typography>
          ) : countriesToRender ? (
            countriesToRender
              .filter((country) =>
                country.name.official
                  .toLowerCase()
                  .includes(filter.toLowerCase())
              )

              .map((country, i) => <Country country={country} key={i} />)
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
