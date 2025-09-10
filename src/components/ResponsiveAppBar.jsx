import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/logo.png';

const pages = ['THE BOARD', 'NATIONAL TEAM', 'SCHOOLS', 'CALENDAR', 'INFORMATION'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#000000' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 2 }}>
                <img src={logo} alt="Company Logo" style={{ height: '40px' }} />
            </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
                <img src={logo} alt="Company Logo" style={{ height: '35px' }} />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, mx: 5, color: 'white', display: 'block', fontFamily: 'Montserrat' }}
                    >
                        {page}
                    </Button>
                ))}
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button
                    variant="contained"
                    sx={{
                        my: 2,
                        backgroundColor: 'white',
                        color: 'black',
                        borderRadius: '20px',
                        fontWeight: 'bold',
                        fontFamily: 'Montserrat',
                        '&:hover': {
                            backgroundColor: '#e0e0e0'
                        }
                    }}
                >
                    GET IN TOUCH
                </Button>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;