import { Typography } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Banner />
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6/>
      <Section7 />
      <Section8 />
      <Section9 />
    </div>
  );
};

export default App;
