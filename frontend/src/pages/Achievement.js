import React, { useState } from "react";
// import { useParams } from 'react-router-dom';

function Achievement(props) {
    const [achievementData, setAchievementData] = useState({});

    const getAchievementInfo = async () => {
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
        const getAchievement = await fetch(`https://us.api.blizzard.com/data/wow/achievement/${id}?namespace=static-us&locale=en_US`, {
          headers: {
            Authorization: `Bearer ${tokenBearer}`,
            'content-type': 'application/x-www-form-urlencoded'
          },
          method: 'GET'
        });
        }
    }
    return (
        <div>
            <h2>no</h2>
        </div>
    );
};

export default Achievement;