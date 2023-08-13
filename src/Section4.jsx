import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Fellowship from "./assets/Fellowship.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SchoolIcon from "@mui/icons-material/School";
import HttpsIcon from "@mui/icons-material/Https";
import {
  BusinessCenterRounded,
  CalendarViewDayRounded,
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Btn from "./components/btn";

const Section4 = () => {
  const feats = [
    {
      icon: <HttpsIcon sx={{ color: "#96B3AF", fontSize: "1.7rem" }} />,
      feat: "Trail Session",
      sub: "Free",
    },
    {
      icon: (
        <CalendarViewDayRounded sx={{ color: "#96B3AF", fontSize: "1.7rem" }} />
      ),
      feat: "Duration",
      sub: "9 months",
    },
    {
      icon: <SchoolIcon sx={{ color: "#96B3AF", fontSize: "1.7rem" }} />,
      feat: "Scholarships",
      sub: "Assured Scholarships",
    },
    {
      icon: (
        <BusinessCenterRounded sx={{ color: "#96B3AF", fontSize: "1.7rem" }} />
      ),
      feat: "Career Services",
      sub: "Placement Gaurantee",
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#004246",
        padding: "2rem",
        borderRadius: "1rem",
        display: "flex",
        justifyContent: { xs: "center", lg: "space-between" },
        maxWidth: { xs: "600px", md: "1150px" },
        gap: "1rem",
        flexWrap: "wrap",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          textAlign: "center",
          width: "652px",
          padding: "0rem 1rem",
        }}
      >
        <img
          style={{ width: "80px", alignSelf: "center" }}
          src={Fellowship}
          alt="mentorship"
        />
        <Typography variant="h6" color="olive.light" fontWeight={"bold"}>
          FellowShip Program in Software Development
        </Typography>
        <Typography
          variant="subtitle2"
          fontSize="16px"
          sx={{ color: "white", padding: "0rem 1rem" }}
        >
          Learn with real work experience and get guaranteed placement as a
          Full-Stack or Backend Developer at product-based companies.
        </Typography>
        <Box
          sx={{
            backgroundColor: "#013437",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            borderRadius: "1rem",
            maxWidth: { xs: "590px", md: "651px" },
            gap: "1rem",
            padding: "1rem",
            alignSelf: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: { xs: "100%", md: "280px" },
              textAlign: "left",
              gap: ".5rem",
            }}
          >
            <CheckCircleIcon sx={{ color: "olive.light" }} />
            <Typography sx={{ color: "white" }} variant="subtitle2">
              Project-led MERN or Backend Specialisation
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: { xs: "100%", md: "280px" },
              textAlign: "left",
              gap: ".5rem",
            }}
          >
            <CheckCircleIcon sx={{ color: "olive.light" }} />
            <Typography sx={{ color: "white" }} variant="subtitle2">
              DS, Algo, and System Design curriculum{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: { xs: "100%", md: "280px" },
              textAlign: "left",
              gap: ".5rem",
            }}
          >
            <CheckCircleIcon sx={{ color: "olive.light" }} />
            <Typography sx={{ color: "white" }} variant="subtitle2">
              Externships with Real Tech Companies{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: { xs: "100%", md: "280px" },
              textAlign: "left",
              gap: ".5rem",
            }}
          >
            <CheckCircleIcon sx={{ color: "olive.light" }} />
            <Typography sx={{ color: "white" }} variant="subtitle2">
              Guaranteed Placement in top dev roles{" "}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              backgroundColor: "#013437",
              width: { xs: "100%", md: "280px" },
              padding: "1rem",
              borderRadius: "1rem",
            }}
          >
            <Typography
              sx={{ color: "olive.light" }}
              fontWeight={"bold"}
              variant="subtitle2"
            >
              Full Stack Specialisation
            </Typography>
            <Typography
              sx={{ color: "white" }}
              fontWeight={"bold"}
              variant="subtitle2"
            >
              7 Professional Projects to learn with real work-experience
            </Typography>
            <Typography sx={{ color: "white" }} variant="subtitle2">
              (MongoDB, Express, React, NodeJS)
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "50%",
              padding: "1rem",
              backgroundColor: "olive.light",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              fontWeight="bold"
              sx={{ color: "#013437", fontStyle: "italic" }}
              variant="h6"
            >
              OR
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              backgroundColor: "#013437",
              width: { xs: "100%", md: "280px" },
              padding: "1rem",
              borderRadius: "1rem",
            }}
          >
            <Typography
              sx={{ color: "olive.light" }}
              fontWeight={"bold"}
              variant="subtitle2"
            >
              Backend Specialisation
            </Typography>
            <Typography
              sx={{ color: "white" }}
              fontWeight={"bold"}
              variant="subtitle2"
            >
              5 Professional projects to learn with real work-experience
            </Typography>
            <Typography sx={{ color: "white" }} variant="subtitle2">
              (Core Java and Spring Boot )
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maWwidth: "426.4px",
        }}
      >
        {feats.map((feat, index) => {
          return (
            <Box
              key={index}
              sx={{
                backgroundColor: "#013437",
                display: "flex",
                width: "400px",
                gap: "1rem",
                alignItems: "center",
                padding: "1rem",
                borderRadius: ".5rem",
              }}
            >
              {feat.icon}
              <Box>
                <Typography sx={{ color: "gray" }} variant="subtitle2">
                  {feat.feat}
                </Typography>
                <Typography
                  sx={{ color: "white" }}
                  fontWeight="bold"
                  variant="subtitle2"
                >
                  {feat.sub}
                </Typography>
              </Box>
            </Box>
          );
        })}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              padding: "1rem .8rem",
              borderRadius: "10px",
              border: "2px solid white",
              fontWeight: "bold",
            }}
            endIcon={<KeyboardArrowRightOutlined />}
          >
            Learn More
          </Button>
          <Button
            fontWeight="bold"
            color="yellow"
            sx={{
              color: "black",
              fontWeight: "bold",
              boxShadow: " -1px 10px 28px -8px rgba(255,255,48,0.7)",
              "&:hover": { boxShadow: "none" },
              width: "100%",
              padding: "1rem .8rem",
              borderRadius: "10px",
            }}
            variant="contained"
            endIcon={<KeyboardArrowRightOutlined />}
          >
            Apply Now{" "}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Section4;
