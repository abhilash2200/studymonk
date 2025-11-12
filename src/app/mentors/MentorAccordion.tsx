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
  fontFamily: "Poppins, sans-serif",
  "& .MuiTypography-root": {
    fontFamily: "Poppins, sans-serif",
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
    transition: "all 0.3s ease",
    transform: isexpanded ? "rotate(270deg)" : "rotate(90deg)", // 🔹 Arrow rotate
  },
  transition: "all 0.3s ease",
}));

const accordionData = [
    {
      id: "panel1",
      title: "1. What skills do you look for in a mentor who teaches a group?",
      content: [
        {
          title: "",
          description:
            "Our mentors are the heartbeat of our method, and our selection process is exceptionally rigorous. Beyond subject mastery, we select for elite facilitators. Every candidate is assessed on their ability to manage group dynamics, encourage balanced participation, and foster a collaborative learning environment. Fewer than 3% of applicants possess the unique blend of expertise and emotional intelligence required to be a true Wise Guardian for a group."
        }
      ]
    },
    {
      id: "panel2",
      title: "2. What if the group dynamic isn't the right fit for my child?",
      content: [
        {
          title: "",
          description:
            "We are committed to finding the perfect learning environment for every child. Our academic counsellors are experts at creating balanced micro-classes. However, if for any reason the group dynamic isn't the ideal fit, we offer a simple, no-hassle guarantee. We will work with you to find a different micro-class that better suits your child's personality and learning style, ensuring their journey with us is always positive and productive."
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
