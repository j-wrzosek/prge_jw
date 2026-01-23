import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';


function ParkCard({park}) {
    console.log('czym jest park: ', park)
    return (
        <div>
            <Card sx={{maxWidth: 345}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                            {park.name[0]}
                        </Avatar>
                    }
                    title={park.name}
                    subheader={park.city}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={park.photo || 'https://www.deutschland.de/sites/default/files/styles/image_carousel_mobile/public/media/image/istock-2167351238.jpg?itok=5Qm-BB6c'}
                    alt={`Zdjęcie parku ${park.name}`}
                />
                <CardContent>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        Park: {park.name} otrzymał ocenę: {park.rating}.
                    </Typography>
                </CardContent>


            </Card>
        </div>
    );
}

export default ParkCard;
