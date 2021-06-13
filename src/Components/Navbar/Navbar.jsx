import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
import nilesh from "../../images/pexels-kevin-ku-577585.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { menuIcons } from "../../storage/NavData";
import MobilRightMenuSlider from "@material-ui/core/Drawer";

// Start CSS STYLES
const useStyles = makeStyles((theme) => ({
  menuSlideContainer: {
    width: 250,
    background: "darkslategrey",
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

  active: {
    color: "tan",
    textDecoration: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-around",
  },
}));
/// End Css Styles

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
          <ListItem button key={key} component={NavLink} to={item.listPath}>
            <ListItemIcon className={classes.listData}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText className={classes.navData} primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar
          position="static"
          className={classes.appBar}
          style={{
            background: "#22363e",
            color: "tan",
            width: "100%",
          }}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton onClick={toggleSlider("right", true)}>
              <Home style={{ color: "tan" }}></Home>
            </IconButton>
            <NavLink className={classes.active} to="resuma">
              <Typography varient="h5">Resuma</Typography>
            </NavLink>
            <NavLink className={classes.active} to="portfolio">
              <Typography varient="h5">Portfolio</Typography>
            </NavLink>
            <NavLink className={classes.active} to="contact">
              <Typography varient="h5">Contact</Typography>
            </NavLink>

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
