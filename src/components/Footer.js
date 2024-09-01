import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "black",
    height: "100px",
    overflow: "hidden",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "white",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <a href="https://github.com/Izzienjeri" target="_blank" rel="noopener noreferrer">
        <BottomNavigationAction icon={<GitHubIcon />} className={classes.root} />
      </a>
      <a href="https://www.linkedin.com/in/izziedev/" target="_blank" rel="noopener noreferrer">
        <BottomNavigationAction icon={<LinkedInIcon />} className={classes.root} />
      </a>
      <a href="/Profile.pdf" target="_blank" rel="noopener noreferrer">
        <BottomNavigationAction icon={<PictureAsPdfIcon />} className={classes.root} />
      </a>
    </BottomNavigation>
  );
};

export default Footer;
