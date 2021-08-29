import React from 'react';
import './single_post.css';

export class SinglePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: false,
      value: this.props.itemTitle
    };
    this.showInput = this.showInput.bind(this);
    this.showTitle = this.showTitle.bind(this);
    this.titleDataChange = this.titleDataChange.bind(this);
  }

  titleDataChange(inputValue) {
    this.props.edit(this.props.itemId, inputValue);
    this.setState({ input: false })
  }

  showInput() {
    return (
      <div className='post_header'>
        <input onChange={e => this.setState({ value: e.target.value })} value={this.state.value} className='input' />
        <div className='post_buttons'>
          <button onClick={() => this.titleDataChange(this.state.value)} className='regular_button'>Save</button>
        </div>
      </div>
    )
  }

  showTitle() {
    let data = this.props
    return (
      <div className='post_header'>
        <div className='post_title'>{data.itemTitle}</div>
        <div className='post_buttons'>
          <button onClick={() => this.setState({ input: true })} className='regular_button'>Edit</button>
          <button onClick={() => data.delete(data.itemId)} className='regular_button button_remove'>Delete</button>
        </div>
      </div>
    )
  }

  render() {
    let data = this.props
    return (
      <div className='post_wrapper'>
        {this.state.input === false ? this.showTitle() : this.showInput()}
        <div className='post_body'>{data.itemBody}</div>
      </div>
    )
  }
}

export default SinglePost