import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import logo from './Shigoto.png';
import profilePhoto from './profile-photo.png';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Clear the session token
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    
    // Redirect to login page
    handleNavigation('/login');
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'}}>
      <Toolbar>
        <IconButton 
          className="logo-button"
          style={{marginRight: '500px', marginLeft:'20px'}} 
          edge="start" 
          aria-label="logo"
        >
          <img src={logo} alt="logo" style={{ width: '110px', paddingLeft: '20px' }} />
        </IconButton>
        <Box sx={{ display: 'flex', flexGrow: 0.5 }} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button style={{color: '#000', fontSize: '18px', textTransform: 'none'}} onClick={() => handleNavigation('/dashboard')}>Home</Button>
          {/* <Button style={{color: '#000', fontSize: '18px', textTransform: 'none'}} onClick={() => handleNavigation('/companies')}>Company</Button> */}
          <Button style={{color: '#000', fontSize: '18px', textTransform: 'none'}} onClick={() => handleNavigation('/job')}>Jobs</Button>
          <Button style={{color: '#000', fontSize: '18px', textTransform: 'none'}} onClick={() => handleNavigation('/services')}>Services</Button>
          <Button style={{color: '#000', fontSize: '18px', textTransform: 'none'}} onClick={() => handleNavigation('/faq')}>FAQ</Button>
        </Box>
        <IconButton style={{marginLeft:'500px'}} edge="end"  onClick={handleMenuOpen}>
          <Avatar alt="Profile Photo" src={profilePhoto} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => { handleNavigation('/adminlogin'); handleMenuClose(); }}>Admin Login</MenuItem>
          <MenuItem onClick={() => { handleLogout(); handleMenuClose(); }}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
