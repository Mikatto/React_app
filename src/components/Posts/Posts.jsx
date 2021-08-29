import React from 'react';
import './posts.css';
import SinglePost from './Single_post/SinglePost.jsx';

class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.deletingItem = this.deletingItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        (result) => {this.setState({
          items: result
        });
        }
      )
  }

  editItem(id,value){
    const newState = this.state.items.map(item=>item.id === id ? {...item,title:value} :item )
    this.setState({
      items : newState
    })
  }

  deletingItem(id){
    const updState = this.state.items.filter(item=>item.id!==id)
    this.setState({
      items : updState
    })
  }

  render() {

    const {items} = this.state;
    let PostsElements = items.map(item => <SinglePost itemTitle={item.title} itemBody={item.body} itemId={item.id} delete={this.deletingItem} edit={this.editItem} key={item.id}/>)
    return (
      <div className='posts_wrapper'>
        {PostsElements}
      </div>
    )
  }
}

export default Posts;

