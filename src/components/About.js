import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import Particles from "./Particles";

const useStyles = makeStyles((theme) => ({
    avatar: {
      width: theme.spacing(30),
      height: theme.spacing(30),
      margin: theme.spacing(1),
    },
    aboutContainer: {
      textAlign: "center",
      padding: theme.spacing(4),
      maxWidth: "600px",
      margin: "0 auto", 
    },
    aboutText: {
      color: "tan",
      marginTop: theme.spacing(2),
      fontSize: "1rem",
    },
  }));
const About = () => {
  const classes = useStyles();

  return (
    <>
      <Particles /> 
      <Box className={classes.aboutContainer}>
        <Grid container justify="center" alignItems="center">
          <Avatar className={classes.avatar} src={avatar} alt="izzie" />
        </Grid>
        <Typography variant="h4" className={classes.aboutText}>
          Hello, I'm Elizabeth Njeri
        </Typography>
        <Typography variant="body1" className={classes.aboutText}>
          A Software Engineer passionate about transforming ideas into digital realities. With a Bachelor's in Mathematics and Computer Science from Multimedia University of Kenya and training from Moringa School in Software Engineering, I've honed my skills across various frameworks and languages.
        </Typography>
        <Typography variant="body2" className={classes.aboutText}>
          In web development, I specialize in crafting dynamic and visually appealing frontend experiences using modern frameworks like Next.js, React, and TypeScript. I leverage CSS preprocessors (SCSS) and styling libraries (Tailwind CSS, Material UI, Admin LTE) to deliver polished interfaces. On the backend, I have a strong foundation in building robust REST APIs using Flask and am proficient in working with PostgreSQL and MongoDB databases to manage data efficiently.
        </Typography>
        <Typography variant="body2" className={classes.aboutText}>
          My expertise extends to AI optimization, where I optimize performance by delving into intricate backend codes, analyze diverse subject matter for AI interactions, and ensure accuracy and safety in critical applications. Beyond coding, I'm a natural leader, having supervised teams to improved efficiency by 20%. I foster a culture of continuous learning and enjoy reading to stay ahead in this ever-evolving tech landscape. Let's collaborate and bring your digital dreams to life!
        </Typography>
      </Box>
    </>
  );
};

export default About;
