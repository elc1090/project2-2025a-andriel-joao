import { useEffect, useState, useRef } from "react"
import { findExerciseImage, getNameByLanguage } from "../functions/APIFunctions"
import imageNotFound from '../assets/Image-not-found.png'
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField"
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import { formatTime, parseTime } from "../utils/Time";

export const ExerciseEditor = ({exercise, onSave}) => {

    const [setsNumber, setSetsNumber] = useState(0);
    const [executionTime, setExecutionTime] = useState(0);
    const [reps, setReps] = useState(0);
    const [restTime, setRestTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    const saveExercise = () => {
        const exerciseEntry = {
            exercise: exercise,
            sets: setsNumber,
            executionTime: executionTime,
            reps: reps,
            restTime: restTime,
            totalTime: totalTime
        }
        onSave(exerciseEntry)
    }

    useEffect(() => {
        setTotalTime((setsNumber * executionTime) + (restTime * (setsNumber - 1)));
    }, [executionTime, restTime, setsNumber])

    return (
        <Box sx={{backgroundColor: '#F8F8FF', height: 240}}>
            <Box
                component="form"
                sx={{ flexWrap: 'wrap', gap: 2}}
                noValidate
                autoComplete="off"
            >
                <Box sx={{ width: "100%",height: 50, backgroundColor: "#F8F8FF"}}><br/>
                    <Typography variant="h5" component="h1" gutterBottom sx={{marginInline: 3}}>
                        Adicionar: {getNameByLanguage(exercise, 2)}
                    </Typography>
                </Box>
                <br/>
                {/* TODO: adicionar imagens dos músculos */}
                <Box>
                    <TextField
                        label="Séries"
                        variant="outlined"
                        onChange={(e) => setSetsNumber(e.target.value)}
                        sx={{marginInline: 3, mb: 2}}
                    />
                    <TextField
                        label="Tempo médio de execução da série"
                        variant="outlined"
                        onChange={(e) => setExecutionTime(parseTime(e.target.value))}
                        type="time"
                        inputProps={{
                            step: 1,
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{marginInline: 3, width: "300px", mb: 2}}
                    />
                    <TextField
                        label="Repetições"
                        variant="outlined"
                        onChange={(e) => setReps(e.target.value)}
                        sx={{marginInline: 3, mb: 2}}
                    />
                    <TextField
                        label="Tempo de descanso entre séries"
                        variant="outlined"
                        onChange={(e) => setRestTime(parseTime(e.target.value))}
                        type="time"
                        inputProps={{
                          step: 1,
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        sx={{marginInline: 3, width: "300px", mb: 2}}
                    />
                    <TextField
                        label="Tempo total (somado)"
                        variant="standard"
                        value={formatTime(totalTime)}
                        InputProps={{
                            readOnly: true,
                        }}
                        sx={{marginInline: 3, mb: 2}}  
                    />
                </Box>
                
            </Box>
            <Box
                sx={{
                    backgroundColor:"#F8F8FF",
                    textAlign: "right",
                    marginTop: 2,
                }}
            >
                <Button
                    variant="contained"
                    onClick={saveExercise}
                    color="warning"
                    endIcon={<AddIcon/>}
                    sx={{marginRight: 9.5, height: 50, width: 200}}
                >
                    Adicionar 
                </Button>
                
            </Box>
            <br/>
         </Box>
         
    )
}