import {APP_CHANGE_TEXT,SELECT_LANGUAGE, REPOS} from "../constants/app.constants";

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