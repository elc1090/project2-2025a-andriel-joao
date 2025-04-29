import { DisplayMeal } from "./DisplayMeal";
import { NewMeal } from "./NewMeal";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

export const Meals = ({meals, setMeals}) => {

    const addMeal = (newMeal) => {
        setMeals((prev) => {
            const newMealArray = [...prev, newMeal]
            localStorage.setItem("meals", JSON.stringify(newMealArray))
            return newMealArray;
        });
    }

    return (
        <section>
            <h3>Refeições</h3>
            <Stack spacing={2}>
            { meals.map((meal) => (
                <Paper>
                    <DisplayMeal key={meal.name} meal={meal}/>
                </Paper>
            ))}
            </Stack>
            <NewMeal onSave={addMeal}/>
        </section>
    )
}