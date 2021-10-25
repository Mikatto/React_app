import {REPOS} from "../constants/app.constants";

const initialState = {
    repos: null
}

export const repoReducer = (state = initialState, action) => {
    switch (action.type) {
        case REPOS:
            return {
                ...state,
                repos: action.payload
            }
            default:
                return state;
    }
}