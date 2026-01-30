import React, {useState} from 'react';
import {Container, Box, TextField, Button, Paper, Typography} from "@mui/material";

function NewPark(props) {
    const [parkName, setParkName] = useState("")
    const [parkCity, setParkCity] = useState("")
    const [parkRating, setParkRating] = useState(5)
    const [parkPhoto, setParkPhoto] = useState("")

    const handleSubmit = async (e) => {
        console.log(parkName, parkCity, parkRating)
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:10000/app/insert_park', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: parkName,
                    city: parkCity,
                    rating: parkRating,
                    photo: parkPhoto
                })
            })
            if (response.ok) {
                setParkName("");
                setParkCity("");
                setParkRating(5);
                setParkPhoto("");
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Box sx={{
            bgcolor: '#e0e0e0',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            py: 8
        }}>
            <Container maxWidth="sm">
                <Paper elevation={3} sx={{ p: 5, borderRadius: 3 }}>
                    <Typography variant="h3" sx={{
                        color: '#2ecc71',
                        fontWeight: 'bold',
                        mb: 4,
                        textAlign: 'center'
                    }}>
                        DODAJ NOWY PARK
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            sx={{ mb: 3 }}
                            fullWidth
                            label="Nazwa parku"
                            variant="outlined"
                            value={parkName}
                            onChange={(e) => setParkName(e.target.value)}
                        />
                        <TextField
                            sx={{ mb: 3 }}
                            fullWidth
                            label="Miasto / Lokalizacja"
                            variant="outlined"
                            value={parkCity}
                            onChange={(e) => setParkCity(e.target.value)}
                        />
                        <TextField
                            sx={{ mb: 3 }}
                            fullWidth
                            label="Ocena (1-10)"
                            type="number"
                            variant="outlined"
                            value={parkRating}
                            onChange={(e) => setParkRating(e.target.value)}
                        />
                        <TextField
                            sx={{ mb: 4 }}
                            fullWidth
                            label="Link do zdjęcia (URL)"
                            variant="outlined"
                            value={parkPhoto}
                            onChange={(e) => setParkPhoto(e.target.value)}
                            placeholder="https://example.com/image.jpg"
                        />

                        <Button
                            type="submit"
                            variant='contained'
                            fullWidth
                            sx={{
                                bgcolor: '#2ecc71',
                                '&:hover': { bgcolor: '#27ae60' },
                                py: 1.5,
                                fontSize: '1.1rem',
                                fontWeight: 'bold'
                            }}
                        >
                            DODAJ PARK
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}

export default NewPark;