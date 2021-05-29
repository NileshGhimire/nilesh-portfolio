import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Box,
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import nilesh from "../../images/276A1842.jpg";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import { socialMediaIcons } from "../../storage/NavData";
const useStyles = makeStyles((theme) => ({
  headerContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    width: "98vw",
    zIndex: 1,
  },
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: theme.spacing(5),
  },
  title: {
    color: "black",
    fontSize: "2rem",
    opacity: 0.6,
  },
  subtitle: {
    color: "black",
    marginBottom: "3rem",
    fontSize: "1.5rem",
    opacity: 0.6,
  },
  socialicon: {
    marginTop: "5%",
    marginLeft: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.headerContainer}>
      <Grid container justify="center">
        <Avatar src={nilesh} alt="Nilesh Ghimire" className={classes.avatar} />
      </Grid>
      <Typography varient="h4">
        <Typed
          strings={["Hello I am Nilesh Ghimire"]}
          typeSpeed={10}
          className={classes.title}
          backSpeed={10}
          loop
        />
      </Typography>
      <Typography varient="h5">
        <Typed
          strings={["Web Design", "Web Development", "MERN Stack"]}
          typeSpeed={40}
          backSpeed={60}
          loop
          className={classes.subtitle}
        />
      </Typography>
      <List className={classes.socialicon}>
        {socialMediaIcons.map((item, key) => (
          <ListItem className={classes.icons} button key={key}>
            <a href={item.socialUrl} rel="noopener">
              <ListItemIcon>{item.socialicon}</ListItemIcon>
            </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Header;
