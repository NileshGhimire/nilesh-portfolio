import React from "react";
import { Typography, Box, Avatar, Grid } from "@material-ui/core";
import nilesh from "../../images/276A1842.jpg";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  headerContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    width: "100vw",
    zIndex: 1,
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
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
          typeSpeed={40}
          className={classes.title}
          backSpeed={60}
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
    </Box>
  );
};

export default Header;
