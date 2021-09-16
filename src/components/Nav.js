import { NavLink } from "react-router-dom"

const Nav = ({ toggle, show = false }) => {
    const handleClick = toggle || (() => {})
    return (
        <nav className={`dropdownMenu ${show ? 'show-nav' : ''}`}>
            <ul>
                <li>
                    <NavLink to="/" onClick={handleClick}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/favs" onClick={handleClick}>Favs</NavLink>

                </li>
                <li>
                    <NavLink to="/about" onClick={handleClick}>About</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;
