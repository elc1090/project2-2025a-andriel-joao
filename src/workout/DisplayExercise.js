import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Stack from '@mui/material/Stack';
import { getNameByLanguage } from "../functions/APIFunctions"
import { formatTime } from '../utils/Time';
import { Box } from '@mui/material';

export const DisplayExercise = ({exercise, onRemove}) => {
    return (
        <Accordion>
            <AccordionSummary>
                <Stack direction="row" spacing={2}>
                    <Stack>
                        <div style={{ fontSize: "0.8em", color: "gray" }}>Exercício</div>
                        <div>{getNameByLanguage(exercise.exercise, 2)}</div>
                    </Stack>
                    <Stack>
                        <div style={{ fontSize: "0.8em", color: "gray" }}>Séries</div>
                        <div>{exercise.sets}</div>
                    </Stack>
                    <Stack>
                        <div style={{ fontSize: "0.8em", color: "gray" }}>Repetições</div>
                        <div>{exercise.reps}</div>
                    </Stack>
                    <Stack>
                        <div style={{ fontSize: "0.8em", color: "gray" }}>Tempo de execução da série</div>
                        <div>{exercise.executionTime}</div>
                    </Stack>
                    <Stack>
                        <div style={{ fontSize: "0.8em", color: "gray" }}>Tempo de descanso</div>
                        <div>{exercise.restTime}</div>
                    </Stack>
                    <Stack>
                        <div style={{ fontSize: "0.8em", color: "gray" }}>Tempo total do exercício</div>
                        <div>{formatTime(exercise.totalTime)}</div>
                    </Stack>
                </Stack>
            </AccordionSummary>
            <AccordionDetails>
                {exercise.exercise.images && exercise.exercise.images.length > 0 && (
                    <Box>
                        <img 
                            src={exercise.exercise.images[0].image} 
                            alt="Exercise" 
                            style={{ width: '100%', maxHeight: '200px', objectFit: 'contain', marginBottom: '10px' }} 
                        />
                    </Box>
                )}
                {exercise.exercise.muscles.length > 0 &&
                    <Box>
                        <div style={{fontSize: '0.7em'}}>Músculos</div>
                        <List>
                            {exercise.exercise.muscles.map((muscle, index) => (
                                <ListItem key={index}>
                                    <ListItemButton>
                                        <div style={{fontSize: '0.9em'}}>{muscle.name_en}</div>
                                        <img src={"https://wger.de" + muscle.image_url_main} alt={muscle.name_en} style={{ width: '30px', height: '30px', marginLeft: '10px' }} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                }
            </AccordionDetails>
        </Accordion>
    );
}