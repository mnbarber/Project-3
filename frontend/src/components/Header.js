import { Link } from 'react-router-dom';

function Header(props) {    
    return (
        <header>
            <h1>Been There, Done That!</h1>
            <nav className='navbar'>
                <Link to='/profile'>
                    <div>Profile</div>
                </Link>
                <Link to='/search'>
                    <div>Search</div>
                </Link>
                <Link to='/listing'>
                    <div>All Achievements</div>
                </Link>
            </nav>
        </header>
    );
};

export default Header;