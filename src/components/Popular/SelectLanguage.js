import {memo} from "react";
import { useSelector,useDispatch } from 'react-redux';
import { selectLanguageAction } from "../../redux/actions/app.actions";
import { reposDataAction } from "../../redux/actions/app.actions";
import { getPopRep } from '../../redux/thunk/app.fetchPopRep';
import { SlItem, SlList } from './RepoGrid.style';

const SelectLanguage = memo(() => {

    const {selectedLanguage} = useSelector(state=>state.languageReducer);
    const dispatch= useDispatch();
    const changeLanguage=(e)=>{
            dispatch(selectLanguageAction(e));
            dispatch(reposDataAction(null));
            dispatch(getPopRep(e))
    }

    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        <SlList>
            {languages.map((i, index) =>
                <SlItem
                    key={index}
                    isSelectedLanguage={i===selectedLanguage}
                    onClick={(e)=>changeLanguage(e.target.innerText)}>
                    {i}
                </SlItem>)}
        </SlList>
    )
})

export default SelectLanguage;
