import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function NotFoundPage() {
    const navigate = useNavigate();
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212', color: '#fff', gap: 3 }}>
            <Typography variant="h1" sx={{ fontFamily: 'Montserrat', fontWeight: 900, fontSize: { xs: '5rem', md: '8rem' }, color: '#8B0000', lineHeight: 1 }}>
                404
            </Typography>
            <Typography variant="h5" sx={{ fontFamily: 'Montserrat', fontWeight: 600, color: '#aaa' }}>
                Page not found
            </Typography>
            <Button variant="outlined" onClick={() => navigate('/')} sx={{ color: '#fff', borderColor: '#fff', fontFamily: 'Montserrat', textTransform: 'none', mt: 1 }}>
                Go home
            </Button>
        </Box>
    );
}

export default NotFoundPage;
