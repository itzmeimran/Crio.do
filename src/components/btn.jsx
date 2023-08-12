import { Button } from "@mui/material";
import React from "react";

const Btn = ({ text, endIcon,padding }) => {
  return (
    <Button
      variant="contained"
      endIcon={endIcon}
      fontWeight='bold'
      sx={{
        "&:hover": {
          color: "btn.main",
          backgroundColor: "btn.background",
        },
        padding:{padding},backgroundColor:'transparent'
      }}
      style={{ border: "2px solid black",borderRadius:'.8rem' }}
    >
      {text}
    </Button>
  );
};

export default Btn;
