import { use, useState } from "react"
import { ExerciseSearch } from "./ExerciseSearch"
import { ExerciseEditor } from "./ExerciseEditor";
import { DisplayExercise } from "./DisplayExercise";

export const NewTrain = () => {

    const [addedExercises, setAddedExercises] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState(null);

    const addExercise = (exercise) => {
        setAddedExercises(prev => [...prev, exercise]);
        setSelectedExercise(null);
    }

    return (
        <section>
            { addedExercises.map((ex) => (
                <DisplayExercise exercise={ex}/>
            ))}
            <ExerciseSearch onSelected={setSelectedExercise}/>
            { selectedExercise && 
                <section>
                    <ExerciseEditor onSave={addExercise} exercise={selectedExercise} key={selectedExercise.id}/>
                </section>
            }
        </section>
    )
}