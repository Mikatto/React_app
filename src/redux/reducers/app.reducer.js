import {APP_CHANGE_TEXT} from "../constants/app.constants";

const initialState = {
    text: 'Hello'
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case APP_CHANGE_TEXT:
            return {
                ...state,
                text: action.payload
            }

            default:
                return state;
    }
}