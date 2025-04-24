//import logo from './logo.svg';
import SimpleSlider from './utils/SliderBanner';
import ResponsiveAppBar from './utils/NavBar';
import { NewTrain } from './train/NewTrain'
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ResponsiveAppBar/>
                <SimpleSlider/>
            </header>
            <section style={{margin: '20px'}}>
                <NewTrain/>
            </section>
        </div>
    );
}

export default App;
