import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Stack } from "@mui/material";
import { DisplayMeal } from "../meal/DisplayMeal";
import { DisplayWorkout } from "../workout/DisplayWorkout";
import { formatTime } from "../utils/Time";

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
            <h3>Planejamento diário</h3>
            {daysOfWeek.map((day) => (
                <Accordion>
                    <AccordionSummary sx={{fontSize: "1.1em", fontWeight: 'bold'}}>
                        {day.label}
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <div style={{margin: '10px', textAlign: 'left', fontWeight: 'bold'}}>Treinos</div>
                            <Stack spacing={1}>
                                {getWorkoutsByDay(day.value).map((workout) => (
                                    <Paper>    
                                        <DisplayWorkout workout={workout}/>
                                    </Paper>
                                ))}
                            </Stack>
                        </Box>
                        <Box>
                            <div style={{margin: '10px', textAlign: 'left', fontWeight: 'bold'}}>Refeições</div>
                            <Stack spacing={1}>
                                {getMealsByDay(day.value).map((meal) => (
                                    <Paper>    
                                        <DisplayMeal meal={meal}/>
                                    </Paper>
                                ))}
                            </Stack>
                            <Stack sx={{marginTop: "15px"}} direction="row" spacing={2}>
                                <Stack>
                                    <div style={{ fontSize: "0.8em", color: "gray" }}>Total de proteínas</div>
                                    <div>{getMealsByDay(day.value).reduce((sum, current) => sum + Number(current.totalProtein), 0)}</div>
                                </Stack>
                                <Stack>
                                    <div style={{ fontSize: "0.8em", color: "gray" }}>Total de Calorias</div>
                                    <div>{getMealsByDay(day.value).reduce((sum, current) => sum + Number(current.totalEnergy), 0)}</div>
                                </Stack>
                            </Stack>
                        </Box>
                        <Box>
                            <Stack>
                                <div style={{ fontSize: "0.8em", color: "gray" }}>Tempo total gasto no dia</div>
                                <div>{formatTime(getTotalTime(getWorkoutsByDay(day.value), getMealsByDay(day.value)))}</div>
                            </Stack>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            ))}
        </section>
    )
}