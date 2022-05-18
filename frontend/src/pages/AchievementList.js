import React, { useState, useParams } from "react";
import { Link } from "react-router-dom";

function AchievementList(props) {

    const achievementMapDONE = (
        <ul>
            {props.data.achievements.map((oneAchievement, acID) => {
                const id = oneAchievement.id
                if(oneAchievement.completed_timestamp) {
                    return (
                        <Link onClick={() => handleClick(id)} to={`/achievementslist/${id}`} key={acID} >
                            <li key={acID}>
                            {oneAchievement.achievement.name}
                            </li>
                        </Link>
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
                const id = noAchievement.id
                if(!noAchievement.completed_timestamp) {
                    return (
                        <Link onClick={() => handleClick(id)} to={`/achievementslist/${id}`} >
                            <li key={naID}>
                            {noAchievement.achievement.name}
                            </li>
                        </Link>
                    );
                } else {
                    return;
                };
            })};
        </ul>
    );

    function handleClick(achievementID) {
        props.setAchievementID(achievementID)
    }

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