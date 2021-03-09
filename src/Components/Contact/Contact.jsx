import React from "react";
import { Box, Typography, TextField, Grid, Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { SendIcon } from "@material-ui/icons/Send";
import Navbar from "../Navbar/Navbar";

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "whitesmoke  ",
    },
    "& label": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);
const useStyles = makeStyles({
  mainContainer: {},
  heading: {
    color: "whitesmoke",
    opacity: "0.5",
    textTransform: "uppercase",
  },
  form: {
    margin: "5rem",
  },
  inputfield: {
    marginTop: "1rem",
  },
});
const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar></Navbar>
      <Box component="div">
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography variant="h3" className={classes.heading}>
              Contact Me
            </Typography>
            <InputField
              fullWidth={true}
              label="Name"
              variant="outlined"
              className={classes.inputfield}
            />
            <InputField
              fullWidth={true}
              label="Email"
              variant="outlined"
              className={classes.inputfield}
            />
            <InputField
              fullWidth={true}
              label="CompanyName"
              variant="outlined"
              className={classes.inputfield}
            />
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
