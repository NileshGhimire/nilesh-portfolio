import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
const useStyles = makeStyles({
  mainContainer: {
    height: "100%",
  },
  particlecanva: {
    position: "relative",
  },
});
const MainContainer = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar></Navbar>
      <Header></Header>
      <Particles
        canvasClassName={classes.particlecanva}
        params={{
          particles: {
            number: {
              value: 45,

              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "round",
              stroke: {
                width: 1,
                color: "tomato",
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 8,
                size_min: 0.1,
                sync: true,
              },
            },
            opacit: {
              value: 1,
              random: true,
              anim: {
                enabel: true,
                speed: 1,
                size_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      />
    </Box>
  );
};

export default MainContainer;
