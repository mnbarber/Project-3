import { Link } from 'react-router-dom';

function Header(props) {    
    return (
        <header>
            <h1>Been There, Done That!</h1>
            <nav className='navbar'>
                <Link to='/'>
                    <div>Search</div>
                </Link>
            </nav>
        </header>
    );
};

export default Header;