"use client"
import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LanguageIcon from '@mui/icons-material/Language';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function NavigationBar() {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const styles = {
    
      root: {
          justifyContent: 'center'
      }
  };
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
  return (
    <AppBar  position="sticky" sx={{display: { xs: 'none', md: 'flex' },boxShadow:'none',borderStyle:'none',border:0, height:"80px", paddingLeft:'40px',paddingRight:'40px',backgroundColor:'white' }}>
      <Container maxWidth={'100%'} sx={{ borderStyle:'none',border:0, }}>
        <Toolbar sx={{ borderStyle:'none',border:0, }} disableGutters>
          <AdbIcon color='action' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
  

              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                alignItems:'center',
                display: { xs: 'block', md: 'none' },
                fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif'
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{justifyContent:'center', flexGrow: 1, display: { xs: 'none', md: 'flex' },fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif' }}>
            {pages.map((page) => (
              <Button
                key={page}
                className='hovereffect'
                onClick={handleCloseNavMenu}
                sx={{borderRadius:'30px', padding:'10px', my: 2,fontWeight:400, color: 'black', display: 'block',}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Button
            className='hovereffect'
             variant='text'
             sx={{borderRadius:'30px', padding:"10px",marginRight:'16px', my: 2, color: 'black',fontWeight:600,fontSize:'13px'}}
           >
          Airbnb your home
           </Button>
           <IconButton sx={{borderRadius:'30px', padding:'10px', marginRight:'24px' }}>
                <LanguageIcon />
              </IconButton>
           
            
              
              <IconButton  className='hovereffect'  onClick={handleOpenUserMenu} sx={{ p: 0,borderStyle:'solid',border:1,borderRadius:'30px',padding:'8px',borderColor:'#dddddd'  }}>
                <MenuIcon fontSize={'small'} sx={{ marginRight:1 }} />
                <Avatar sx={{ width:'32px',height:'32px' }} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            
            <Menu
              sx={{  mt: '60px' }}
              id="menu-appbar"
              
              size
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem  sx={{width: 220, maxWidth: '100%', padding:'10px' ,display:'flex'}} key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
