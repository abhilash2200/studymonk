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
      title: "1. What exactly is included in the 7-day complimentary trial?",
      content: [
        {
          title: "",
          description:
            "Our complimentary trial is a full, substantive experience, not a limited demo. It is the genuine start of your child's journey with us. It includes the initial in-depth Clarity Session with an academic counselor, followed by the first live learning sessions within a perfectly matched micro-class. We want your family to experience the true collaborative energy and impact of our partnership from day one."
        }
      ]
    },
    {
      id: "panel2",
      title: "2. What happens after the trial ends? Will I be automatically charged?",
      content: [
        {
          title: "",
          description:
            "No, you will never be automatically charged. We believe the best decisions are made with absolute certainty and without pressure. At the end of the 7-day trial, our academic counselor will schedule a calm, collaborative conversation with you to discuss your experience and review your child's progress. You are always in complete control, allowing you to make a confident and informed choice for your family."
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
