import { NavLink } from 'react-router-dom';
import './dashboard.css';

function Dashboard(props) {
  return (
    <div className='main_wrapper'>
       <div className='subheader'><h1>Dashboard</h1></div>
      <div className="dashboard_nav">
        <NavLink exact to='users' className='dashboard_nav__item' activeClassName=''>Users</NavLink>
        <NavLink exact to='albums' className='dashboard_nav__item' activeClassName=''>Albums</NavLink>
        <NavLink exact to='posts' className='dashboard_nav__item' activeClassName=''>Posts</NavLink>
      </div>
    </div>
    
  )
}

export default Dashboard;