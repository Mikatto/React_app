
import {NavItem, NavWrapper} from './Nav.styles';


const Nav = () => {
    const navLinks = ['Home', 'Popular', 'Battle'];

    return (
        <NavWrapper>
            {navLinks.map((navLink, index) => (
                        <NavItem exact to={navLink === 'Home' ? '/' : navLink.toLowerCase()} key={index}>{navLink}</NavItem>
                )
            )}
        </NavWrapper>
    )
}

export default Nav;
