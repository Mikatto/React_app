import { useEffect, useState } from 'react';
import './albums.css';
import Album from './Album/Album';

function Albums(props) {

  const [albums, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(
        (result) => {setUsers(result)}
      )
  });

  let albumsList = albums.map(item => <Album id={item.id} userId={item.userId} title={item.title}/>)

    let albumsQuantity = albums.length;
  
  return (
    <div className='main_wrapper'>
      <div className='subheader'><h1>Albums</h1>{albumsQuantity}</div>
      <div className='album_list'>{albumsList}</div>
    </div>
    
  )
}

export default Albums;