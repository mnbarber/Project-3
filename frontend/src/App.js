import React, { useContext } from 'react';
import { AppContext } from './pages/context-provider';
import Search from './pages/Search';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Character from './pages/Character';
// import { Route, Routes } from 'react-router-dom';

function App() {
  const { characterData, error } = useContext(AppContext);
  return (
    <div className="App">
      <Header />
        <Search />
        <Character character={characterData} error={error} />
      <Footer />
    </div>
  );
}

export default App;
