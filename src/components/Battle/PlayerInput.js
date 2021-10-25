import {Component} from "react";

class PlayerInput extends Component {
    state = {
        username: ''
    }

    handleUserNameField = (event) => {
        this.setState({username: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.props.id, this.state.username)
    }

    render() {
        return (
            <form className='column' onSubmit={this.handleSubmit}>
                <label className='header' htmlFor="username">{this.props.label}</label>
                <input
                    type="text"
                    id='username'
                    placeholder='GitHub UserName'
                    value={this.state.username}
                    onChange={this.handleUserNameField}
                    autoComplete='off'
                />
                <button className='button' type='submit' disabled={!this.state.username}>Submit</button>
            </form>
        )
    }
}

export default PlayerInput;
