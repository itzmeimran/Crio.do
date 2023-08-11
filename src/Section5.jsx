import { Box, Button, Container, Typography } from "@mui/material";
import QA from "./assets/QA.png";
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

const Section5 = () => {
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
    <Container
      sx={{
        backgroundColor: "#004246",
        padding: "2rem",
        borderRadius: "1rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          textAlign: "center",
          width: "900px",
        }}
      >
        <img
          style={{ width: "80px", alignSelf: "center" }}
          src={QA}
          alt="mentorship"
        />
        <Typography variant="h6" color="olive.light" fontWeight={"bold"}>
          Fellowship Program in QA Automation (SDET)
        </Typography>
        <Typography variant="subtitle2" fontSize="16px" sx={{ color: "white",padding:'0rem 1rem' }}>
          Master QA Automation skills by working on projects like SDETs at top
          product-based companies and get guaranteed placement.
        </Typography>
        <Container
          sx={{
            backgroundColor: "#013437",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            borderRadius: "1rem",
            width: "700px",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "280px",
              textAlign: "left",
              gap: ".5rem",
            }}
          >
            <CheckCircleIcon sx={{ color: "olive.light" }} />
            <Typography sx={{ color: "white" }} variant="subtitle2">
              Complete Web Automation using using tools like Selenium,
              Webdriver, Xpath{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "280px",
              textAlign: "left",
              gap: ".5rem",
            }}
          >
            <CheckCircleIcon sx={{ color: "olive.light" }} />
            <Typography sx={{ color: "white" }} variant="subtitle2">
              Advance System Design, DS & Algo Curriculum{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "280px",
              textAlign: "left",
              gap: ".5rem",
            }}
          >
            <CheckCircleIcon sx={{ color: "olive.light" }} />
            <Typography sx={{ color: "white" }} variant="subtitle2">
              APIs & Performance Testing using tools like Postman, Docker,
              Swagger{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "280px",
              textAlign: "left",
              gap: ".5rem",
            }}
          >
            <CheckCircleIcon sx={{ color: "olive.light" }} />
            <Typography sx={{ color: "white" }} variant="subtitle2">
              DevOps & SDLC best practices - Using tools like CI/CD, Jenkins,
              Log 4j{" "}
            </Typography>
          </Box>
        </Container>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#013437",
              width: "700px",
              padding: "1rem",
              borderRadius: ".8rem",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#004246",
                color: "white",
                padding: "2rem",
                width: "200px",
                borderRadius: "1rem",
              }}
            >
              <Typography variant="subtitle2">
                {" "}
                3+ large scale professional test automation projects
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#004246",
                color: "white",
                padding: "2rem",
                width: "200px",
                borderRadius: "1rem",
              }}
            >
              <Typography variant="subtitle2">
                {" "}
                45+ mini-learning modules
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#004246",
                color: "white",
                padding: "2rem",
                width: "200px",
                borderRadius: "1rem",
              }}
            >
              <Typography variant="subtitle2">
                Learn Java, Selenium, TestNG, Cucumber, API, Perf Testing and
                more
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "500px",
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
                borderRadius: "1rem",
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
            Book Your Free Trail, Now{" "}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Section5;
