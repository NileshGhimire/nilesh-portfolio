import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particlecanva: {
    position: "absolute",
    color: "skyblue",
  },
});
const MainContainer = () => {
  const classes = useStyles();
  return (
    <>
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
              type: "star",
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
    </>
  );
};

export default MainContainer;
