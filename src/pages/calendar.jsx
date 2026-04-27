import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function CalendarPage() {
    useEffect(() => {
        const existingScript = document.getElementById('styled-calendar-script');
        if (!existingScript) {
            const script = document.createElement('script');
            script.id = 'styled-calendar-script';
            script.src = "https://embed.styledcalendar.com/assets/parent-window.js";
            script.async = true;
            script.type = "module";
            document.body.appendChild(script);
        }

        return () => {
            const scriptToRemove = document.getElementById('styled-calendar-script');
            if (scriptToRemove) {
                document.body.removeChild(scriptToRemove);
            }
        };
    }, []);

    return (
        <Box sx={styles.container}>
            {/* Header */}
            <Box sx={styles.header}>
                <Typography component="h1" sx={styles.title}>DC Calendar</Typography>
                <Typography sx={styles.subtitle}>
                    This calendar depicts all the scheduled DC events for the year. If your institution is organising a tournament please contact <Box component="a" href="mailto:debaterscouncil@gmail.com" sx={{ color: '#ff4d4d', textDecoration: 'underline', '&:hover': { color: '#ff7b7b' } }}>debaterscouncil@gmail.com</Box> to reserve a date.
                </Typography>
            </Box>

            {/* Main Content */}
            <Box sx={styles.content}>
                <Box sx={styles.calendarContainer}>
                    <iframe 
                        src="https://embed.styledcalendar.com/#5JICiFZRkjAozyc2WORv" 
                        title="Styled Calendar"
                        className="styled-calendar-container" 
                        style={{ width: '100%', height: '800px', border: 'none', borderRadius: '12px' }}
                        data-cy="calendar-embed-iframe"
                    ></iframe>
                </Box>
            </Box>
        </Box>
    );
}

const styles = {
    container: {
        minHeight: '100vh',
        background: '#121212',
        fontFamily: 'Montserrat, sans-serif',
    },
    header: {
        background: '#050505',
        padding: { xs: '3rem 1.5rem', md: '4rem 2rem' },
        borderBottom: '1px solid #222',
        textAlign: 'center',
    },
    title: {
        fontSize: { xs: '2rem', md: '3rem' },
        fontWeight: '900',
        marginBottom: '1rem',
        color: '#fff',
        fontFamily: 'Montserrat',
    },
    subtitle: {
        fontSize: { xs: '1rem', md: '1.25rem' },
        color: '#aaa',
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: '1.6',
        fontFamily: 'Montserrat',
    },
    content: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: { xs: '2rem 1rem', md: '4rem 2rem' },
    },
    calendarContainer: {
        background: '#1a1a1a',
        borderRadius: '16px',
        padding: { xs: '1rem', md: '2rem' },
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        border: '1px solid #333',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '800px'
    }
};

export default CalendarPage;