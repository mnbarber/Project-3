import React from "react";
// import { Link } from "react-router-dom";

function AchievementList(props) {
    console.log(props.data.achievements);
    // const achievementMap = props.data.achievements.map((oneAchievement, acKey) => {
    //     <div key={acKey}>
    //         {oneAchievement.achievement.name}
    //     </div>
    // })

    const achievementMapDONE = (
        <ul>
            {props.data.achievements.map((oneAchievement, acID) => {
                if(oneAchievement.completed_timestamp) {
                    return (
                        <li key={acID}>
                            {oneAchievement.achievement.name}
                        </li>
                    );
                } else {
                    return;
                };
            })};
        </ul>
    );

    const achievementMapIncomplete = (
        <ul>
            {props.data.achievements.map((noAchievement, naID) => {
                if(!noAchievement.completed_timestamp) {
                    return (
                        <li key={naID}>
                            {noAchievement.achievement.name}
                        </li>
                    );
                } else {
                    return;
                };
            })};
        </ul>
    );

    return (
        <div>
            <h2>{props.data.character.name} of {props.data.character.realm.name}</h2>
            <h4>Completed Achievements</h4>
            {achievementMapDONE}
            <hr></hr>
            <h4>Incomplete Achievements</h4>
            {achievementMapIncomplete}
        </div>
    )
}

export default AchievementList;