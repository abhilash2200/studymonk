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
      title: "What does it mean to 'challenge' the curriculum in a group setting?",
      content: [
        {
          title: "",
          description:
            "It's where the concept truly comes to life. Challenging the curriculum means moving beyond absorbing facts to deconstructing arguments and debating perspectives. A micro-class is the perfect arena for this. Guided by a mentor, students learn to build on each other's insights, defend their positions with evidence, and sharpen their arguments against the thoughtful critiques of their peers. This is how we forge true intellectual horsepower."
        }
      ]
    },
    {
      id: "panel2",
      title: "3 Reasons Why We Are The Perfect Partners",
      content: [
        {
          title: "How does a micro-class specifically prepare my child for the IGCSE examination style?",
          description:
            "We take the complexity out of the Cambridge Curriculum with engaging, bite-sized lessons that act as building blocks for a strong foundation. Imagine your child asking Why? and How? - a sign that their natural curiosity is flourishing. This sets them on a path of learning that benefits their academic and professional careers."
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
