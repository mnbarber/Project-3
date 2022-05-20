import React, { useState } from 'react';
import Search from './pages/Search';
import './styles/main.css';
import Header from './components/Header';
import AchievementList from './pages/AchievementList';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Achievement from './pages/Achievement';
import Home from './pages/Home';

function App() {
  const [data, setData] = useState({});
  const [character, setCharacter] = useState('');
  const [realm, setRealm] = useState('');
  const [achievements, setAchievements] = useState([]);
  const [achievementID, setAchievementID] = useState('');

  const findCharacter = async () => {
    try {
        const getToken = await fetch('https://us.battle.net/oauth/token', {
            body: 'grant_type=client_credentials',
            headers: {
                Authorization: 'Basic N2ZiYWFlN2ExYWNjNGM0OWE1NmM2YmJhYmQwNTA3ZWI6UGhzNERkTnZmanY3dno1ZUxsYjFDcFFsa1Bvampqalo=', 'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'POST'
        });
        const tokenData = await getToken.json();
        const tokenBearer = tokenData.access_token;
        const searchResponse = await fetch(`https://us.api.blizzard.com/profile/wow/character/${realm}/${character}/achievements?namespace=profile-us&locale=en_US`, {
            headers: {
                Authorization: `Bearer ${tokenBearer}`,
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'GET'
        });
        const apiData = await searchResponse.json();
        if(apiData) {
            setData(apiData);
        };
    } catch(error) {
        console.log(error);
    };
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search data={data} findCharacter={findCharacter} setCharacter={setCharacter} setRealm={setRealm} character={character} realm={realm} achievements={achievements} setAchievements={setAchievements} />} />
        <Route path='/achievementslist' element={<AchievementList data={data} character={character} achievements={achievements} achievementID={achievementID} setAchievementID={setAchievementID} />} />
        <Route path='/achievementslist/:id' element={<Achievement data={data} character={character} achievements={achievements} achievementID={achievementID} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
