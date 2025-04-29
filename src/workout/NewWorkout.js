import { use, useState } from "react"
import { ExerciseSearch } from "./ExerciseSearch"
import { ExerciseEditor } from "./ExerciseEditor";
import { DisplayExercise } from "./DisplayExercise";
import SelectDayOfWeek from "../utils/SelectDayOfWeek";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Trampolim from '../assets/trampolim.png';
import Halteres from '../assets/pesos-academia.png';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import SaveIcon from '@mui/icons-material/Save';

export const NewWorkout = ({onSave}) => {

    const [addedExercises, setAddedExercises] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [name, setName] = useState(null);
    const [dayOfWeek, setDayOfWeek] = useState(null)

    const addExercise = (exercise) => {
        setAddedExercises(prev => [...prev, exercise]);
        setSelectedExercise(null);
    }

    const saveWorkout = () => {
        const newWorkout = {
            name: name,
            dayOfWeek: dayOfWeek,
            exercises: addedExercises,
            totalTime: addedExercises.reduce((sum, current) => sum + current.totalTime, 0)
        }
        console.log(onSave);
        onSave(newWorkout);
    }

    return (
        <Box sx={{}}>
            <div className='HeaderContainer' style={{display: 'flex',  marginTop: "5em"}}>
                <Typography variant="h5" component="h1" gutterBottom sx={{ fontFamily: 'Racing Sans One, Arial, sans-serif' }}>
                Adicionar Novo treino
                </Typography>
                <img src={Trampolim} style={{height: '27px', width: '40px', paddingLeft: '10px'}} alt='Imagem de halter no modelo pixel art'/>
            </div>
            <hr style={{
                border: 'none',
                height: '1px',
                backgroundColor: '#e0e0e0', // cinza bem claro
                margin: '20px 0' // espaçamento vertical
            }} />
            <article style={{display: "flex"}}>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="nome-treino"
                        label="Nome do treino"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Box>                
                <SelectDayOfWeek onChange={setDayOfWeek}/>
            </article>
            { addedExercises.map((ex) => (
                <DisplayExercise exercise={ex}/>
            ))}
            <div className='HeaderContainer' style={{display: 'flex', marginTop: "5em"}}>
                <Typography variant="h5" component="h1" gutterBottom sx={{ fontFamily: 'Racing Sans One, Arial, sans-serif' }}>
                Adicionar exercícios
                </Typography>
                <img src={Halteres} style={{height: '40px', width: '40px', paddingLeft: '10px'}} alt='Imagem de halter no modelo pixel art'/>
            </div>
            <hr style={{
                border: 'none',
                height: '1px',
                backgroundColor: '#e0e0e0', // cinza bem claro
                margin: '20px 0' // espaçamento vertical
            }} />
            <ExerciseSearch onSelected={setSelectedExercise}/>
            { selectedExercise && 
                <Box>
                    <ExerciseEditor onSave={addExercise} exercise={selectedExercise} key={selectedExercise.id}/>
                </Box>
            }
            <article style={{marginTop: 60}}>
                <Button
                    variant="contained"
                    onClick={saveWorkout}
                    endIcon={<SaveIcon/>}
                    color="success"
                    sx={{ m: 1, height: 50, width: 200}}
                >
                    Salvar 
                </Button>
            </article>
        </Box>
    )
}