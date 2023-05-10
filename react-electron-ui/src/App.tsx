import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherContainer from "./components/WeatherContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <div className='container'>
        <div className='quarter'>
          <WeatherContainer></WeatherContainer>
        </div>
        <div className='quarter'>content 2 </div>
        <div className='quarter'>content 3 </div>
        <div className='quarter'>content 4</div>
      </div>

    </div>
  );
}

export default App;
