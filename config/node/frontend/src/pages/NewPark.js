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
            console.log(response)
        } catch (e) {
            console.log(e)
        }

    }


    return (
        <div>
            <Container>
                <Paper elevation={3} sx={{p: 4}}>
                    <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                        DODAJ NOWY PARK
                    </Typography>
                    <Box component="form"
                         onSubmit={handleSubmit}
                    >
                        <TextField sx={{m: 1}}
                                   fullWidth
                                   label="Nazwa parku"
                                   value={parkName}
                                   onChange={(e) => setParkName(e.target.value)}
                        ></TextField>
                        <TextField sx={{m: 1}}
                                   fullWidth
                                   label="Miasto / Lokalizacja"
                                   value={parkCity}
                                   onChange={(e) => setParkCity(e.target.value)}
                        ></TextField>
                        <TextField sx={{m: 1}}
                                   fullWidth
                                   label="Ocena (1-10)"
                                   value={parkRating}
                                   onChange={(e) => setParkRating(e.target.value)}
                        ></TextField>
                        <TextField
                            sx={{m: 1}} fullWidth label="Link do zdjęcia (URL)"
                            value={parkPhoto} onChange={(e) => setParkPhoto(e.target.value)}
                            placeholder="https://example.com/image.jpg"
                        />
                        <Button type="submit" variant='contained'>Dodaj park</Button>


                    </Box>
                </Paper>
            </Container>


        </div>
    );
}

export default NewPark;