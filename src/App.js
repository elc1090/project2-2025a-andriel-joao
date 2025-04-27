//import logo from './logo.svg';
import SimpleSlider from './utils/SliderBanner';
import ResponsiveAppBar from './utils/NavBar';
import PresentationText from './utils/PresentationText';
import './App.css';
import { Workouts } from './workout/Workouts';
import { Meals } from './meal/Meals';
import { useState, useEffect } from "react"
import { Days } from './days/Days';

function App() {

    const [workouts, setWorkouts] = useState([])
    const [meals, setMeals] = useState([])

    useEffect(() => {
        if (localStorage.getItem("workouts") != null) {
            setWorkouts(JSON.parse(localStorage.getItem("workouts")));
        }
        if (localStorage.getItem("meals") != null) {
            setMeals(JSON.parse(localStorage.getItem("meals")));
        }
    }, [])

    return (
        <div className="App">
            
            <header className="App-header">
                <ResponsiveAppBar/>
                <SimpleSlider/>
            </header>
            <section className='body'>
                <PresentationText/>
                {/*
                <Workouts workouts={workouts} setWorkouts={setWorkouts}/>
                <Meals meals={meals} setMeals={setMeals}/>
                <Days meals={meals} workouts={workouts}/>
                */}
            </section>
        </div>
    );
}

export default App;
