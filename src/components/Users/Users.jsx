import { useEffect, useState } from 'react';
import './users.css';
import User from './User/User';

function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {setUsers(result)}
      )
  });

  let usersList = users.map(item => <User id={item.id}
    name={item.name}
    username={item.username}
    email={item.email}
    street={item.address.street}
    suite={item.address.suite}
    city={item.address.city}
    zipcode={item.address.zipcode}
    lat={item.address.geo.lat}
    lng={item.address.geo.lng}
    phone={item.phone}
    website={item.website}
    companyName={item.company.name}
    catchPhrase={item.company.catchPhrase}
    bs={item.company.bs}/>)

    let usersQuantity = users.length;

  return (
    <div className='main_wrapper'>
      <div className='subheader'><h1>Users</h1>{usersQuantity}</div>
      <div className='main_list'>{usersList}</div>
    </div>
    
  )
}

export default Users;