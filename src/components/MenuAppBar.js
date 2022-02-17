import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate, Link } from 'react-router-dom';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const nav = useNavigate();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const Logout = () => {
    localStorage.removeItem("uid")
    handleClose();
    nav("/");
    window.location.reload();
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Outta Pocket
          </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <Link style={{ textDecoration: 'none', color: 'white' }} to={`/dashboard`}>
                  <AccountCircle />
                </Link>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {localStorage.getItem("uid") === null ?
                  <div>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/register`}>
                      <MenuItem onClick={handleClose}>Register</MenuItem>
                    </Link>  
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/login`}>
                      <MenuItem onClick={handleClose}>Login</MenuItem>
                    </Link> 
                    <MenuItem onClick={handleClose}>About</MenuItem>
                    <MenuItem onClick={handleClose}>Contact</MenuItem>
                  </div>
                  : 
                  <div>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/dashboard`}>
                      <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                    </Link> 
                    <MenuItem onClick={Logout}>Logout</MenuItem>
                    <MenuItem onClick={handleClose}>About</MenuItem>
                    <MenuItem onClick={handleClose}>Contact</MenuItem>
                  </div>
                }
                
              </Menu>
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}