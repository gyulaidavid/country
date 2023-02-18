import React, { useState } from "react";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";
import { Button } from "@mui/material";
import { addCountry, deleteCountry } from "../DataManager";
import { async } from "@firebase/util";

function Favorite({ country }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [countryName, setCountryName] = useState(country.name.official);
  const [countryCapital, setCountryCapital] = useState(country.capital);

  return (
    <div>
      <Button
        sx={{ color: "#A7C7E7" }}
        onClick={async () => {
          await addCountry(countryName, countryCapital);
          setIsFavorite((oldValue) => !oldValue);
        }}
      >
        {isFavorite ? <PushPinIcon /> : <PushPinOutlinedIcon />}
      </Button>

      <Button
      onClick={async () => {
        await deleteCountry()
      }}
      
      variant="outline">Remove from favorite</Button>
    </div>
  );
}

export default Favorite;
