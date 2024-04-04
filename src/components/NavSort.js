import { useState } from "react";
import { NavLink } from "react-router-dom";
const tabs = [
    {
        text: 'Popular',
        categoryId: 'popular'
    }, {
        text: 'Top Rated',
        categoryId: 'top_rated'
    }, {
        text: 'Now Playing',
        categoryId: 'now_playing'
    }, {
        text: 'Upcoming',
        categoryId: 'upcoming'
    }
];



const backgrounds = {
    popular : 'background1',
    top_rated : 'background2',
    now_playing : 'background3',
    upcoming : 'background4',
};
const NavSort = ({ categoryId = 'popular' }) => {

    return (
        <div class='place-background'>
            <nav className='navSort'>
                <ul>
                    {
                        tabs.map(tab => (
                            <li>
                                <NavLink to={'/sort/' + tab.categoryId}>{tab.text}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <div className={backgrounds[categoryId]}></div>
        </div>
    )
}

export default NavSort
