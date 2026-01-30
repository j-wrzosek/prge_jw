import React from 'react';
import { Typography, Box, Grid } from "@mui/material";
import ServiceCard from '../components/ServiceCard';

function Services() {
    return (
        <Box sx={{ bgcolor: '#e0e0e0', minHeight: '100vh', p: 4 }}>
            <Typography variant="h2" sx={{ fontWeight: 900, mb: 6, textAlign: 'center' }}>
                <span style={{ color: '#2ecc71' }}>GEO</span>
                <span style={{ color: '#ffffff' }}>SERVICES</span>
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <ServiceCard
                        title="Lista Parków"
                        text="Przeglądaj wszystkie ogrody w bazie danych."
                        image="https://architecturaldigest.pl/i/publications/1029/1920_1080/najladniejsze-parki-w-warszawie-9-miejskich-parkow-ktore-musisz-odwiedzic-1838-1029-88293.jpg"
                        link="/list"
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <ServiceCard
                        title="Mapa Interaktywna"
                        text="Zobacz lokalizację parków na mapie Warszawy."
                        image="https://leafletjs.com/examples/quick-start/thumbnail.png"
                        link="/map"
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <ServiceCard
                        title="Dodaj Obiekt"
                        text="Uzupełnij naszą bazę o nowy park lub ogród."
                        image="https://voca-land.sgp1.cdn.digitaloceanspaces.com/43844/1762526033257/5d8b63c6.jpg"
                        link="/newpark"
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Services;