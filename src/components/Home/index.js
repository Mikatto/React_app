import {Link} from "react-router-dom";
import {appChangeTextAction} from "../../redux/actions/app.actions";
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    const {text} = useSelector(state => state.appReducer);
    
    const changeText = () => {
        dispatch(appChangeTextAction('Goodbye'));
    }
    
    return (
        <div className='home-container'>
            <h1>Github Battle: battle your friends and ... stuff</h1>
            <p>{text}</p>
            <button className='button' onClick={changeText}>Change</button>
            <Link to='/battle' className='button'>Battle</Link>
        </div>
    )
}

export default Home;
