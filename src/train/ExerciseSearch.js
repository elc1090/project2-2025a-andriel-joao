import { useState } from "react";
import { findExercisesByName, getNameByLanguage } from "../functions/APIFunctions";

export const ExerciseSearch = ({ onSelected }) => {

    const [exercises, setExercises] = useState([]);
    const [language, setLanguage] = useState(2); //ingles

    //todo: precisa tratar o idioma
    const handleSearch = async (event) => {
        const query = event.target.value;
        //por enquanto ta buscando em ingles
        setExercises(await findExercisesByName(query, 2));
    };
    return (
        <section>
            <input onChange={handleSearch} placeholder='Nome do exercício'/>
            <article className="exercise-options">
                {/* aqui vão as opções retornadas pela busca */}
                { exercises.map((exercise) => {
                    return (
                        <div onClick={onSelected}>{getNameByLanguage(exercise, language)}</div>
                    )   
                })}
            </article>
        </section>
    )
}

