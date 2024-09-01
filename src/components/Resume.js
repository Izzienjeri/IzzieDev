import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "black",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid white",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid white",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tan tan transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tan tan",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#black",
    background: "white",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tan",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tan",
  },
  subtitle1: {
    color: "white",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        {/* Most Recent Role */}
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2024
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Founder & Software Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            IzzieDevs, Kenya
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Visionary leadership, business development, market analysis, financial management, team building, and culture building at IzzieDevs. As a Software Engineer, I oversee project management, maintain high-quality standards, contribute technically, provide technical leadership, and evaluate emerging technologies.
          </Typography>
        </Box>
        {/* <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2024
        </Typography> */}
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Quality Analyst
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Invisible Technologies, United States, Remote
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Conducted extensive testing of AI-driven software, analyzed and resolved software issues, developed quality assurance protocols, optimized processes, and verified AI safety and accuracy to meet stringent quality criteria.
          </Typography>
        </Box>
        {/* <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2024
        </Typography> */}
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Advanced AI Trainer - Software Development
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Invisible Technologies, United States, Remote
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Optimized AI performance by analyzing backend codes, evaluated AI performance, tested AI to improve recovery mechanisms, and played a vital role in ensuring AI safety, accuracy, and effectiveness in critical applications.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2023
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Software Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Upwork, Remote
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Specialize in creating captivating frontend experiences using tools like React.js, Next.js, and Material UI, and building robust backend systems with Flask, Node.js, and PostgreSQL. I also craft designs with Tailwind CSS and Material UI, delivering comprehensive web solutions tailored to unique needs.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2023
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Auditor and German Customer Service Representative
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Invisible Technologies, United States, Remote
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Transcribed menus for various companies, conducted cold calls to maintain records, and audited colleagues' work to ensure quality.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2022
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Operations Team Lead
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Teleperformance, Greece
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Led a team of customer service representatives, implemented effective training programs, improved team efficiency by 20%, developed and delivered engaging content, trained new team members, and managed a team of 30 German-speaking agents to perform high-quality work within budget constraints.
          </Typography>
        </Box>
        {/* <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography> */}
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Customer Service Representative
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Teleperformance, Greece
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Provided exceptional customer service, handled inquiries, resolved complaints, and ensured customer satisfaction by delivering timely and effective solutions.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
