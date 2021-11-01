import {
    APP_CHANGE_TEXT,
    SELECT_LANGUAGE,
    REPOS,
    GET_REPOS_REQUEST,
    GET_REPOS_REQUEST_SUCCESS,
    GET_REPOS_REQUEST_FAILURE
} from "../constants/app.constants";

export const appChangeTextAction = (payload) => ({
    type: APP_CHANGE_TEXT,
    payload
})

export const selectLanguageAction = (payload) => ({
    type: SELECT_LANGUAGE,
    payload
})

export const reposDataAction = (payload) => ({
    type: REPOS,
    payload
})

export const getReposRequestAction = () => ({
    type: GET_REPOS_REQUEST
})

export const getReposRequestSuccessAction = (payload) => ({
    type: GET_REPOS_REQUEST_SUCCESS,
    payload
})

export const getReposRequestFailureAction = (payload) => ({
    type: GET_REPOS_REQUEST_FAILURE,
    payload
})