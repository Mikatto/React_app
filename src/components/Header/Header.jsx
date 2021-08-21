import React from 'react';
import logo from '../../images/telegram.svg'
import './header.css';

class Header extends React.Component {

  render() {
    let data = this.props.Items
    let menuItems = data.map(itms => (
      <a className='header_menu__item' key={itms.id} href={itms.link} alt={itms.name}>{itms.name}</a>
    ))

    return (
      <div className='header'>
        <img className='logo' src={logo} alt="logo"/>
        <div className='header_menu'>
          {menuItems}
        </div>
      </div>
    )
  }
}

export default Header;