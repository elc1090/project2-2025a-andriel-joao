import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function Persona({ name, opinion, image = "" }) {
    return (
        <Card sx={{ maxWidth: 345,height: 550, marginBlock: 5}}>
            <CardMedia
                sx={{ height: 350 }}
                image={image}  // Imagem pode ser passada como prop, ou um valor vazio
                title={`Foto de ${name} copiada da wiki do Stardew Valley`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {opinion}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Persona;