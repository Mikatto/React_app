import {Component} from "react";
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';

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
            <form  onSubmit={this.handleSubmit}>
                <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', gap: 1}}>
                    <TextField
                    sx={{ width:'100%'}}
                        label={this.props.label}
                        type="text"
                        id='username'
                        placeholder='GitHub UserName'
                        value={this.state.username}
                        onChange={this.handleUserNameField}
                        autoComplete='off'
                    />
                    <Button variant="contained" color="success" type='submit' disabled={!this.state.username}>Submit</Button>
                </Box>
            </form>
        )
    }
}

export default PlayerInput;
