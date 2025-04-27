import { DisplayMeal } from "../meal/DisplayMeal";
import { DisplayWorkout } from "../workout/DisplayWorkout";

export const Days = ({workouts, meals}) => {
    
    const daysOfWeek = [
        { value: 7, label: 'Domingo' },
        { value: 1, label: 'Segunda-feira' },
        { value: 2, label: 'Terça-feira' },
        { value: 3, label: 'Quarta-feira' },
        { value: 4, label: 'Quinta-feira' },
        { value: 5, label: 'Sexta-feira' },
        { value: 6, label: 'Sábado' },
    ];

    const getWorkoutsByDay = (day) => {
        return workouts.filter((workout) => workout.dayOfWeek == day);
    }

    const getMealsByDay = (day) => {
        return meals.filter((meal) => meal.daysOfWeek.includes(day));
    }

    const getTotalTime = (dayWorkouts, dayMeals) => {
        return Number(dayWorkouts.reduce((sum, current) => sum + current.totalTime, 0)) + Number(dayMeals.reduce((sum, current) => sum + Number(current.preparationTime), 0));
    }

    return (
        <section>
            {daysOfWeek.map((day) => (
                <div>
                    <h4>{day.label}</h4>
                    <div>
                        {getWorkoutsByDay(day.value).map((workout) => (
                            <DisplayWorkout workout={workout}/>
                        ))}
                    </div>
                    <div>
                        {getMealsByDay(day.value).map((meal) => (
                            <DisplayMeal meal={meal}/>
                        ))}
                    </div>
                    <p>Tempo total gasto no dia: {getTotalTime(getWorkoutsByDay(day.value), getMealsByDay(day.value))}</p>
                </div>
            ))}
        </section>
    )
}