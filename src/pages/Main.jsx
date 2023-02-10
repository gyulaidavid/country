import React, {useState, useEffect} from 'react'
import { Button, TextField, Typography, Box } from "@mui/material";
import Populationslider from '../components/Populationslider';
import LoadingMask from '../components/LoadingMask';
import Country from '../components/Country';
import Paginationcomponent from '../components/Paginationcomponent';


function Main({setCountries, setCountriesToRender, countries, countriesToRender }) {
    const [filter, setFilter] = useState("");
    const [sortBy, setSortBy] = useState("asc");


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
      </div>

{/* Right side content with countries START */}

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
    
<Paginationcomponent/>

  </>
  )
}

export default Main