import { useEffect, useState } from "react"
import { NewWorkout } from "./NewWorkout";
import { DisplayWorkout } from "./DisplayWorkout";

export const Workouts = ({workouts, setWorkouts}) => {

    const addWorkout = (addedWorkout) => {
        setWorkouts((prev) => {
            const newWorkoutArray = [...prev, addedWorkout]
            localStorage.setItem("workouts", JSON.stringify(newWorkoutArray))
            return newWorkoutArray;
        });
    }
    
    return (
        <section>
            {workouts.map((workout) => (
                <DisplayWorkout workout={workout} key={workout.name}/>
            ))}
            <NewWorkout onSave={addWorkout}/>
        </section>
    )
}