"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styled } from "@mui/material/styles";

interface CustomAccordionSummaryProps {
    isexpanded?: boolean;
}

const CustomAccordionSummary = styled(AccordionSummary, {
  shouldForwardProp: (prop) => prop !== "isexpanded",
})<CustomAccordionSummaryProps>(({ isexpanded }) => ({
  backgroundColor: isexpanded ? "#001F3F" : "#fff",
  color: isexpanded ? "#fff" : "#001F3F",
  fontFamily: "Poppins, sans-serif", // 🔹 AccordionSummary ke text pe
  "& .MuiTypography-root": {
    fontFamily: "Poppins, sans-serif", // 🔹 Typography component ke liye
  },
  "&:hover": {
    backgroundColor: "#001F3F",
    color: "#fff",
    "& .MuiSvgIcon-root": {
      color: "#fff",
    },
  },
  "& .MuiSvgIcon-root": {
    color: isexpanded ? "#fff" : "#001F3F",
    transition: "color 0.3s ease",
    
  },
  transition: "all 0.3s ease",
}));


const accordionData = [
    {
      id: "panel1",
      title: "1. How do you keep learning joyful for a young child in a group setting online?",
      content: [
        {
          title: "",
          description:
            "We believe that for a young mind, shared discovery is the most powerful form of joy. Our mentors are experts at creating collaborative learning adventures where a small group of 8 students can explore a concept together. The excitement is contagious. When one child has a breakthrough, it inspires the others. Our platform is an intellectual playground designed to nurture their natural curiosity through positive, guided social interaction."
        }
      ]
    },
    {
      id: "panel2",
      title: "2. My child is naturally curious but can be shy. Will they get lost in a group?",
      content: [
        {
          title: "",
          description:
            "This is a concern we understand deeply, and it's why our micro-classes are intentionally small. A Wise Guardian is trained to ensure every child has the space to contribute. For a shy child, seeing peers share ideas in a safe, supportive environment is incredibly empowering. The goal isn't to force them to speak, but to create a warm, encouraging space where they feel comfortable and confident finding their own voice, at their own pace."
        },
       
      ]
    },
   
  ];
  

export default function BottomAccordion() {
    const [expanded, setExpanded] = React.useState<string | false>("panel1");

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
          {accordionData.map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
              sx={{ mb: 2 }}
            >
              <CustomAccordionSummary
                expandIcon={expanded === item.id ? <ArrowBackIcon /> : <ArrowForwardIcon />}
                aria-controls={`${item.id}-content`}
                id={`${item.id}-header`}
                isexpanded={expanded === item.id}
              >
                <Typography component="span">{item.title}</Typography>
              </CustomAccordionSummary>
              <AccordionDetails>
                {item.content.map((c, index) => (
                  <div key={index} style={{ marginBottom: "12px" }}>
                    {c.title && (
                      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 0.5 }}>
                        {c.title}
                      </Typography>
                    )}
                    <Typography variant="body2">{c.description}</Typography>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      );
}
