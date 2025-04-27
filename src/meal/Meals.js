import { DisplayMeal } from "./DisplayMeal";
import { NewMeal } from "./NewMeal";

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
            { meals.map((meal) => (
                <DisplayMeal key={meal.name} meal={meal}/>
            ))}
            <NewMeal onSave={addMeal}/>
        </section>
    )
}