import { useState } from "react"

export const IngredientEditor = ({ingredient, onSave}) => {

    const [quantity, setQuantity] = useState(null);

    const getServingQuantity = () => {
        if (ingredient.serving_quantity != undefined) {
            return ingredient.serving_quantity;
        }
        const match = ingredient.serving_size.match(/^([\d.]+)([a-zA-Z]+)$/);
        if (match) {
            const value = parseFloat(match[1]);
            const unit = match[2].toLowerCase();
            switch (unit) {
                case "g", "gm":
                return value;
                case "kg":
                return value * 1000;
                case "mg":
                return value / 1000;
                case "l":
                return value * 1000; // Assuming 1L = 1000g for water-like density
                case "ml":
                return value; // Assuming 1ml = 1g for water-like density
                default:
                return null; // Unknown unit
            }
        }
        return null;
    }

    const saveIngredient = () => {
        const newIngredient = {
            quantity: quantity,
            ingredient: ingredient,
            protein: getProteins(),
            energy: getKcal(),
        }
        onSave(newIngredient);
    }

    const getProteins = () => {
        return ((ingredient.nutriments.proteins / getServingQuantity()) * quantity).toFixed(0);
    }

    const getKcal = () => {
        return ((ingredient.nutriments["energy-kcal"] / getServingQuantity()) * quantity).toFixed(0);
    }

    return (
        <section>
            {ingredient.product_name}
            <input placeholder="quantidade (g)" onChange={(e) => setQuantity(e.target.value)}/>
            <span>calorias: {getKcal()}</span>
            <span>proteínas: {getProteins()}</span>
            <div>
                <button type="button" onClick={saveIngredient}>Adicionar</button>
            </div>
        </section>
    )
}