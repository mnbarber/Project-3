import React, { useState } from "react";
// import { useParams } from 'react-router-dom';

function Achievement(props) {
    const [achievementData, setAchievementData] = useState({});
    const achievementID = props.data.achievements.id;
    console.log(achievementData);

    

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
            const getAchievement = await fetch(`https://us.api.blizzard.com/data/wow/achievement/${achievementID}?namespace=static-us&locale=en_US`, {
                headers: {
                    Authorization: `Bearer ${tokenBearer}`,
                    'content-type': 'application/x-www-form-urlencoded'
                },
                method: 'GET'
            });
            const acData = await getAchievement.json();
            console.log(acData)
            if(acData) {
                setAchievementData(acData);
            }
        } catch(error) {
            console.log(error);
        }
    }
    if(achievementID) {
        getAchievementInfo();
    }

    return (
        <div>
            <h2>{achievementData.name}</h2>
            <hr></hr>
            <ul>
                <li>{achievementData.description}</li>
                {/* <li><img src={achievementData.media.key.href} alt='achievement' /></li> */}
            </ul>
        </div>
    );
};

export default Achievement;