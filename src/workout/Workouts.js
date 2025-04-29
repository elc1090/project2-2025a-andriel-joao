import { useEffect, useState } from "react"
import { NewWorkout } from "./NewWorkout";
import { DisplayWorkout } from "./DisplayWorkout";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Bola from '../assets/bola.png'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
export const Workouts = ({workouts, setWorkouts}) => {

    const addWorkout = (addedWorkout) => {
        setWorkouts((prev) => {
            const newWorkoutArray = [...prev, addedWorkout]
            localStorage.setItem("workouts", JSON.stringify(newWorkoutArray))
            return newWorkoutArray;
        });
    }
    
    return (
        <Box sx={{paddingInline: "10%", textAlign: 'justify', marginTop: "30px" }}>
            <div className='HeaderContainer' style={{display: 'flex'}}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontFamily: 'Racing Sans One, Arial, sans-serif' }}>
                    Treinos
                </Typography>
                <img src={Bola} style={{height: '62px', width: '56px', paddingLeft: '10px'}} alt='Imagem de halter no modelo pixel art'/>
            </div>
            <hr style={{
                border: 'none',
                height: '1px',
                backgroundColor: '#e0e0e0', // cinza bem claro
                margin: '32px 0' // espaçamento vertical
            }} />
            <Stack spacing={2}>
                {workouts.map((workout) => (        
                    <Paper>
                        <DisplayWorkout workout={workout} key={workout.name}/>
                    </Paper>
                ))}
            </Stack>
            <NewWorkout onSave={addWorkout}/>
        </Box>
    )
}