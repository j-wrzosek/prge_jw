import React from 'react';
import { Typography, Button, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Box sx={{
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Grid container sx={{ width: '100%', maxWidth: '1400px', px: { xs: 2, md: 8 } }}>


                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box
                        component="img"
                        src="/poland_map.png"
                        alt="Mapa Polski"
                        sx={{
                            width: '90%',
                            maxWidth: '500px',
                            height: 'auto',
                            filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.1))'
                        }}
                    />
                </Grid>


                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography variant="h1" sx={{
                            fontWeight: 900,
                            fontSize: { xs: '3rem', md: '5rem' },
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'flex-start' },
                            gap: 1
                        }}>
                            <span style={{ color: '#2ecc71' }}>GEO</span>
                            <span style={{ color: '#ffffff' }}>PORTAL</span>
                        </Typography>

                        <Typography variant="h5" sx={{ mt: 1, mb: 4, color: '#555', maxWidth: '400px' }}>
                            Geoportal tematyczny poświęcony parkom i ogrodom
                        </Typography>

                        <Button
                            variant="contained"
                            component={Link}
                            to="/services"
                            sx={{
                                bgcolor: '#2ecc71',
                                '&:hover': { bgcolor: '#27ae60' },
                                fontSize: '1.2rem',
                                px: 6,
                                py: 1.5,
                                borderRadius: '10px',
                                fontWeight: 'bold',
                                width: 'fit-content'
                            }}
                        >
                            START
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Home;