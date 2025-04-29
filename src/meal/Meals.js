import { DisplayMeal } from "./DisplayMeal";
import { NewMeal } from "./NewMeal";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Berinjela from '../assets/berinjela.png';
import Typography  from '@mui/material/Typography';
export const Meals = ({meals, setMeals}) => {

    const addMeal = (newMeal) => {
        setMeals((prev) => {
            const newMealArray = [...prev, newMeal]
            localStorage.setItem("meals", JSON.stringify(newMealArray))
            return newMealArray;
        });
    }

    return (
        <Box sx={{paddingInline: "10%", textAlign: 'justify', marginTop: "30px"}}>
            <div className='HeaderContainer' style={{display: 'flex'}}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontFamily: 'Racing Sans One, Arial, sans-serif' }}>
                    Refeições
                </Typography>
                <img src={Berinjela} style={{height: '64px', width: '64px', paddingLeft: '10px'}} alt='Imagem de halter no modelo pixel art'/>
            </div>
            <hr style={{
                border: 'none',
                height: '1px',
                backgroundColor: '#e0e0e0', // cinza bem claro
                margin: '32px 0' // espaçamento vertical
            }} />
            <Stack spacing={2}>
            { meals.map((meal) => (
                <Paper>
                    <DisplayMeal key={meal.name} meal={meal}/>
                </Paper>
            ))}
            </Stack>
            <br/>
            <NewMeal onSave={addMeal}/>
        </Box>
    )
}