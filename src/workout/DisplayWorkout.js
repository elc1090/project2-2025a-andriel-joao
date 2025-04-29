import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { DisplayExercise } from './DisplayExercise';
import { getDayName } from '../utils/DaysOfWeek';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { formatTime } from '../utils/Time';

export const DisplayWorkout = ({workout}) => {
    return (
        <Accordion>
            <AccordionSummary sx={{fontSize: "1.1em"}}>
                {workout.name}
            </AccordionSummary>
            <AccordionDetails>
                <Stack spacing={1} direction="row">
                    <Paper sx={{padding: "10px"}}>Dia: {getDayName(workout.dayOfWeek)}</Paper>
                    <Paper sx={{padding: "10px"}}>Duração: {formatTime(workout.totalTime)}</Paper>
                </Stack>
                <List>
                    {workout.exercises.map((exercise) => (
                        <ListItem>
                            <ListItemButton>
                                <DisplayExercise exercise={exercise}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </AccordionDetails>
        </Accordion>
    )
}