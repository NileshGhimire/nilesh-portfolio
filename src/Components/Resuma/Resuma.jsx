import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import Navbar from "../Navbar/Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "'",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "'",
      display: "table",
      clear: "both",
    },
  },
}));
const Resuma = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar></Navbar>
      <Box component="header" className={classes.mainContainer}>
        <Typography varient="h4" align="center">
          Working Experience
        </Typography>

        <Box className={classes.timeLine}>
          <Typography varient="h2">2020</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Resuma;
