import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Crio_Dark from "./assets/Crio_Dark.png";
import {
  KeyboardArrowDownSharp, KeyboardArrowRight,
} from "@mui/icons-material";
import Btn from "./components/btn";
const Navbar = () => {
  const menu = ["Hire from Crio", "Projects", "Blog"];
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "1rem 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",position:'fixed',zIndex:'5',marginTop:'2rem',backgroundColor:'primary.main'
      }}
    >
      <Box>
        <img
          style={{ width: "130px", height: "40px" }}
          src={Crio_Dark}
          alt="img"
        />
      </Box>
      <Box sx={{ display: "flex", gap: ".5rem" }}>
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
        <Btn endIcon={<KeyboardArrowRight />} text='Sign In'  />
        <Button fontWeight='bold' color='yellow' sx={{color:'black',fontWeight:'bold',borderRadius:'.8rem'}} variant='contained' endIcon={<KeyboardArrowRight />}>Book Your Free Trail, Now </Button>
      </Box>
    </Container>
  );
};

export default Navbar;
