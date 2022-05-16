import React, { useState, useContext } from "react";
import { AppContext } from "./context-provider";

function Search() {
    const { setCharacterData, setError } = useContext(AppContext);
    const [character, setCharacter] = useState('');
    const [realm, setRealm] = useState('');
    const disabled = character === '' || realm === '';

    const findCharacter = async () => {
        try {
            const getToken = await fetch('https://us.battle.net/oauth/token', {
                body: 'grant_type=client_credentials',
                headers: {
                    Authorization: 'client_id= 7fbaae7a1acc4c49a56c6bbabd0507eb' &&
                    'client_secret= Phs4DdNvfjv7vz5eLlb1CpQlkPojjjjZ'
                },
                method: 'POST'
            });
            const tokenData = await getToken.json();
            const tokenBearer = tokenData.access_token;
            const searchResponse = await fetch(`https://us.api.blizzard.com/profile/wow/character/${realm}/${character}/achievements?namespace=profile-us&locale=en_US`, {
                headers: {
                    Authorization: `Bearer ${tokenBearer}`,
                    'content-type': 'application/x-www-form-urlencoded'
                },
                method: 'GET'
            });
            const data = await searchResponse.json();
            if(data.name) {
                setCharacterData(data);
            }
            if(data.reason) {
                setError(data.reason)
            }
        } catch(error) {
            console.log(error);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        // setCharacterData(null);
        setCharacter('');
        setRealm('');
        findCharacter();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={character}
                onChange={e => setCharacter(e.target.value)}
                placeholder="Character Name(all lowercase!)"
            />
            <input
                type="text"
                value={realm}
                onChange={e => setRealm(e.target.value)}
                placeholder="Realm Name(all lowercase, no special characters!)"
            />
            <input
                className="search"
                type="submit"
                disabled={disabled}
                value="Search"
            />
        </form>
    );
};

export default Search;