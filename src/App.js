import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

import "./App.css";
import Country from "./components/Country";
import LoadingMask from "./components/LoadingMask";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState('asc');
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  console.log(countries);

  useEffect(() => {
    sortBy === "asc"
      ? setCountries(oldValue =>
          [...oldValue].sort((a, b) => (a.population < b.population ? 1 : -1))
        )
      : setCountries(oldValue =>
          [...oldValue].sort((a, b) => (a.population > b.population ? 1 : -1))
        );
  }, [sortBy]);

  return (
    <div className='App'>
      <header>

{/* Példák: */}

{/* <Button
onClick={() => setDarkTheme(!darkTheme)}
></Button> */}
{/* 
<Button
onClick={() => setDarkTheme(oldValue => !oldValue)}
></Button> */}


        <p>Filter: </p>
        <input
          type='text'
          placeholder='filter'
          value={filter}
          onChange={(event) => {
            setFilter(event.target.value);
          }}
        />

        <Button
          variant='contained'
          onClick={() => {
            sortBy === "asc" ? setSortBy("desc") : setSortBy("asc");
          }}
        >
          Sort by {sortBy}
        </Button>

      </header>

      {countries ? (
        countries
          .filter((country) =>
            country.name.official.toLowerCase()
              .includes(filter.toLowerCase())
          )
          .map((country, i) => <Country country={country} key={i} />)
      ) : (
        <LoadingMask />
      )}
    </div>
  );
}

export default App;
