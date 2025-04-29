import { useState } from "react"
import CheckBoxDayOfWeek from "../utils/CheckBoxDayOfWeek";
import { IngredientSearch } from "./IngredientSearch";
import { IngredientEditor } from "./IngredientEditor";
import { DisplayIngredient } from "./DisplayIngredient";

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
        <section>
            <h4>Nova refeição</h4>
            <div>
                <input placeholder="Nome da refeição" onChange={(e) => setName(e.target.value)}/>
                <input placeholder="Tempo de preparação" onChange={(e) => setPrepararionTime(e.target.value)}/>
                <CheckBoxDayOfWeek onChange={setDaysOfWeek}/>
            </div>
            <h5>Adicionar ingredientes</h5>
            {ingredients.map((ingredient) => (
                <DisplayIngredient ingredient={ingredient}/>
            ))}
            <IngredientSearch onSelect={setSelectedIngredient}/>
            {selectedIngredient &&
                <IngredientEditor onSave={addIngredient} ingredient={selectedIngredient}/>
            }
            <button onClick={saveMeal}>Salvar</button>
        </section>
    )
}