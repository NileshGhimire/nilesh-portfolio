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
import { ArrowBack, Home } from "@material-ui/icons";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton>
              <Home style={({ color: "tan" }, { height: "1.5rem" })}></Home>
            </IconButton>
            <Typography varient="h3" style={{ color: "tan" }}>
              Nilesh Ghimire
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
