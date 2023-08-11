import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import PointOne from "./assets/PointOne.png";
import PointTwo from "./assets/PointTwo.png";
import PointThree from "./assets/PointThree.png";
import PointFour from "./assets/PointFour.png";
import PointFive from "./assets/PointFive.png";
import PointSix from "./assets/PointSix.png";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";

const Section3 = () => {
  const data = [
    {
      png: PointOne,
      h1: "Learn by Working like Tech Professionals",
      sub: "Learn Full Stack Development, Backend Development, QA Automation through an immersive project-based curriculum focused on practical developer skills and real-world scenarios.",
    },
    {
      png: PointTwo,
      h1: "Gain Work-ex on Problems Given by Real Tech Companies",
      sub: "Gain the work experience of building professional software products for India’s top tech companies like CRED, Playment, Jumbotail, Vicara, and others.",
    },
    {
      png: PointThree,
      h1: "Learn From Seasoned Industry Professionals in Real Time",
      sub: "Participate in activity-based live working sessions facilitated by industry mentors from companies like Microsoft, Flipkart, Nilenso.",
    },
    {
      png: PointFour,
      h1: "Get career support to break through into ambitious roles",
      sub: "Be prepared for every interview and land exciting development jobs with structured planning and personalised guidance & support from Crio career coaches.",
    },
    {
      png: PointFive,
      h1: "Build a GitHub portfolio that impresses recruiters",
      sub: "Go beyond just certificates with a Crio verified project portfolio on GitHub and impress any recruiter at a product based company with your skills and experience.",
    },
    {
      png: PointSix,
      h1: "Stand out at interviews with real proof of work",
      sub: "Validate your learnings and let your skills shine with a work experience certificate that makes you stand out at interviews.",
    },
  ];
  return (
    <Box
      sx={{
        marginTop: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Container
        sx={{
          textAlign: "center",
          padding: "0 1rem",
          width: "950px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          An All-Round Effective Way To Supercharge Your Tech Career
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: "gray",
            width: "850px",
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          {" "}
          <Typography
            fontWeight="bold"
            sx={{ color: "black" }}
            component="span"
          >
            Hands-on, work experience-based learning
          </Typography>{" "}
          is at the heart of everything you do at Crio. Build software projects
          like the top 1% Tech Professionals and{" "}
          <Typography
            fontWeight="bold"
            sx={{ color: "black" }}
            component="span"
          >
            learn all the skills{" "}
          </Typography>{" "}
          you need to{" "}
          <Typography
            fontWeight="bold"
            sx={{ color: "black" }}
            component="span"
          >
            land the best{" "}
          </Typography>{" "}
          Fullstack/Backend Developers or SDET Jobs.
        </Typography>
      </Container>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {data.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: "320px",
                height: "356px",
                borderRadius: "14px",
                backgroundColor: "#F2FBF7",
                display: "flex",
                flexDirection: "column",
                padding: "1rem 1rem",
              }}
            >
              <img style={{ width: "80px" }} src={item.png} alt="png" />
              <Typography variant="h5" fontWeight={"bold"}>
                {item.h1}
              </Typography>
              <Typography
                sx={{ color: "gray" }}
                fontSize="16px"
                variant="subtitle2"
              >
                {item.sub}
              </Typography>
            </Box>
          );
        })}
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Button
            fontWeight="bold"
            color="yellow"
            sx={{
              color: "black",
              fontWeight: "bold",
              borderRadius: ".8rem",
              padding: "1rem 1.5rem",
              boxShadow: " -1px 10px 28px -8px rgba(255,255,48,0.7)",
              "&:hover": { boxShadow: "none" },
            }}
            variant="contained"
            endIcon={<KeyboardArrowRightOutlined />}
          >
            Book Your Free Trail, Now{" "}
          </Button>
        </Container>
        <Container sx={{display:'flex',flexDirection:'column',gap:'1.2rem'}}>
          <Container maxWidth="sm">
            {" "}
            <Typography
              sx={{ alignSelf: "center", textAlign: "center" }}
              variant="h4"
              fontWeight="bold"
            >
              Immersive Work Ex-Based Programs To Crack Jobs At The
              Fastest-Growing Companies
            </Typography>
          </Container>
          <Container maxWidth="md">
            <Typography fontSize={'16px'} variant="subtitle2" sx={{ color: "gray",textAlign:'center' }}>
              Learn the skills you need to land a Fullstack/Backend Developers
              or SDET Job at a top product company.<Typography fontSize='16px' component='span' fontWeight={'bold'} sx={{color:'black'}}>Gain the work experience of
              professional developers</Typography>  working at Amazon, Netflix, AirBnB,
              Flipkart, and more, with continuous guidance and support from our
              mentors.
            </Typography>
          </Container>
        </Container>
      </Container>
    </Box>
  );
};

export default Section3;
