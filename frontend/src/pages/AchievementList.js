import React from "react";
// import { Link } from "react-router-dom";

function AchievementList(props) {
    console.log(props.data.achievements[0].achievement.name);
    const achievementMap = props.data.achievements.map((oneAchievement, acKey) => (
        (<div key={acKey}>
            {oneAchievement.achievement.name}
        </div>)
    ))
    return (
        <div>
            <h2>{props.data.character.name} of {props.data.character.realm.name}</h2>
            <h4>Achievements</h4>
            {achievementMap}
        </div>
    )
}

export default AchievementList;