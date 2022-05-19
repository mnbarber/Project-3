import React from "react";
import { Link } from 'react-router-dom';
import '../styles/main.css'

function Search(props) {
    const disabled = props.character === '' || props.realm === '';

    const handleSubmit = e => {
        e.preventDefault();
        props.setCharacter('');
        props.setRealm('');
        props.findCharacter();
    }

    return (
        <div>
            <form className="searchform" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={props.character}
                    onChange={e => props.setCharacter(e.target.value)}
                    placeholder="Character Name(all lowercase!)"
                />
                <input
                    type="text"
                    value={props.realm}
                    onChange={e => props.setRealm(e.target.value)}
                    placeholder="Realm Name(all lowercase, no special characters!)"
                />
                <input
                    className="search"
                    type="submit"
                    disabled={disabled}
                    value="Search"
                />
            </form>
            <Link to='/achievementslist'>
                <div className="character-display">
                    {props.data?.character?.name} {props.data?.total_quantity}
                </div>
            </Link>
        </div>
    );
};

export default Search;