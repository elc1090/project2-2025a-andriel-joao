import { useState } from "react"
import { getFoodByName } from "../functions/APIFunctions";

export const IngredientSearch = ({onSelect}) => {
    
    const [ingredientOptions, setIngredientOptions] = useState([]); 
    const [filteringName, setFilteringName] = useState(null);
    const [loading, setLoading] = useState(false);

    const searchIngredients = async () => {
        setLoading(true);
        setIngredientOptions(await getFoodByName(filteringName));
        setLoading(false);
    }

    const selectIngredient = (ingredient) => {
        setIngredientOptions([]);
        onSelect(ingredient);
    }

    return (
        <article>
            <section>
                <input placeholder="Nome do ingrediente" onChange={(e) => setFilteringName(e.target.value)}/>
                <button type="button" onClick={searchIngredients}>Buscar</button>
            </section>
            <section>
                {loading &&
                    <div>Finge que tem um trequinho de loading aqui</div>
                }
                {ingredientOptions.map((ingredientOption) => (
                    <div onClick={() => selectIngredient(ingredientOption)}>
                        <div>{ingredientOption.product_name}</div>
                        <div>{ingredientOption.brands}</div>
                        <img src={ingredientOption.image_front_url}/>
                    </div>
                ))}
            </section>
        </article>
    )
}