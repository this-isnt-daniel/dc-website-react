import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link as RouterLink } from 'react-router-dom';



export default function TemporaryDrawer({ pages, open, onClose }) {

    const DrawerList = (
        <Box
            sx={{
                width: 250,
                height: '100%', // Add this to make the box fill the drawer's height
                display: 'flex', // Add this to enable flexbox
                flexDirection: 'column' // Add this to stack items vertically
            }}
            role="presentation"
        >
            <Toolbar />
            <List>
                {/* Use the 'pages' prop passed from the AppBar */}
                {/* Use the 'pages' prop passed from the AppBar */}
                {pages.map((page) => {
                    if (page.children) {
                        const [open, setOpen] = React.useState(false);
                        const handleClick = () => {
                            setOpen(!open);
                        };
                        return (
                            <React.Fragment key={page.name}>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={handleClick} sx={{ textAlign: 'center', py: 3.5 }}>
                                        <Typography sx={{ width: '100%', fontFamily: 'Montserrat', color: '#DCDCDC' }}>{page.name}</Typography>
                                        {open ? <ExpandLess sx={{ color: '#DCDCDC' }} /> : <ExpandMore sx={{ color: '#DCDCDC' }} />}
                                    </ListItemButton>
                                </ListItem>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {page.children.map((child) => (
                                            <ListItemButton
                                                key={child.name}
                                                component={RouterLink}
                                                to={child.path}
                                                onClick={onClose}
                                                sx={{ pl: 4, py: 2, textAlign: 'center' }}
                                            >
                                                <Typography sx={{ width: '100%', fontFamily: 'Montserrat', color: '#DCDCDC', fontSize: '0.9rem' }}>{child.name}</Typography>
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </Collapse>
                            </React.Fragment>
                        );
                    }
                    return (
                        <ListItem key={page.name} disablePadding>
                            <ListItemButton
                                component={RouterLink}
                                to={page.path}
                                onClick={onClose} // This closes the drawer on click
                                sx={{ textAlign: 'center', py: 3.5 }}
                            >
                                <Typography sx={{ width: '100%', fontFamily: 'Montserrat', color: '#DCDCDC' }}>{page.name}</Typography>
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
            <Box sx={{ p: 2, marginTop: 'auto' }}>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => {
                        if (onClose) onClose();
                        setTimeout(() => {
                            document.getElementById('social-footer')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            window.dispatchEvent(new Event('highlight-socials'));
                        }, 300);
                    }}
                    sx={{
                        backgroundColor: 'white',
                        color: 'black',
                        borderRadius: '20px',
                        fontWeight: 'bold',
                        fontFamily: 'Montserrat',
                        '&:hover': {
                            backgroundColor: '#333'
                        }
                    }}
                >
                    GET IN TOUCH
                </Button>
            </Box>
        </Box>
    );

    return (
        <Drawer anchor="left" open={open} onClose={onClose}
            slotProps={{
                paper: {
                    sx: {
                        backgroundColor: '#000000',
                    },
                },
            }}
        >
            {DrawerList}
        </Drawer>
    );
}

