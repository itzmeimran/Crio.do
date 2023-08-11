import { ArrowRight } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        padding: ".5rem 0",
        gap: "4px",
        justifyContent: "center",
        backgroundColor: "#2Df8C5",
        position:'fixed',zIndex:'5'
      }}
    >
      <Typography variant="subtitle2" fontSize="16px">
        Find out where Crio grads get placed.{" "}
      </Typography>
      <Typography
        fontSize="16px"
        variant="subtitle2"
        sx={{
          display: "flex",
          alignItems: "center",
          textDecoration: "underline",
        }}
        fontWeight="bold"
      >
        Get our Placement Stats <ArrowRight />
      </Typography>{" "}
    </Box>
  );
};

export default Banner;
