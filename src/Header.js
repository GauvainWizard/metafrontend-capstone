import logo from './logo.svg';
import Nav from './Nav';

function Header() {
    return (
        <header>
            <a href="https://www.qries.com/">
                <img src={logo} alt="Little Lemon logo" />
            </a>
            <Nav />
        </header>
    );
}

export default Header;
