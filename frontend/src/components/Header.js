import { Link } from 'react-router-dom';
import '../styles/main.css'

function Header(props) {    
    return (
        <header className='header'>
            <Link to='/'><img src="https://i.imgur.com/p674QKP.png" title="source: imgur.com" /></Link>
            <nav className='navbar'>
                <Link to='/search'>
                    <div>Search</div>
                </Link>
                <a href='https://www.wowhead.com/'>Wowhead</a>
            <form className='whsearchbar' action='https://www.wowhead.com/search'>
                <a href="#"></a>
                <input type='text' name='q' />
            </form>
            </nav>
        </header>
    );
};

export default Header;