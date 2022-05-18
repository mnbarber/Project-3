import React, { useState } from 'react';
import Search from './pages/Search';
import './styles/App.css';
import Header from './components/Header';
import AchievementList from './pages/AchievementList';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Achievement from './pages/Achievement';

function App() {
  const [data, setData] = useState({});
  const [character, setCharacter] = useState('');
  const [realm, setRealm] = useState('');
  const [achievements, setAchievements] = useState([]);
  const [acData, setAcData] = useState({});
  const [id, setID] = useState('');

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
        console.log(tokenBearer);
        const searchResponse = await fetch(`https://us.api.blizzard.com/profile/wow/character/${realm}/${character}/achievements?namespace=profile-us&locale=en_US`, {
            headers: {
                Authorization: `Bearer ${tokenBearer}`,
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'GET'
        });
        const apiData = await searchResponse.json();
        console.log(apiData);
        if(apiData) {
            setData(apiData);
        };

        const achievementID = await fetch(`https://us.api.blizzard.com/data/wow/achievement/${id}?namespace=static-us&locale=en_US`, {
          headers: {
            Authorization: `Bearer ${tokenBearer}`,
            'content-type': 'application/x-www-form-urlencoded'
          },
          method: 'GET'
        });
        const acIdData = await achievementID.json();
        if(acIdData) {
          setAcData(acIdData);
        }
    } catch(error) {
        console.log(error);
    };
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Search data={data} findCharacter={findCharacter} setCharacter={setCharacter} setRealm={setRealm} character={character} realm={realm} achievements={achievements} setAchievements={setAchievements} setID={setID} />} />
        <Route path='/achievementslist' element={<AchievementList data={data} character={character} achievements={achievements} id={id} setID={setID} />} />
        <Route path='/achievementslist/:id' element={<Achievement acData={acData} setAcData={setAcData} />} />
      </Routes>
    </div>
  );
}

export default App;
