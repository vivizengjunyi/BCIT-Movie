import { NavLink } from "react-router-dom"

const Nav = ({toggle}) => {
    return (
        <nav className='dropdownMenu'>
            <ul>
                <li>
                    <NavLink to="/" onClick={toggle}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about"  onClick={toggle}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/favs" onClick={toggle}>Favs</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
