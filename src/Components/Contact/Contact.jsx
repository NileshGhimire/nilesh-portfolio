import React from "react";
import { Box, Typography, TextField, Grid, Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
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
    color: "tomato",
    textTransform: "uppercase",
  },
  form: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
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
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
            />
            <br />
            <InputField
              fullWidth={true}
              label="Email"
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
            />
            <br />
            <InputField
              fullWidth={true}
              label="CompanyName"
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
            />
            <br />
            <Button
              variant="outlined"
              fullWidth={true}
              endIcon={<SendIcon />}
              className={classes.button}
            >
              Contact Me
            </Button>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
