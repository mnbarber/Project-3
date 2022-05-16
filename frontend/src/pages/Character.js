import React from "react";
import AchievementList from "./AchievementList";

const Character = ({ character, error }) => {
    return character ? (
        <AchievementList character={character} />
    ) : error ? (
        <h2>Error! Unlucky. {error}</h2>
    ) : null;
};

export default Character;