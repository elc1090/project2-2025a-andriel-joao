import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { getDayName } from '../utils/DaysOfWeek';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

export const DisplayIngredient = ({ingredient}) => {
    return (
        <Stack direction="row" spacing={2}>
            <Stack>
                <img 
                    src={ingredient.ingredient.image_front_url} 
                    alt="Ingredient" 
                    style={{ width: "100px", height: "100px", objectFit: "contain" }} 
                />
            </Stack>
            <Stack>
                <div style={{ fontSize: "0.8em", color: "gray" }}>Ingrediente</div>
                <div>{ingredient.ingredient.product_name}</div>
            </Stack>
            <Stack>
                <div style={{ fontSize: "0.8em", color: "gray" }}>Quantidade</div>
                <div>{ingredient.quantity}</div>
            </Stack>
            <Stack>
                <div style={{ fontSize: "0.8em", color: "gray" }}>Proteínas</div>
                <div>{ingredient.protein}</div>
            </Stack>
            <Stack>
                <div style={{ fontSize: "0.8em", color: "gray" }}>Calorias</div>
                <div>{ingredient.energy}</div>
            </Stack>
        </Stack>
    )
}