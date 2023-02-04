import React, { useState } from "react";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";
import { Button } from "@mui/material";

function Favorite() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div>
      <Button
        sx={{ color: "#A7C7E7" }}
        onClick={() => {
          setIsFavorite((oldValue) => !oldValue);
        }}
      >
        {isFavorite ? <PushPinIcon /> : <PushPinOutlinedIcon />}
      </Button>
    </div>
  );
}

export default Favorite;
