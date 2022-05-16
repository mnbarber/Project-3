import React from "react";

const AchievementList = ({ character }) => {
    return (
        <div>
            <h1>{character.name}</h1>
            <div className="achievements-list">
                <h3>Achievements</h3>
                {character.achievements.toLocaleString()}
            </div>
        </div>
    )
}

export default AchievementList;