import React, { useState } from "react";
import style from "./Navbar.module.css";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  ListItem,
  List,
  Avatar,
  Divider,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import nilesh from "../../images/276A1842.jpg";
import { makeStyles } from "@material-ui/styles";
import { menuIcons } from "../../storage/NavData";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
// CSS STYLES
const useStyles = makeStyles((theme) => ({
  menuSlideContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  logoAvatar: {
    display: "block",
    margin: "0.5rem auto",
    width: "5rem",
    height: "5rem",
  },
  listData: {
    color: "tan",
  },
}));

const Navbar = () => {
  const [state, setState] = useState({ right: false });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();
  const Sidebar = (slider) => (
    <Box
      component="div"
      className={classes.menuSlideContainer}
      onClick={toggleSlider(slider, false)}
    >
      <Avatar src={nilesh} alt="Nilesh" className={classes.logoAvatar}></Avatar>
      <Divider />
      <List>
        {menuIcons.map((item, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listData}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listData}
              primary={item.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <Home style={{ color: "tan" }}></Home>
            </IconButton>
            <Typography varient="h3" style={{ color: "tan" }}>
              Nilesh Ghimire
            </Typography>

            <MobilRightMenuSlider
              open={state.right}
              anchor="right"
              onClose={toggleSlider("right", false)}
            >
              {Sidebar("right")}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;