import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Main from "./pages/Main";
import Countrydetails from "./pages/Countrydetails";
import Error from "./pages/Error";
import Layout from "./components/Layout";

function App() {
  const [countries, setCountries] = useState([]);
  const [countriesToRender, setCountriesToRender] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [countryPerPage, setCountryPerPage] = useState(25);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setCountriesToRender(data);
      });
  }, []);

  const indexOfLastCountry = currentPage * countryPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage;
  const currentCountry = countries.slice(indexOfFirstCountry, indexOfLastCountry)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout countries={countries} />}>
          <Route
            path='/'
            element={
              <Main
                countries={countries}
                currentCountry={currentCountry}
                setCountries={setCountries}
                countriesToRender={countriesToRender}
                setCountriesToRender={setCountriesToRender}
              />
            }
          />
          <Route
            path='/:id'
            element={
              <Countrydetails
                countries={countries}
                setCountries={setCountries}
                countriesToRender={countriesToRender}
                setCountriesToRender={setCountriesToRender}
              />
            }
          />

          <Route path='/about' element={<About />} />

          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
