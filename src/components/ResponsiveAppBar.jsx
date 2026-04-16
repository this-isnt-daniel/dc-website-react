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


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NAVIGATION_ITEMS = [
    { name: 'HOME', path: '/' },
    { name: 'NATIONAL TEAM', path: '/national-team' },
    { name: 'SCHOOLS LEAGUE', path: '/schools-league' },
    { name: 'CALENDAR', path: '/calendar' },
    { name: 'BLOG', path: '/blog' },
    { name: 'INFORMATION', path: '/information' }
];

function ResponsiveAppBar() {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const [anchorElInfo, setAnchorElInfo] = React.useState(null);

    const handleOpenNavMenu = () => {
        setIsDrawerOpen(true);
    };

    const handleCloseNavMenu = () => {
        setIsDrawerOpen(false);
    };

    const handleOpenInfoMenu = (event) => {
        setAnchorElInfo(event.currentTarget);
    };

    const handleCloseInfoMenu = () => {
        setAnchorElInfo(null);
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
                            pages={NAVIGATION_ITEMS}
                            open={isDrawerOpen}
                            onClose={handleCloseNavMenu}
                        />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
                        <RouterLink to="/"><img src={logo} alt="Company Logo" style={{ height: '35px' }} /></RouterLink>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {NAVIGATION_ITEMS.map((page) => {
                            if (page.children) {
                                return (
                                    <React.Fragment key={page.name}>
                                        <Button
                                            onClick={handleOpenInfoMenu}
                                            sx={{ my: 2, mx: 3, color: 'white', display: 'flex', fontFamily: 'Montserrat' }}
                                            endIcon={<KeyboardArrowDownIcon />}
                                        >
                                            {page.name}
                                        </Button>
                                        <Menu
                                            sx={{ mt: '45px' }}
                                            id="menu-appbar"
                                            anchorEl={anchorElInfo}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={Boolean(anchorElInfo)}
                                            onClose={handleCloseInfoMenu}
                                            PaperProps={{
                                                sx: {
                                                    backgroundColor: '#0a0a0a',
                                                    color: 'white',
                                                    borderRadius: '12px',
                                                    border: '1px solid rgba(255, 255, 255, 0.15)',
                                                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
                                                    marginTop: '8px',
                                                }
                                            }}
                                        >
                                            {page.children.map((child) => (
                                                <MenuItem
                                                    key={child.name}
                                                    onClick={handleCloseInfoMenu}
                                                    sx={{
                                                        fontFamily: 'Montserrat',
                                                        fontSize: '15px',
                                                        fontWeight: 500,
                                                        color: '#e0e0e0',
                                                        padding: '12px 24px',
                                                        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                                                        '&:last-child': {
                                                            borderBottom: 'none'
                                                        },
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                            color: '#ffffff'
                                                        },
                                                        transition: 'all 0.2s ease'
                                                    }}
                                                >
                                                    <Typography textAlign="center" component={RouterLink} to={child.path} sx={{ textDecoration: 'none', color: 'inherit', fontFamily: 'inherit', width: '100%', textAlign: 'left' }}>
                                                        {child.name}
                                                    </Typography>
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </React.Fragment>
                                );
                            }
                            return (
                                <Button
                                    key={page.name}
                                    component={RouterLink}
                                    to={page.path}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, mx: 3, color: 'white', display: 'block', fontFamily: 'Montserrat' }}
                                >
                                    {page.name}
                                </Button>
                            );
                        })}
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            variant="contained"
                            onClick={() => {
                                document.getElementById('social-footer')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                window.dispatchEvent(new Event('highlight-socials'));
                            }}
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