import React from 'react';
import {Drawer, List, ListItem, ListItemText, ListItemIcon, ListSubheader, Divider, Toolbar} from '@material-ui/core';

import useStyles from './styles';

import GitHubIcon from '@material-ui/icons/GitHub';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SearchIcon from '@material-ui/icons/Search';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MessageIcon from '@material-ui/icons/Message';
import EmailIcon from '@material-ui/icons/Email';

const MenuDrawer = ({openDrawer, setOpenDrawer}) => {

  const classes = useStyles();
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List disablePadding className={classes.drawer}>
          <Toolbar />
          <ListSubheader component="div" id="explore" disableSticky={true} >
            Explore
          </ListSubheader>

          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon><WhatshotIcon /></ListItemIcon>
            <ListItemText primary="Trending" />
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon><ShuffleIcon /></ListItemIcon>
            <ListItemText primary="Random" />
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon><LocalOfferIcon /></ListItemIcon>
            <ListItemText primary="Browse" />
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon><SearchIcon /></ListItemIcon>
            <ListItemText primary="Search" />
          </ListItem>
          <Divider />

          <ListSubheader component="div" id="account" disableSticky={true}>
            Account
          </ListSubheader>

          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon><VpnKeyIcon /></ListItemIcon>
            <ListItemText primary="Super User" />
          </ListItem>


          <Divider />
          <ListSubheader component="div" id="social" disableSticky={true}>
            Socials
          </ListSubheader>

          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon><GitHubIcon /></ListItemIcon>
            <ListItemText primary="GitHub" />
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon>< MessageIcon /></ListItemIcon>
            <ListItemText primary="Matrix Chat" />
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon>< EmailIcon /></ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItem>

          <Divider />
          <ListSubheader component="div" id="more" disableSticky={true}>
            More
          </ListSubheader>

          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon>< AddCircleIcon /></ListItemIcon>
            <ListItemText primary="Submit your distro" />
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon>< InfoIcon /></ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)} >
            <ListItemIcon>< AddCircleIcon /></ListItemIcon>
            <ListItemText primary="Add Distro" />
          </ListItem>
        </List>
      </Drawer>

    </>

  );
};

export default MenuDrawer;
