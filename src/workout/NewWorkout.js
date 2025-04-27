import { use, useState } from "react"
import { ExerciseSearch } from "./ExerciseSearch"
import { ExerciseEditor } from "./ExerciseEditor";
import { DisplayExercise } from "./DisplayExercise";
import SelectDayOfWeek from "../utils/SelectDayOfWeek";

export const NewWorkout = ({onSave}) => {

    const [addedExercises, setAddedExercises] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [name, setName] = useState(null);
    const [dayOfWeek, setDayOfWeek] = useState(null)

    const addExercise = (exercise) => {
        setAddedExercises(prev => [...prev, exercise]);
        setSelectedExercise(null);
    }

    const saveWorkout = () => {
        const newWorkout = {
            name: name,
            dayOfWeek: dayOfWeek,
            exercises: addedExercises,
            totalTime: addedExercises.reduce((sum, current) => sum + current.totalTime, 0)
        }
        console.log(onSave);
        onSave(newWorkout);
    }

    return (
        <section>
            <article>
                <input onChange={(e) => setName(e.target.value)} placeholder="Nome"/>
                <SelectDayOfWeek onChange={setDayOfWeek}/>
            </article>
            { addedExercises.map((ex) => (
                <DisplayExercise exercise={ex}/>
            ))}
            <ExerciseSearch onSelected={setSelectedExercise}/>
            { selectedExercise && 
                <section>
                    <ExerciseEditor onSave={addExercise} exercise={selectedExercise} key={selectedExercise.id}/>
                </section>
            }
            <article>
                <button onClick={saveWorkout} type="button">Salvar</button>
            </article>
        </section>
    )
}