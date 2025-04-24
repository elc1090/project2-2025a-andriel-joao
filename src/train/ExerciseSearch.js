import { useState } from "react";
import { findExercisesByName, getNameByLanguage } from "../functions/APIFunctions";

export const ExerciseSearch = ({ onSelected }) => {

    const [exercises, setExercises] = useState([]);
    const [language, setLanguage] = useState(2); //ingles
    const [filteringName, setFilteringName] = useState("");
    const [loading, setLoading] = useState(false)

    const handleSearch = async (event) => {
        setLoading(true);
        setExercises(await findExercisesByName(filteringName, 2));
        setLoading(false);
    };

    const selectedExercise = (selectedExercise) => {
        setExercises([]);
        onSelected(selectedExercise);
    }

    return (
        <section>
            <input onChange={(e) => setFilteringName(e.target.value)} placeholder='Nome do exercício'/>
            <button type="button" onClick={handleSearch}>Buscar</button>
            <div className="exercise-options">
                {loading &&
                    <span>Finge que é um ícone de coisinha carregando</span>
                }
                {!loading &&
                    <div>
                        { exercises.map((exercise) => {
                            return (
                                <div key={exercise.id} onClick={() => selectedExercise(exercise)}>{getNameByLanguage(exercise, language)}</div>
                            )   
                        })}
                    </div>
                }
            </div>
        </section>
    )
}

