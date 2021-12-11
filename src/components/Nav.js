import { NavLink, useHistory } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { useRef, useState } from "react";

const Nav = ({ toggle, show = false }) => {
    const [showSearch, setShowSearch] = useState(false)
    const [searchKey, setSearchKey] = useState('')
    const refInput = useRef(null)
    const history = useHistory();
    const handleClick = toggle || (() => { })
    const search = () => {
        if (!showSearch) {
            setShowSearch(true);
            setTimeout(() => refInput.current.focus())
        } else {
            if (searchKey.trim() === '') {
                setShowSearch(false);
            } else {
                history.push("/gomovie/search?query=" + searchKey);
            }
        }
    }
    return (
        <nav className={`dropdownMenu ${show ? 'show-nav' : ''}`}>
            <ul>
                <li>
                    <NavLink to="/gomovie/" onClick={handleClick}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/gomovie/favs" onClick={handleClick}>Favs</NavLink>

                </li>
                <li>
                    <NavLink to="/gomovie/about" onClick={handleClick}>About</NavLink>
                </li>

                <li className="search">
                    {
                        showSearch && 
                            <input 
                                type="text" 
                                ref={refInput} 
                                onChange={e => setSearchKey(e.target.value)} 
                                onKeyDown={e => e.key === 'Enter' && search()}
                                />
                    }
                    <FaSearch className='search-icon' onClick={search} />
                </li>

            </ul>
        </nav>
    )
}
export default Nav;
