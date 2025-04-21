//import logo from './logo.svg';
import SimpleSlider from './utils/SliderBanner';
import ResponsiveAppBar from './utils/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar/>
        <SimpleSlider/>
      </header>
    </div>
  );
}

export default App;
