import React from 'react';
import SearchComponent from './SearchComponent';
import './App.css';
import StarWarsLogo from './assets/Star_Wars_Logo.png';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="logo-container">
                    <img src={StarWarsLogo} className="flip-image" alt="Star Wars Logo" />
                    <h1 className="text-3xl font-bold yellow-text">Starship Search Application</h1>
                </div>
            </header>
            <SearchComponent />
        </div>
    );
}

export default App;