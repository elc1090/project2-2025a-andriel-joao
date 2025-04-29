import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Stack, Typography } from "@mui/material";
import { DisplayMeal } from "../meal/DisplayMeal";
import { DisplayWorkout } from "../workout/DisplayWorkout";
import { formatTime } from "../utils/Time";
import Mel from '../assets/mel.png'; 
import Berinjela from '../assets/berinjela.png';
import Pao from '../assets/pao.png';
import Pitaya from '../assets/pitaya.png';
import Morango  from '../assets/morango.png';
import OvoFrito from '../assets/ovo-frito.png';
import Melancia from '../assets/melancia.png';
import Bola from '../assets/bola.png'
import PatoIcon from '../assets/pato-gym.png';
import Esteira1 from '../assets/esteira.png';
import Esteira2 from '../assets/esteira-2.png';
import PatoIconSorrindo from '../assets/pato-sorrindo.png';
import Trampolim from '../assets/trampolim.png';
import Halteres  from '../assets/pesos-academia.png';

export const Days = ({workouts, meals}) => {
    
    const iconsFoods = [Mel, Berinjela, Pao, Pitaya, Morango, OvoFrito, Melancia];
    const iconsGym = [Bola, PatoIcon, Esteira1, Esteira2, PatoIconSorrindo, Trampolim, Halteres];
    function getRandomIcon(icons) {
        const randomIndex = Math.floor(Math.random() * icons.length);
        return icons[randomIndex];
    }

    const daysOfWeek = [
        { value: 7, label: 'Domingo',       color: '#ffcdd2'},  // pastel red
        { value: 1, label: 'Segunda-feira', color: '#ffe0b2'},  // pastel orange
        { value: 2, label: 'Terça-feira',   color: '#fff9c4'},  // pastel yellow
        { value: 3, label: 'Quarta-feira',  color: '#c8e6c9'},  // pastel green
        { value: 4, label: 'Quinta-feira',  color: '#bbdefb'},  // pastel blue
        { value: 5, label: 'Sexta-feira',   color: '#e1bee7'},  // pastel purple
        { value: 6, label: 'Sábado',        color: '#d7ccc8'} 
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
        <Box sx={{paddingInline: "10%", textAlign: 'justify', marginTop: "30px"}}>
            <Box className='HeaderContainer' style={{display: 'flex'}}>
                <Box sx={{mt: 5}}>
                    <Typography variant="h3" component="h1" gutterBottom sx={{ fontFamily: 'Racing Sans One, Arial, sans-serif' }}>
                        Planejamento diário
                    </Typography>
                </Box>
                <Box>
                    <img src={'https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_uTx5uxEvyKEJ5EnaUEUVoMclzIgrc9_hQJt9ATKgjPcptmMhyh9U_LjjxOyP5n_TAlmdOJYcWgreRdd3z54X_MvNUTqIbRCK_mLzWCXmtPbappfq2twln3n805wLuExCDhXGS5bp_NzD5As4Zekujt3mPVlDAiNlSb_EEUpDIWbcsSHQ=s0-d'} style={{height: '108px', width: '84px', paddingLeft: '10px'}} alt='Gif de uma lider de torcida animada no modelo pixel art'/>
                </Box>
            </Box>
            <hr style={{
                border: 'none',
                height: '1px',
                backgroundColor: '#e0e0e0', // cinza bem claro
                margin: '32px 0' // espaçamento vertical
            }} />
            {daysOfWeek.map((day) => (
                <Accordion>
                    <AccordionSummary sx={{fontSize: "1.1em", fontWeight: 'bold', backgroundColor: day.color}}>
                        <Box sx={{width: '200px'}}>
                            <Typography variant="h5" component="h1" gutterBottom sx={{ fontFamily: 'Racing Sans One, Arial, sans-serif' }}>
                                {day.label}
                            </Typography>
                        </Box>
                        <Box sx={{marginLeft: '72%',textAlign: 'right'}}>
                            <img src={getRandomIcon(iconsFoods)} height={32} style={{marginInline: 10}}/>
                            <img src={getRandomIcon(iconsGym)} height={40} style={{marginInline: 10}} />
                        </Box>
    
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            <div style={{margin: '10px', textAlign: 'left', fontWeight: 'bold'}}>Treinos</div>
                            <Stack spacing={1}>
                                {getWorkoutsByDay(day.value).map((workout) => (
                                    <Paper>    
                                        <DisplayWorkout workout={workout} icon={getRandomIcon(iconsGym)}/>
                                    </Paper>
                                ))}
                            </Stack>
                        </Box>
                        <Box>
                            <div style={{margin: '10px', textAlign: 'left', fontWeight: 'bold'}}>Refeições</div>
                            <Stack spacing={1}>
                                {getMealsByDay(day.value).map((meal) => (
                                    <Paper> 
                                        <DisplayMeal meal={meal} icon={getRandomIcon(iconsFoods)} />                                       
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
        </Box>
    )
}