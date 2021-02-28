import React from "react";
import nilesh from "../../images/276A1842.jpg";
import {
  Box,
  ListItem,
  List,
  Avatar,
  Divider,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { menuIcons } from "../../storage/NavData";
// CSS STYLES
const useStyles = makeStyles((theme) => ({
  menuSlideContainer: {
    width: 250,
    background: "#511",
    height: "30rem",
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
const Sidebar = () => {
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.menuSlideContainer}>
        <Avatar
          src={nilesh}
          alt="Nilesh"
          className={classes.logoAvatar}
        ></Avatar>
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
    </>
  );
};

export default Sidebar;
