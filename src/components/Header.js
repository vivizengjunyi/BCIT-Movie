
import { NavLink, useLocation } from 'react-router-dom';
import Slider from './Slider';
import Nav from './Nav';
import { title } from '../globals/globalVariables';
//import Membership from './Membership'
import { FaUserAlt } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscError } from 'react-icons/vsc';
import { useState } from 'react';



const Header = () => {
    const location = useLocation();
    const [burgerMenuShow, setBurgerMenuShow] = useState(true);

    const toggle = () => {
        if (burgerMenuShow === true) {
            setBurgerMenuShow(false);
        } else {
            setBurgerMenuShow(true);
        }
    }

    return (
        <header>
            {
                (location.pathname === '/' ||  location.pathname.indexOf('/sort/') > -1) && <Slider />
            }
            <div class='flex-column'>
                <div className='flex-row'>
                    <p>
                        <NavLink to="/">{title}</NavLink>
                    </p>
                    {burgerMenuShow === true ? (
                        <div className='little-gap'>
                            <GiHamburgerMenu className='burgerMenuIcon' onClick={toggle} />
                            <FaUserAlt className='userIcon' />
                        </div>
                    ) : <VscError class='closeMenuIcon' onClick={toggle} />
                    }
                </div>
                {burgerMenuShow === false && <Nav toggle={toggle} />}
            </div>
        </header>
    )
}

export default Header
