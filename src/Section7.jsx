import { Box, Container, Button, Typography } from "@mui/material";
import React from "react";
import PointOne from "./assets/PointOne.png";
import PointTwo from "./assets/PointTwo.png";
import PointThree from "./assets/PointThree.png";
import PointFour from "./assets/PointFour.png";
import PointFive from "./assets/PointFive.png";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";

const Section7 = () => {
  const data = [
    {
      img: PointOne,
      content: "1:1 Career coaching Sessions with top industry professionals",
    },
    {
      img: PointTwo,
      content: "Live mock interviews with Industry Experts",
    },
    {
      img: PointThree,
      content:
        "Series of mock assessments and detailed interview prep sprints to ace top tech jobs",
    },
    {
      img: PointFour,
      content:
        "Expert guidance to get your profile (GitHub, LinkedIn, Resume) ready",
    },
    {
      img: PointFive,
      content:
        "Guidance to start applying to a diverse set of job opportunities in-line with your career aspirations.",
    },
  ];
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Box
        sx={{
          alignSelf: "center",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={"bold"}
          sx={{ maxWidth: "400px", alignSelf: "center" }}
        >
          Prepare To Break Through Into Top Tech Jobs In The Market
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: "gray", maxWidth: "800px", alignSelf: "center" }}
        >
          All of our program come with{" "}
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            component="span"
            sx={{ color: "black" }}
          >
            exclusive Career Services
          </Typography>{" "}
          that will equip you to use your learnings and skills to ace your next
          interview or excel in your current role.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          maxWidth: "1100px",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          margin: "0 auto",
        }}
      >
        {data.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: "320px",
                backgroundColor: "#004246",
                borderRadius: "1rem",
                padding: "2rem 1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: "60px" }}>
                <img style={{ width: "100%" }} src={item.img} alt="" />
              </Box>
              <Typography
                sx={{ color: "white", fontSize: "16px" }}
                variant="subtitle2"
              >
                {item.content}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Button
            fontWeight="bold"
            color="yellow"
            sx={{
              color: "black",
              fontWeight: "bold",
              boxShadow: " -1px 10px 28px -8px rgba(255,255,48,0.7)",
              "&:hover": { boxShadow: "none" },
              width: "30%",minWidth: "300px",
              padding: "1rem .8rem",
              borderRadius: "10px",alignSelf:'center'
            }}
            variant="contained"
            endIcon={<KeyboardArrowRightOutlined />}
          >
            Book Your Free Trail, Now{" "}
          </Button>
    </Box>
  );
};

export default Section7;
