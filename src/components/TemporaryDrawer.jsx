import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';




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
            <List>
                {/* Use the 'pages' prop passed from the AppBar */}
                {pages.map((page) => (
                    <ListItem key={page} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center',py: 3.5 }}>
                            <Typography sx={{ width: '100%', fontFamily: 'Montserrat', color: '#DCDCDC' }}>{page}</Typography>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
                <Box sx={{ p: 2, marginTop: 'auto' }}>
                    <Button
                        variant="contained"
                        fullWidth
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

