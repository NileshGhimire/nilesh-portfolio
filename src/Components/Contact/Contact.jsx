import React from "react";
import { Box, Typography, TextField, Grid, Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";

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
  mainContainer: {
    height: "50%",
    backgroundColor: "red",
    width: "100%",
  },
  heading: {
    color: "tomato",
    textTransform: "uppercase",
    top: "3rem",
  },
  form: {
    position: "absolute",
    left: "33%",
    // transform: "translate( -40%, 12%)",
  },
  button: {
    marginTop: "1rem",
    borderColor: "tomato",
    backgroundColor: "tomato",
    color: "white",
  },
});
const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography variant="h2" className={classes.heading}>
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
