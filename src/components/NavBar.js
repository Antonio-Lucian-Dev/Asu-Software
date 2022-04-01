import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '../assets/logo.jpeg';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import './NavBar.css';

const pages = ['Home', 'About', 'Projects', 'Services', 'Contact'];

const NavBar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  // Language logic
  const [language, setLanguage] = useState(0);

  const languageChange = (event) => {
    setLanguage(event.target.value);
  }

  console.log(window.innerHeight);

  const navigateTo = (event) => {
    setTimeout(() => {
      if (event == 0) {
        document.getElementsByClassName("container-home-presentation")[0].scrollIntoView({ behavior: "smooth" });
      } else if (event == 1) {
        document.getElementsByClassName("title-about")[0].scrollIntoView({ behavior: "smooth" });
      } else if (event == 3) {
        document.getElementsByClassName("title-price")[0].scrollIntoView({ behavior: "smooth" });
      } else if (event == 4) {
        document.getElementsByClassName("title-contact")[0].scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }


  return (
    <AppBar position="relative" className='container-nav'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component="img"
            sx={{ display: { xs: 'none', md: 'flex' } }}
            className="logo"
            alt="logo"
            src={logo} />
          <div className='container-mobile'>

            <Box component="img"
              sx={{ display: { xs: 'flex', md: 'none' } }}
              className="logo"
              alt="logo"
              src={logo} />

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                className="btn-menu"
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={page} onClick={() => {
                    handleCloseNavMenu();
                    navigateTo(index);
                  }}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box className='links' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }}>
              {pages.map((page, index) => (
                <Button
                  key={page}
                  onClick={() => navigateTo(index)}
                  className='link'
                  sx={{ my: 2, mr: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
              {/* <FormControl sx={{ m: 1, minWidth: 80, display: { xs: 'flex', md: 'none' } }}>
                <InputLabel sx={{ top: "-7px" }} id="demo-simple-select-autowidth-label">Language</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  // value={age}
                  onChange={languageChange}
                  autoWidth
                  label="Language"
                  value={language}
                  sx={{ height: "40px" }}
                  variant="outlined"
                >
                  <MenuItem value={0}>ENG</MenuItem>
                  <MenuItem value={1}>RO</MenuItem>
                </Select>
              </FormControl> */}
            </Box>
            {/* <FormControl sx={{ m: 1, minWidth: 80, display: { xs: 'none', md: 'flex' } }}>
              <InputLabel sx={{ top: "-7px" }} id="demo-simple-select-autowidth-label">Language</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                // value={age}
                onChange={languageChange}
                autoWidth
                label="Language"
                value={language}
                sx={{ height: "40px" }}
                variant="outlined"
              >
                <MenuItem value={0}>ENG</MenuItem>
                <MenuItem value={1}>RO</MenuItem>
              </Select>
            </FormControl> */}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar