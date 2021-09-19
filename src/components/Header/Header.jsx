import { NavLink } from 'react-router-dom';
import logo from '../../images/telegram.svg'
import './header.css';

function Header(props) {
  const navLinks = ['Dashboard', 'Users', 'Albums','Posts'];
    return (
      <div className='header'>
        <img className='logo' src={logo} alt="logo"/>
        <ul className='header_menu'>
        {navLinks.map((navLink, index) => (
                    <li className='header_menu' key={index}>
                        <NavLink exact to={navLink === 'Dashboard' ? '/' : navLink.toLowerCase()}className='header_menu__item' activeClassName='header_menu__item_active'>{navLink}</NavLink>
                    </li>
                )
            )}
        </ul>
      </div>
    )
}

export default Header;