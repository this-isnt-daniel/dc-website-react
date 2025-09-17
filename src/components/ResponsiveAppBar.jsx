import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '../assets/logo.png';
import TemporaryDrawer from "./TemporaryDrawer.jsx";
import { Link as RouterLink } from 'react-router-dom';


const pages = ['THE BOARD', 'NATIONAL TEAM', 'SCHOOLS LEAGUE', 'CALENDAR', 'INFORMATION'];

function ResponsiveAppBar() {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleOpenNavMenu = () => {
        setIsDrawerOpen(true);
    };

    const handleCloseNavMenu = () => {
        setIsDrawerOpen(false);
    };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#000000' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 2 }}>
                <RouterLink to="/">
                    <img src={logo} alt="DC Logo" style={{ height: '40px', display: 'block' }} />
                </RouterLink>
            </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="DC logo"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
              <TemporaryDrawer
                  pages={pages}
                  open={isDrawerOpen}
                  onClose={handleCloseNavMenu}
              />
          </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
                <RouterLink to ="/"><img src={logo} alt="Company Logo" style={{height: '35px'}}/></RouterLink>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        component={RouterLink} // <-- ADD THIS
                        to={`/${page.toLowerCase().replace(/ /g, '-')}`} // <-- ADD THIS
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