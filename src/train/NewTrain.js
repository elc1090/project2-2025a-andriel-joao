import { use, useState } from "react"
import { ExerciseSearch } from "./ExerciseSearch"
import { ExerciseEditor } from "./ExerciseEditor";

export const NewTrain = () => {

    const [addedExercises, setAddedExercises] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState(null);

    const addExercise = (exercise) => {
        setAddedExercises(prev => [...prev, exercise]);
        console.log(exercise)
    }

    return (
        <section>
            <ExerciseSearch onSelected={setSelectedExercise}/>
            { selectedExercise && 
                <section>
                    <ExerciseEditor onSave={addExercise} exercise={selectedExercise} key={selectedExercise.id}/>
                </section>
            }
        </section>
    )
}