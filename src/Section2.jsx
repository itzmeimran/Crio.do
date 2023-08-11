import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import CardFive from "./assets/CardFive.png";
import CardOne from "./assets/CardOne.png";
import CardSix from "./assets/CardSix.png";
import CardThree from "./assets/CardThree.png";
import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
const Section2 = () => {
  const data = [
    {
      type: "Guided project",
      heading: "Get to work like an Engineer at Zerodha",
      img: CardOne,
      sub: "Build a tool to analyze an investemt portfolio",
      cat: ["OOP", "JSON", "Gradle", "REST API"],
    },
    {
      type: "Independent Project",
      heading: "Experince building a Google News like app",
      img: CardThree,
      sub: "Build a fully functional news aggregation like goole news",
      cat: ["HTML", "CSS", "REST API", "FlexBox"],
    },
    {
      type: "Gudied project",
      heading: "Work like Frontend Developer at AirBnB",
      img: CardFive,
      sub: "Build a highly responsive frontend for a travel app",
      cat: ["HTML", "CSS", "Bootstrap", "React"],
    },
  ];
  return (
    <Box>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem 0",
        }}
      >

        <Typography sx={{ width: "400px" }} variant="h4" fontWeight={"bold"}>
          Modern Work Experience-Based Learning Approach
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "gray", width: "700px" }}>
          At Crio, you learn and grow exactly how you would on a real job. You
          will start from the fundamentals, receive support from our mentors and
          community,{" "}
          <Typography
            variant="subtitle2"
            component="span"
            fontWeight={"bold"}
            sx={{ color: "black" }}
          >
            and build your way to the top
          </Typography>{" "}
          - through professional work-like Full-stack and Backend web
          development projects.
        </Typography>
      </Container>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "center", gap: "2rem",alignItems:'center' }}
      >
                  <KeyboardArrowLeftOutlined sx={{cursor:'pointer'}} />

        {data.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: "350px",
                height: "475px",
                padding: "1rem",
                backgroundColor: "secondary.main",
                borderRadius: "14px",
              }}
            >
              <Container
                maxWidth="sm"
                sx={{
                  width: "190px",
                  color: "white",alignItems:'center',display:'flex',justifyContent:'center'
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    width:
                      item.type === "Independent Project" ? "150px" : "120px",
                    backgroundColor:
                      item.type === "Independent Project"
                        ? "#02BF91"
                        : "btn.background",
                    borderRadius: "10px",
                
                  }}
                >
                  <Typography
                    fontWeight="bold"
                    variant="subtitle2"
                    fontSize='14px'
                  >
                    {item.type}
                  </Typography>
                </Box>
              </Container>
              <Container
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5rem",
                }}
              >
                <img
                  style={{ width: "200px", alignSelf: "center" }}
                  src={item.img}
                  alt="picture"
                />
                <Typography fontWeight="bold" variant="h6">
                  {item.heading}
                </Typography>
                <Typography variant="subtitle2">{item.sub}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    gap: "1rem",
                  }}
                >
                  {item.cat.map((tech, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          border: "2px solid black",
                          width: "100px",
                          borderRadius: "10px",
                        }}
                      >
                        <Typography variant="subtitle2">{tech}</Typography>
                      </div>
                    );
                  })}
                </Box>
              </Container>
            </Box>
          );
        })}
        <KeyboardArrowRightOutlined sx={{cursor:'pointer'}} />
      </Container>
      <Container sx={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'2rem'}} >
      <Button
            fontWeight="bold"
            color="yellow"
            sx={{
              color: "black",
              fontWeight: "bold",
              borderRadius: ".8rem",
              padding: "1rem 1rem",boxShadow:' -1px 10px 28px -8px rgba(255,255,48,0.7)',
                '&:hover':{boxShadow:'none'}
            }}
            variant="contained"
            endIcon={<KeyboardArrowRightOutlined />}
          >
            Book Your Free Trail, Now{" "}
          </Button>
      </Container>
    </Box>
  );
};

export default Section2;
