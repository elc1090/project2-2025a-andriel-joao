import { ExerciseSearch } from "../train/ExerciseSearch"

const NewTrain = () => {
    const onExerciseSelect = () => {
        //do stuff
    }
    return (
        <ExerciseSearch onSelected={onExerciseSelect}/>
    )
}