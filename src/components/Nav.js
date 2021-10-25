import {NavLink} from "react-router-dom";

const Nav = () => {
    const navLinks = ['Home', 'Popular', 'Battle'];

    return (
        <ul className='nav'>
            {navLinks.map((navLink, index) => (
                    <li key={index}>
                        <NavLink exact to={navLink === 'Home' ? '/' : navLink.toLowerCase()}>{navLink}</NavLink>
                    </li>
                )
            )}
        </ul>
    )
}

export default Nav;
