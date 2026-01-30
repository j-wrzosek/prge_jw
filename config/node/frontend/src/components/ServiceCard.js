import React from 'react';
import { Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";


function ServiceCard({ title, image, link, text }) {
    return (
        <Card sx={{ borderRadius: 4, textAlign: 'center', height: '100%' }}>
            <CardMedia component="img" height="200" image={image} />
            <CardContent>
                <Typography variant="h6" gutterBottom>{title}</Typography>
                <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                    {text}
                </Typography>
                <Button variant="contained" component={Link} to={link} sx={{ bgcolor: '#2ecc71', '&:hover': { bgcolor: '#27ae60' } }}>
                    PRZEJDŹ
                </Button>
            </CardContent>
        </Card>
    );
}

export default ServiceCard;