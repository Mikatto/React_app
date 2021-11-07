
import { Avatar } from '@mui/material';
import { Box } from '@mui/system';

const PlayerPreview = (props) => {
    return (
        <Box sx={{ display: 'grid',gridTemplateRows: '1fr min-content 56px',gap:2, justifyItems:'center'}}>
                <Avatar  src={props.avatar} alt="avatar" width='42px' sx={{width:'200px', height:'200px',borderRadius:'12px'}}/>
                <Box sx={{fontWeight: 500, textAlign:'center'}}>@{props.username}</Box>
            {props.children}
        </Box>
    )
}

export default PlayerPreview;



