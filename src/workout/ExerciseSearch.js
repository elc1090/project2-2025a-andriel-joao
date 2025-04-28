import { useState } from "react";
import { findExercisesByName, getNameByLanguage } from "../functions/APIFunctions";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Skeleton from '@mui/material/Skeleton';

export const ExerciseSearch = ({ onSelected }) => {

    const [exercises, setExercises] = useState([]);
    const [language, setLanguage] = useState(2); //ingles
    const [filteringName, setFilteringName] = useState("");
    const [loading, setLoading] = useState(false)

    const handleSearch = async (event) => {
        setLoading(true);
        setExercises(await findExercisesByName(filteringName, 2));
        setLoading(false);
    };

    const selectedExercise = (selectedExercise) => {
        setExercises([]);
        onSelected(selectedExercise);
    }

    return (
        <Box >
            <Box sx={{display: "flex"}}>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField
                        id="nome-exercicio"
                        label="Nome do exercício"
                        variant="outlined"
                        value={filteringName}
                        onChange={(e) => setFilteringName(e.target.value)}
                    />
                </Box>
                <Button
                    variant="contained"
                    onClick={handleSearch}
                    disabled={loading}
                    color="primary"
                    sx={{ m: 1 }}
                >
                    {loading ? "Buscando..." : "Buscar 🔍"}
                </Button>
            </Box>
            
            <div className="exercise-options">
                {loading && <>
                    <Skeleton sx={{height: "500px", width: "500px"}}/>
                    <Skeleton sx={{height: "500px", width: "500px"}}/>
                    <Skeleton sx={{height: "500px", width: "500px"}}/>
                </>

                }
                {!loading &&
                    <div>
                        { exercises.map((exercise) => {
                            return (
                                <div key={exercise.id} onClick={() => selectedExercise(exercise)}>
                                    {getNameByLanguage(exercise, language)}
                                    { exercise.images.length > 0 &&
                                        <img src={exercise.images[0].image}/>
                                    }
                                    { exercise.images.length == 0 &&
                                        <em>Exercício sem imagem</em>
                                    }
                                </div>
                            )   
                        })}
                    </div>
                }
            </div>
        </Box>
    )
}

