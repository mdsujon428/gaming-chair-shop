import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

function Navigation() {
  const { user, Logout } = useAuth();
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
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{ textAlign: 'right', margin: '0 10px' }} variant="p" component="div" sx={{ flexGrow: 1 }}>
            <NavLink style={{ textDecoration: 'none', margin: '0 3px', color: '#fff' }} activeStyle={{ textDecoration: 'none', margin: '0 3px', color: 'red', fontWeight: 600 }} to='/home' color="inherit">HOME</NavLink>
            <NavLink style={{ textDecoration: 'none', margin: '0 3px', color: '#fff' }} activeStyle={{ textDecoration: 'none', margin: '0 3px', color: 'red', fontWeight: 600 }} to='/explore' color="inherit">EXPLORE</NavLink>
            {user?.email ?
              <Button onClick={Logout} style={{color:'#fff'}}>LogOut </Button>
              :
              <NavLink style={{ textDecoration: 'none', margin: '0 3px', color: '#fff' }} activeStyle={{ textDecoration: 'none', margin: '0 3px', color: 'red', fontWeight: 600 }} to='/login' color="inherit">LOGIN</NavLink>

              }
            {user?.email && <NavLink style={{ textDecoration: 'none', margin: '0 3px', color: '#fff' }} activeStyle={{ textDecoration: 'none', margin: '0 3px', color: 'red', fontWeight: 600 }} to='/dashboard' color="inherit">DASHBOARD</NavLink>}
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigation;