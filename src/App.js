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

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setCountriesToRender(data);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout countries={countries} />}>
          <Route
            path='/'
            element={
              <Main
                countries={countries}
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
