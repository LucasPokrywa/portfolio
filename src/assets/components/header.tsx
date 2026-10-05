import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <header className="site-header">
            <nav className="header-nav" aria-label="Navigation principale">
                <ul>
                    <li><NavLink to="/" end>Accueil</NavLink></li>
                    <li><NavLink to="/parcours">Parcours</NavLink></li>
                    <li><NavLink to="/projects">Projets</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
