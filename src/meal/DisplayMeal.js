import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { getDayName } from '../utils/DaysOfWeek';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { formatTime } from '../utils/Time';
import { DisplayIngredient } from './DisplayIngredient';

export const DisplayMeal = ({meal, icon}) => {
    return (
        <Accordion>
            <AccordionSummary sx={{fontSize: "1.1em"}}>
                {meal.name}
                <img src={icon} height={32} style={{marginInline: 10}}/>

            </AccordionSummary>
            <AccordionDetails>
                <Stack spacing={1}>
                    <Stack direction="row" spacing={1}>
                        {meal.daysOfWeek.sort().map((day) => (
                            <Paper sx={{opacity: "0.5", padding: "5px", fontSize: '0.8em'}}>{getDayName(day)}</Paper>
                        ))}
                    </Stack>
                    <Stack direction="row" spacing={1}>    
                        <Paper sx={{padding: "10px"}}>Tempo de preparo: {formatTime(meal.preparationTime)}</Paper>
                        <Paper sx={{padding: "10px"}}>Calorias: {meal.totalEnergy}</Paper>
                        <Paper sx={{padding: "10px"}}>Proteínas: {meal.totalProtein}</Paper>
                    </Stack>
                </Stack>
                <List>
                    {meal.ingredients.map((ingredient) => (
                        <ListItem>
                            <ListItemButton>
                                <DisplayIngredient ingredient={ingredient}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </AccordionDetails>
        </Accordion>
    )
}