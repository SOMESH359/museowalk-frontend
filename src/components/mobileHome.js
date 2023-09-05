import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {  pink } from '@mui/material/colors';
const Mobilehome = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { to:'/', label:'HOME'},
    { to: '/about', label:'ABOUT'},
    { to: '/explore', label: 'EXPLORE' },
    { to: '/signin', label: 'LOGIN' },
  ];

  const navList = (
    <List>
      {navLinks.map((link) => (
        <ListItem key={link.label} component={Link} to={link.to}>
          <ListItemText primary={link.label} />
        </ListItem>
      ))}
    </List>
  );
  

  return (
    < div className='transparent-bar'> 
      <AppBar className='bar'>
      <Toolbar  >
        <IconButton edge="start" sx={{ color: pink[500] }} aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <h1 style={{textAlign:'center',color:'white',fontFamily:`Georgia, 'Times New Roman', Times, serif`}}>MuseoWalk</h1>
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          {navList}
        </Drawer>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default Mobilehome;