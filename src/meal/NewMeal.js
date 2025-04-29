import { useState } from "react"
import CheckBoxDayOfWeek from "../utils/CheckBoxDayOfWeek";
import { IngredientSearch } from "./IngredientSearch";
import { IngredientEditor } from "./IngredientEditor";
import { DisplayIngredient } from "./DisplayIngredient";
import OvoFrito from '../assets/ovo-frito.png';
import Melancia from '../assets/melancia.png';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export const NewMeal = ({onSave}) => {
    
    const [ingredients, setIngredients] = useState([]); 
    const [name, setName] = useState(null);
    const [preparationTime, setPrepararionTime] = useState(null);
    const [daysOfWeek, setDaysOfWeek] = useState([]);
    const [selectedIngredient, setSelectedIngredient] = useState(null);

    const saveMeal = () => {
        const newMeal = {
            name: name,
            preparationTime: preparationTime,
            daysOfWeek: daysOfWeek,
            ingredients: ingredients,
            totalProtein: ingredients.reduce((sum, current) => sum + Number(current.protein), 0),
            totalEnergy: ingredients.reduce((sum, current) => sum + Number(current.energy), 0)
        }
        onSave(newMeal);
    }

    const addIngredient = (ingredient) => {
        setIngredients((prev) => [...prev, ingredient]);
        setSelectedIngredient(null);
    }
    
    return (
        <Box>
            <Box className='HeaderContainer' style={{display: 'flex'}}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'Racing Sans One, Arial, sans-serif' }}>
                    Nova refeição
                </Typography>
                <img src={Melancia} style={{height: '50px', width: '50px', paddingLeft: '10px'}} alt='Imagem de halter no modelo pixel art'/>
            </Box>
            <hr style={{
                border: 'none',
                height: '1px',
                backgroundColor: '#e0e0e0', // cinza bem claro
                margin: '20px 0' // espaçamento vertical
            }} />
            <Box>
                <TextField
                    label="Nome da refeição"
                    variant="outlined"
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label="Tempo de preparação"
                    variant="outlined"
                    onChange={(e) => setPrepararionTime(e.target.value)}
                    sx={{marginInline: 3,width: 200}}
                />
                <CheckBoxDayOfWeek onChange={setDaysOfWeek}/>
            </Box>

            <Box className='HeaderContainer' style={{display: 'flex'}}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'Racing Sans One, Arial, sans-serif' }}>
                    Adicionar ingredientes
                </Typography>
                <img src={OvoFrito} style={{height: '50px', width: '50px', paddingLeft: '10px'}} alt='Imagem de halter no modelo pixel art'/>
            </Box>
            <hr style={{
                border: 'none',
                height: '1px',
                backgroundColor: '#e0e0e0', // cinza bem claro
                margin: '20px 0' // espaçamento vertical
            }} />
            {ingredients.map((ingredient) => (
                <DisplayIngredient ingredient={ingredient}/>
            ))}
            <IngredientSearch onSelect={setSelectedIngredient}/>
            {selectedIngredient &&
                <IngredientEditor onSave={addIngredient} ingredient={selectedIngredient}/>
            }
            <button onClick={saveMeal}>Salvar</button>
        </Box>
    )
}