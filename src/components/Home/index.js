import { Button } from '@mui/material';

const Home = () => {

    return (
        <div className='main_wrapper'>
            <h1>Github Battle: battle your friends and ... stuff</h1>
            <Button variant="contained" href='/battle' className='button'>Battle</Button>
        </div>
    )
}

export default Home;
