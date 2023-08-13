import { Box, Typography } from "@mui/material";
import React from "react";
import nsdc from "./assets/asset2/nsdc.png";
import Chat from "./assets/asset2/Chat.png";
import Btn from "./components/btn";
import { KeyboardArrowRightSharp } from "@mui/icons-material";
const Section9 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignSelf: "center",
        margin: "0 auto",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "400px", sm: "400px", md: "1200px" },
          margin: "0 auto",
          display: "flex",
          gap: "2rem",
          textAlign: "center",
          flexWrap: "wrap",
          backgroundColor: "#E1F1EA",
          padding: "1rem",
          borderRadius: "1rem",
          justifyContent: { xs: "center", md: "space-around" },
        }}
      >
        <Box sx={{ width: "300px", alignItems: "center", display: "flex" }}>
          <img style={{ width: "100%" }} src={nsdc} alt="certificate" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            maxWidth: "600px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="subtitle2" fontWeight={"bold"} fontSize="1.3rem">
            Empowering the Next Generation of Tech Talent.
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "gray" }}>
            Approved training partner of National Skill Development Corporation
            (NSDC), India
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: { xs: "400px", sm: "400px", md: "1200px" },
          margin: "0 auto",
          display: "flex",
          gap: "2rem",
          textAlign: "center",
          flexWrap: "wrap",
          backgroundColor: "#2DF8C5",
          padding: "1rem",
          borderRadius: "1rem",
          justifyContent: { xs: "center", md: "space-around" },
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Have any further questions ?{" "}
          </Typography>
          <Btn
            padding="1.2rem 1rem"
            endIcon={<KeyboardArrowRightSharp />}
            text="Chat with us"
          />
        </Box>
        <Box >
          <img  src={Chat} alt="graphic" />
        </Box>
      </Box>
    </Box>
  );
};

export default Section9;
