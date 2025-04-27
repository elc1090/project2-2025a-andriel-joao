//import logo from './logo.svg';
import SimpleSlider from './utils/SliderBanner';
import ResponsiveAppBar from './utils/NavBar';
import './App.css';
import { Workouts } from './workout/Workouts';
import { useState, useEffect } from "react"

function App() {

    const [workouts, setWorkouts] = useState([])

    useEffect(() => {
        if (localStorage.getItem("workouts") != null) {
            setWorkouts(JSON.parse(localStorage.getItem("workouts")));
        }
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <ResponsiveAppBar/>
                <SimpleSlider/>
            </header>
            <section style={{margin: '20px'}}>
                <Workouts workouts={workouts} setWorkouts={setWorkouts}/>
            </section>
        </div>
    );
}

export default App;
