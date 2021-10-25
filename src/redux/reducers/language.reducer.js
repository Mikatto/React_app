import {SELECT_LANGUAGE} from "../constants/app.constants";

const initialState = {
    selectedLanguage: 'All'
}

export const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_LANGUAGE:
            return {
                ...state,
                selectedLanguage: action.payload
            }
            default:
                return state;
    }
}