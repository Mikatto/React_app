import {Component} from "react";

import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import { Box } from '@mui/system';
import { Button } from '@mui/material';

class Battle extends Component {
    state = {
        playerOneName: '',
        playerTwoName: '',
        playerOneImage: null,
        playerTwoImage: null
    }


    submitHandler = (id, username) => {
        this.setState({
            [id + 'Name']: username,
            [id + 'Image']: 'https://github.com/' + username + '.png?size=200',
        })
    }

    handleReset = (id) => {
        this.setState({
            [id + 'Name']: '',
            [id + 'Image']: null,
        })
    }

    render() {
        const {playerOneName, playerTwoName, playerOneImage, playerTwoImage} = this.state;
        return (
            <div className='main_wrapper'>
                <Box sx={{ display: 'grid', gridTemplateColumns: '340px 340px',gap: 3 }}>
                    {!playerOneName ?
                        <PlayerInput id='playerOne' label='Player One' onSubmit={this.submitHandler}/> :
                        <PlayerPreview  avatar={playerOneImage} username={playerOneName}>
                            <Button variant="outlined" color="error" sx={{ width:'100%' }} onClick={() => this.handleReset('playerOne')}>Reset</Button>
                        </PlayerPreview>
                    }
                    {!playerTwoName ?
                        <PlayerInput id='playerTwo' label='Player Two' onSubmit={this.submitHandler}/> :
                        <PlayerPreview avatar={playerTwoImage} username={playerTwoName}>
                            <Button variant="outlined" color="error" sx={{ width:'100%' }} onClick={() => this.handleReset('playerTwo')}>Reset</Button>
                        </PlayerPreview>
                    }
                </Box>
                {playerOneImage && playerTwoImage &&
                <Button variant="contained" href='/battle/results' className='button' sx={{ width:'400px',height:'56px' }}>Battle Results</Button>
                }
            </div>
        )
    }
}

export default Battle;
