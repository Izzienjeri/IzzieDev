import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import ContactMail from "@material-ui/icons/ContactMail";
import Person from "@material-ui/icons/Person"; // Import the Person icon
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/icons/Menu";

import avatar from "../avatar.png";

import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "black",
    margin: 0,
    height: "80px", // Increase height for a larger menu bar
  },
  arrow: {
    color: "tan",
    fontSize: "2rem", // Increase size of the menu icon
  },
  title: {
    color: "white",
    flexGrow: 1,
    fontSize: "1.8rem", // Adjust font size to make the title larger
  },
  toolbar: {
    minHeight: "80px", // Match the height of the AppBar
    padding: theme.spacing(2), // Add padding for spacing
  },
  menuSliderContainer: {
    width: 300, // Increase the drawer width for a larger menu
    background: "black",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  listItem: {
    color: "tan",
    padding: theme.spacing(2), // Add padding to list items for a larger feel
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <Person />, listText: "About Me", listPath: "/about" }, 

  { listIcon: <AssignmentInd />, listText: "Experience", listPath: "/resume" },
  // { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="izzie" />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton onClick={() => setOpen(true)}>
              <Menu className={classes.arrow} />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
