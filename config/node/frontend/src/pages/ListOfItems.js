import React, {useEffect, useState} from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom'; 
import ParkCard from "../components/ParkCard";

function ListOfItems() {
    const [parks, setParks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:10000/app/get_parks')
            .then(res => res.json())
            .then(res => setParks(res));
    }, []);

    return (
        <Box sx={{ bgcolor: '#e0e0e0', minHeight: '100vh', p: 5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
                <Typography variant="h3" sx={{ color: '#2ecc71', fontWeight: 'bold' }}>
                    Lista parków/ogrodów
                </Typography>


                <Button
                    variant="contained"
                    component={Link}
                    to="/table"
                    sx={{ bgcolor: '#2ecc71', '&:hover': { bgcolor: '#27ae60' } }}
                >
                    Zmień na widok tabeli
                </Button>
            </Box>

            <Grid container spacing={4}>
                {parks.data?.map(park => (
                    <Grid item xs={3} key={park.name}>
                        <ParkCard park={park} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ListOfItems;