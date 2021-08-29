import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer';
import Posts from './components/Posts/Posts.jsx';

class App extends React.Component{
  render(){

    const menuItems =[
        {
          id: '1',
          link: 'itm-one',
          name: 'First Item'
        },
        {
          id: '2',
          link: 'itm-two',
          name: 'Second Item'
        },
        {
          id: '3',
          link: 'itm-three',
          name: 'Third Item'
        },
        {
          id: '4',
          link: 'itm-four',
          name: 'Fourth Item'
        },
      ];

    return(
      <div className='wrapper'>
        <Header Items={menuItems}/>
        <Posts/>
        <Footer/>
      </div>
    )
  }
}

export default App;
