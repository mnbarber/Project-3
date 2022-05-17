import React from "react";
// import { Link } from "react-router-dom";

function AchievementList(props) {
    console.log(props.data.achievements);
    // const achievementMap = props.data.achievements.map((oneAchievement, acKey) => {
    //     <div key={acKey}>
    //         {oneAchievement.achievement.name}
    //     </div>
    // })

    const achievementMap = (
        <ul>
            {props.data.achievements.map((oneAchievement, acID) => {
                if(oneAchievement.completed_timestamp) {
                    return (
                        <li key={acID}>
                            <p>{oneAchievement.achievement.name}</p>
                        </li>
                    );
                } else {
                    return;
                }
            })}
        </ul>
    )

    return (
        <div>
            <h2>{props.data.character.name} of {props.data.character.realm.name}</h2>
            <h4>Achievements</h4>
            {achievementMap}
        </div>
    )
}

export default AchievementList;