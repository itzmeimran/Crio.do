import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import HomepageHero from "./assets/HomepageHero.png";
import {
  CircleRounded,
  KeyboardArrowRight,
  PlayArrow,
  TrendingUpOutlined,
} from "@mui/icons-material";
import Btn from "./components/btn";

const Section1 = () => {
  const stats = [
    {
      h1: "93%",
      sub: "placed within 8 months of graduation",
    },
    {
      h1: "11 LPA",
      sub: "average dream job CTC",
    },
    {
      h1: "22 LPA",
      sub: "average super-dream job CTC",
    },
    {
      h1: "750+",
      sub: "Hiring Partners",
    },
    {
      h1: "89%",
      sub: "Average Salary Hike",
    },

    // Add more objects if needed
  ];

  return (
    <Container
      sx={{ display: "flex", flexDirection: "row", marginTop: "6.5rem" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          width: "585px",
          position: "relative",
        }}
      >
        <Typography fontWeight={"bold"} variant="h3">
          Learn Like You Would At India’s Top Tech Companies.
        </Typography>
        <Typography sx={{ color: "gray" }} variant="h5">
          Work-experience based learning programs to land your dream tech job
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
          <Typography sx={{ color: "gray" }} variant="subtitle2">
            <Typography
              fontWeight={"bold"}
              variant="subtitle2"
              sx={{ color: "gray" }}
              component={"span"}
            >
              Build
            </Typography>{" "}
            professional projects like the top 1% tech professionals.
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "gray" }}>
            <Typography
              fontWeight={"bold"}
              variant="subtitle2"
              sx={{ color: "gray" }}
              component={"span"}
            >
              Master
            </Typography>{" "}
            the latest Fullstack/Backend/Automation tech with real work-ex.
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "gray" }}>
            <Typography
              fontWeight={"bold"}
              variant="subtitle2"
              sx={{ color: "gray" }}
              component={"span"}
            >
              Crack
            </Typography>{" "}
            your dream role at the best tech companies
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <TrendingUpOutlined
            sx={{ fontSize: "1.5rem", color: "btn.background" }}
          />
          <Typography
            variant="h6"
            fontWeight={"bold"}
            sx={{ color: "btn.background" }}
          >
            UpSkill with Crio
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            alignSelf: "center",
            gap: "1rem",
          }}
        >
          <Btn
            padding="1rem 1rem"
            text="Explore Our Programs"
            endIcon={<KeyboardArrowRight />}
          />
          <Button
            fontWeight="bold"
            color="yellow"
            sx={{
              color: "black",
              fontWeight: "bold",
              borderRadius: ".8rem",
              padding: "1rem 1rem",
              boxShadow: " -1px 10px 28px -8px rgba(255,255,48,0.7)",
              "&:hover": { boxShadow: "none" },
            }}
            variant="contained"
            endIcon={<KeyboardArrowRight />}
          >
            Book Your Free Trail, Now{" "}
          </Button>
        </Box>
        <Box
          sx={{
            backgroundColor: "secondary.main",
            display: "flex",
            padding: ".8rem 1.2rem",
            borderRadius: ".8rem",
            position: "absoulute",
            width: "700px",
          }}
        >
          {stats.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  borderRight: item.h1 === "89%" ? "none" : "2px solid #D8D9DA",
                  padding: "0 .8rem",
                }}
              >
                <Typography fontWeight="bold" variant="h5">
                  {item.h1}
                </Typography>
                <Typography fontSize="12px" variant="subtitle2">
                  {item.sub}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box sx={{ position: "relative" }}>
        <img
          style={{ width: "450px", height: "537px" }}
          src={HomepageHero}
          alt="hero-section"
        />
      </Box>
    </Container>
  );
};

export default Section1;
