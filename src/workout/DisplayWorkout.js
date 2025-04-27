export const DisplayWorkout = ({workout}) => {
    return (
        <section>
            <span>{workout.name} - {workout.totalTime}</span>
        </section>
    )
}