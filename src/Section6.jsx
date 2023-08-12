import {
  KeyboardArrowLeftSharp,
  KeyboardArrowRightOutlined,
  KeyboardArrowRightSharp,
  Upgrade,
} from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import "./App.css";
import Accenture from "./assets/Companies/Accenture.png";
import Amazon from "./assets/Companies/Amazon.png";
import Arcesium from "./assets/Companies/Arcesium.png";
import Ather from "./assets/Companies/Ather.png";
import BharathPe from "./assets/Companies/BharatPe.png";
import Briq from "./assets/Companies/Briq.png";
import Capillary from "./assets/Companies/Capillary.png";
import Cars24 from "./assets/Companies/Cars24.png";
import CRED from "./assets/Companies/CRED.png";
import Dailyhunt from "./assets/Companies/Dailyhunt.png";
import Deloitte from "./assets/Companies/Deloitte.png";
import DEShaw from "./assets/Companies/DEShaw.png";
import Fampay from "./assets/Companies/Fampay.png";
import Flipkart from "./assets/Companies/Flipkart.png";
import Grab from "./assets/Companies/Grab.png";
import Grofers from "./assets/Companies/Grofers.png";
import Groww from "./assets/Companies/Groww.png";
import IBM from "./assets/Companies/IBM.png";
import Jumbotail from "./assets/Companies/Jumbotail.png";
import Juspay from "./assets/Companies/Juspay.png";
import Lendingkart from "./assets/Companies/Lendingkart.png";
import Meesho from "./assets/Companies/Meesho.png";
import Microsoft from "./assets/Companies/Microsoft.png";
import Navi from "./assets/Companies/Navi.png";
import Ninjacart from "./assets/Companies/Ninjacart.png";
import NoBroker from "./assets/Companies/NoBroker.png";
import Ola from "./assets/Companies/Ola.png";
import Oracle from "./assets/Companies/Oracle.png";
import PayTm from "./assets/Companies/PayTm.png";
import PharmEasy from "./assets/Companies/PharmEasy.png";
import Postman from "./assets/Companies/Postman.png";
import PwC from "./assets/Companies/PwC.png";
import RupeeK from "./assets/Companies/RupeeK.png";
import Salesforce from "./assets/Companies/Salesforce.png";
import Shiprocket from "./assets/Companies/Shiprocket.png";
import Slice from "./assets/Companies/Slice.png";
import Superset from "./assets/Companies/Superset.png";
import Tekion from "./assets/Companies/Tekion.png";
import Tracxn from "./assets/Companies/Tracxn.png";
import Ula from "./assets/Companies/Ula.png";
import upGrad from "./assets/Companies/upGrad.png";
import UrbanCompany from "./assets/Companies/UrbanCompany.png";
import Vicara from "./assets/Companies/Vicara.png";
import Vmware from "./assets/Companies/Vmware.png";
import Vouch from "./assets/Companies/Vouch.png";
import Walmart from "./assets/Companies/Walmart.png";
import WebEngage from "./assets/Companies/WebEngage.png";
import YellowClass from "./assets/Companies/YellowClass.png";
import Zoho from "./assets/Companies/Zoho.png";

// Now you can use these imported variables in your React component

const Section6 = () => {
  const data = [
    {
      heading: "Unicorns",
      img: [
        Meesho,
        Ola,
        Flipkart,
        Dailyhunt,
        Zoho,
        Groww,
        Slice,
        BharathPe,
        Postman,
        Grofers,
        Cars24,
        UrbanCompany,
        CRED,
        PharmEasy,
        NoBroker,
        PayTm,
        upGrad,
      ],
      w: "100px",
      color: "#D5E927",
    },
    {
      heading: "Hyper growth startups & Soonicorns",
      img: [
        Ninjacart,
        Ula,
        Fampay,
        RupeeK,
        Lendingkart,
        Superset,
        Navi,
        Capillary,
        WebEngage,
        Vouch,
        Vicara,
        Briq,
        Jumbotail,
        YellowClass,
        Shiprocket,
        Juspay,
        Ather,
      ],
      w: "300px",
      color: "#81F076",
    },
    {
      heading: "Global tech MNCs",
      img: [
        Walmart,
        Tekion,
        Vmware,
        Deloitte,
        Accenture,
        DEShaw,
        Microsoft,
        Amazon,
        Grab,
        IBM,
        Arcesium,
        Oracle,
        PwC,
        Salesforce,
        Tracxn,
      ],
      w: "150px",
      color: "#2DF8C5",
    },
  ];

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "2rem 0rem",
        maxWidth: "1150px",
        justifyContent: "center",
        alignSelf: "center",
        gap: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          maxWidth: "400px",
          textAlign: "center",
          gap: "1.8rem",
        }}
      >
        <Typography fontWeight="bold" variant="h4">
          Work At Tech Unicorns, Soonicorns, Or MNCs
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "gray" }}>
          <Typography
            variant="subtitle2"
            fontWeight={"bold"}
            sx={{ color: "black" }}
            component="span"
          >
            Build your Github portfolio of projects
          </Typography>{" "}
          and impress recruiters at unicorns, global MNCs, and hyper growth
          startups.
        </Typography>
      </Box>
      {data.map((item, i) => {
        return (
          <Box
            key={i}
            sx={{
              width: { xs: "90vw", lg: "70vw" },
              height: "120px",
              backgroundColor: "#F2FBF7",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
              marginTop: "1rem",
              alignSelf: "center",
            }}
          >
            <KeyboardArrowLeftSharp
              sx={{ width: "80px", fontSize: "2rem", color: "gray" }}
            />
            <Box
              sx={{
                width: item.w,
                backgroundColor: item.color,
                textAlign: "center",
                borderRadius: "1rem",
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, -50%)",
                top: "-2px",
                padding: "5px",
              }}
            >
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                sx={{ fontSize: { xs: "12px", md: "12px", lg: "16px" } }}
              >
                {item.heading}
              </Typography>
            </Box>
            <Box
              className="companies"
              sx={{ display: "flex", gap: "2rem", overflowX: "scroll" }}
            >
              {item.img.map((img, i) => {
                return (
                  <img
                    style={{ width: "100px", objectFit: "contain" }}
                    key={i}
                    src={img}
                    alt="img"
                  />
                );
              })}
            </Box>
            <KeyboardArrowRightSharp
              sx={{ width: "80px", fontSize: "2rem", color: "gray" }}
            />
          </Box>
        );
      })}
      <Box
        sx={{
          backgroundColor: "secondary.main",
          display: "flex",
          padding: ".8rem 1.2rem",
          borderRadius: ".8rem",
          width: { xs: "90vw", lg: "44vw" },
          alignSelf: "center",
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
      <Button
            fontWeight="bold"
            color="yellow"
            sx={{
              color: "black",
              fontWeight: "bold",
              boxShadow: " -1px 10px 28px -8px rgba(255,255,48,0.7)",
              "&:hover": { boxShadow: "none" },
              width: "40%",minWidth: "300px",
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

export default Section6;
