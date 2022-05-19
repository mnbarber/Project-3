import React, { useEffect, useState } from "react";
import '../styles/main.css'

function Achievement(props) {
    const [acData, setAcData] = useState({});

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
            const getAchievement = await fetch(`https://us.api.blizzard.com/data/wow/achievement/${props.achievementID}?namespace=static-us&locale=en_US`, {
                headers: {
                    Authorization: `Bearer ${tokenBearer}`,
                    'content-type': 'application/x-www-form-urlencoded'
                },
                method: 'GET'
            });
            const apiData = await getAchievement.json();
            console.log(apiData)
            if(apiData) {
                setAcData(apiData);
            }
        } catch(error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if(props.achievementID) {
            getAchievementInfo();
        }
    }, [props.achievementID])
    

    return (
        <div>
            <h2>{acData.name}</h2>
            <hr></hr>
            <ul>
                <li>{acData.description}</li>
                </ul>
        </div>
    );
};

export default Achievement;