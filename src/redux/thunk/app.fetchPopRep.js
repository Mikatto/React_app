import {
    getReposRequestAction,
    getReposRequestFailureAction,
    getReposRequestSuccessAction
} from "../actions/app.actions"


import { getPopRepRequest } from "../requests/app.requests";

export const getPopRep =(language)=>(dispatch)=>{
    dispatch(getReposRequestAction());
    return getPopRepRequest(language)
    .then(payload=>dispatch(getReposRequestSuccessAction(payload)))
    .catch(error=>dispatch(getReposRequestFailureAction(error)))
}