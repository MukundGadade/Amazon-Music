import { NavLink } from "react-router-dom"
import { Logo } from "./Logo"
import { Searchbar } from "./Searchbar"
import { Profile } from "./Profile"
import {ReactComponent as HomeIcon} from '../../assets/HomeIcon.svg';
import {ReactComponent as PodcastIcon} from '../../assets/PodcastIcon.svg';
import {ReactComponent as HeadphoneIcon} from '../../assets/HeadphoneIcon.svg';

export const Navbar = () => {

    return (

        <nav className="navbar">

            <NavLink to={'/'}><Logo /></NavLink>

            <ul className="nav-links">
                <li className="link-item">
                    <NavLink to={'/'}><HomeIcon />&nbsp;HOME</NavLink>
                </li>
                <li className="link-item">
                    <NavLink to={'/podcasts'}><PodcastIcon />&nbsp;PODCASTS</NavLink>
                </li>
                <li className="link-item">
                    <NavLink to={'/library'}><HeadphoneIcon />&nbsp;LIBRARY</NavLink>
                </li>
            </ul>

            <section className="search-profile-container">
                <Searchbar />
                <Profile />
            </section>
            
        </nav>
        
    )

}