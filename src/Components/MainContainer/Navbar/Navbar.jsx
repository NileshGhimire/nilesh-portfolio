import React from "react";
import style from "./Navbar.module.css";
import {
  AppBar,
  Toolbar,
  Box,
  ListItem,
  IconButton,
  List,
  Avatar,
  Divider,
  Typography,
  ListItemText,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Facebook,
  Mail,
  Instagram,
  GitHub,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
const Navbar = () => {
  return (
    <Box component="nav">
      <AppBar position="static" style={{ background: "#222" }}>
        <Toolbar>
          <IconButton>
            <Home style={{ color: "tomato" }} />
            {/* <ArrowBack style={{ color: "tomato" }}></ArrowBack> */}
          </IconButton>
          <Typography varient="h3" style={{ color: "tan" }}>
            Nilesh Ghimire
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
