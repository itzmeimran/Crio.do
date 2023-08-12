import { Box, Typography, Button, ButtonGroup } from "@mui/material";
import React from "react";
import Btn from "./components/btn";
import {
  KeyboardArrowRightOutlined,
  KeyboardArrowRightSharp,
} from "@mui/icons-material";

const Section8 = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Box
        sx={{
          maxWidth: "790px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight={"bold"}>
          Join A Community Of 5000+ Tech Professionals
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: "gray", maxWidth: "700px", alignSelf: "center" }}
        >
          <Typography
            component="span"
            fontWeight={"bold"}
            sx={{ color: "black" }}
          >
            Meet and grow together
          </Typography>{" "}
          with a community of passionate developers who have taken their careers
          to new heights with Crio.
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: "1100px",
          display: "flex",
          flexDirection: "column",
          padding: "1.5rem 1rem",
          margin: { xs: "0rem 1rem", md: "0 auto" },
          gap: "2rem",
          textAlign: "center",
          borderRadius: "1rem",
          backgroundColor: "#2DF8C5",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Get more insights on how Crio can help you crack a full stack or
          backend role in top tech companies{" "}
        </Typography>
        <ButtonGroup
          sx={{
            display: "flex",
            gap: "2rem",
            margin: "0 auto",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Btn
            padding="1.2rem 1rem"
            endIcon={<KeyboardArrowRightSharp />}
            text="Download Career Handbook"
          />
          <Btn
            padding="1.2rem 1rem"
            endIcon={<KeyboardArrowRightSharp />}
            text="Download Placement Stats"
          />
        </ButtonGroup>
      </Box>
      <Button
        fontWeight="bold"
        color="yellow"
        sx={{
          color: "black",
          fontWeight: "bold",
          boxShadow: " -1px 10px 28px -8px rgba(255,255,48,0.7)",
          "&:hover": { boxShadow: "none" },
          width: "30%",
          minWidth: "300px",
          padding: "1rem .8rem",
          borderRadius: "10px",
          alignSelf: "center",
        }}
        variant="contained"
        endIcon={<KeyboardArrowRightOutlined />}
      >
        Book Your Free Trail, Now{" "}
      </Button>
    </Box>
  );
};

export default Section8;
