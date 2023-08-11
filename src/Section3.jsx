import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Section3 = () => {
  return (
    <Box sx={{ marginTop: "1rem" }}>
      <Container
        sx={{ textAlign: "center", padding: "0 1rem", width: "850px",display:'flex',flexDirection:'column',gap:'1rem' }}
      >
        <Typography variant="h4" fontWeight="bold">
          An All-Round Effective Way To Supercharge Your Tech Career
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "gray" }}>
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
    </Box>
  );
};

export default Section3;
