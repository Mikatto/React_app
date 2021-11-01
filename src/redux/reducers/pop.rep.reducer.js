import {
    GET_REPOS_REQUEST,
    GET_REPOS_REQUEST_SUCCESS,
    GET_REPOS_REQUEST_FAILURE
} from "../constants/app.constants";

const initialState = {
    loading: false,
    poprep: null,
    error: null
}

export const popRepReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REPOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_REPOS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                poprep: action.payload
            }
        case GET_REPOS_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:{
            return state;
        }
    }
}