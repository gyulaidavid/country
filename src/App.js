import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";

import "./App.css";
import Country from "./components/Country";
import LoadingMask from "./components/LoadingMask";
import Populationslider from "./components/Populationslider";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState('asc');
  const [countriesToRender, setCountriesToRender] = useState(null)
  //const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data)
        setCountriesToRender(data)
      });
  }, []);


  useEffect(() => {
    sortBy === "asc"
    ? setCountriesToRender(oldValue =>
      [...oldValue].sort((a, b) => (a.population < b.population ? 1 : -1))
      )
      : setCountriesToRender(oldValue =>
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


    
        <TextField
        label="Search" variant="outlined"
          type='text'
      
          value={filter}
          onChange={(event) => {
            setFilter(event.target.value);
          }}
        />

<br/><br/>

<Populationslider countries={countries} setCountriesToRender={setCountriesToRender}/>

        <Button
          variant='contained'
          onClick={() => {
            sortBy === "asc" ? setSortBy("desc") : setSortBy("asc");
          }}
        >
          Sort by {sortBy}
        </Button>

      </header>

      {(!countriesToRender ) ? ( <LoadingMask />)
      
      : (countriesToRender.length === 0) ? ('Válassz másik értéket') :
      (countriesToRender) ?
        (countriesToRender
          .filter((country) =>
            country.name.official.toLowerCase() 
              .includes(filter.toLowerCase()) )
                          
          .map((country, i) => <Country country={country} key={i} />))
       : 
         (null)}
      
    </div>
  );
}

export default App;
