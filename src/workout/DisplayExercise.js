import { getNameByLanguage } from "../functions/APIFunctions"

export const DisplayExercise = ({exercise, onRemove}) => {
    return (
        <section style={{display: "flex"}}>
            <div>{getNameByLanguage(exercise.exercise, 2)}</div>
            <div>Séries: {exercise.sets}</div>
            <div>Repetições: {exercise.reps}</div>
            <div>Tempo de execução da série: {exercise.executionTime}</div>
            <div>Tempo de descanso: {exercise.restTime}</div>
            <div>Tempo total do exercicio {exercise.totalTime}</div>
        </section>
    )
}