import {memo} from "react";
import { useSelector,useDispatch } from 'react-redux';
import { selectLanguageAction } from "../../redux/actions/app.actions";
import { reposDataAction } from "../../redux/actions/app.actions";
import {fetchPopularRepos} from "../../api/fetchPopularRepos";

const SelectLanguage = memo(() => {

    const {selectedLanguage} = useSelector(state=>state.languageReducer);
    const dispatch= useDispatch();
    const changeLanguage=(e)=>{
            dispatch(selectLanguageAction(e));
            dispatch(reposDataAction(null));
            fetchPopularRepos(e)
            .then(data => dispatch(reposDataAction(data)));
    }

    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        <ul className='languages'>
            {languages.map((i, index) =>
            
                <li
                    key={index}
                    style={{color: i === selectedLanguage ? '#d0021b' : '#000000'}}
                    onClick={(e)=>changeLanguage(e.target.innerText)}>
                    {i}
                </li>)}
        </ul>
    )
})

export default SelectLanguage;
