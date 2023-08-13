import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Crio_Dark from "./assets/Crio_Dark.png";
import {
  KeyboardArrowDownSharp,
  KeyboardArrowRight,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Btn from "./components/btn";
const Navbar = () => {
  const menu = ["Hire from Crio", "Projects", "Blog"];

  const [display, setDisplay] = useState("none");

  function handleDisplay() {
    display === "none" ? setDisplay("flex") : setDisplay("none");
  }
  return (
    <Box
      sx={{
        padding: "1rem 1.3rem",
        width: "100vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        zIndex: "5",
        marginTop: "2.5rem",
        backgroundColor: "primary.main",
      }}
    >
      <Box>
        <img
          style={{ width: "130px", height: "40px" }}
          src={Crio_Dark}
          alt="img"
        />
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" }, gap: ".9rem" }}>
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          fontSize="14px"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          component="li"
        >
          Programs <KeyboardArrowDownSharp />
        </Typography>
        {menu.map((item, index) => {
          return (
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              fontSize="14px"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              component="li"
              key={index}
            >
              {item}
            </Typography>
          );
        })}
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          fontSize="14px"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          component="li"
        >
          Placements <KeyboardArrowDownSharp />
        </Typography>
        <Btn endIcon={<KeyboardArrowRight />} text="Sign In" />
        <Button
          fontWeight="bold"
          color="yellow"
          sx={{ color: "black", fontWeight: "bold", borderRadius: ".8rem" }}
          variant="contained"
          endIcon={<KeyboardArrowRight />}
        >
          Book Your Free Trail, Now{" "}
        </Button>
      </Box>
      <MenuIcon
        onClick={handleDisplay}
        sx={{ cursor: "pointer", display: { md: "none" } }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "100vw",
          backgroundColor: "white",
          display: display,
          flexDirection: "column",
          textAlign: "center",
          padding: "1rem 0",
          left: "0px",
          right: "0px",
          top: "60px",
        }}
      >
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          fontSize="14px"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: ".8rem 0rem",
          }}
          component="li"
        >
          Programs <KeyboardArrowDownSharp />
        </Typography>
        {menu.map((item, index) => {
          return (
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              fontSize="14px"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: ".8rem 0rem",
              }}
              component="li"
              key={index}
            >
              {item}
            </Typography>
          );
        })}
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          fontSize="14px"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: ".8rem 0rem",
          }}
          component="li"
        >
          Placements <KeyboardArrowDownSharp />
        </Typography>
        <Btn
          maxWidth="40vw"
          alignSelf="center"
          width="300px"
          endIcon={<KeyboardArrowRight />}
          text="Sign In"
        />
      </Box>
    </Box>
  );
};

export default Navbar;
