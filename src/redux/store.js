import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {appReducer} from "./reducers/app.reducer";
import { languageReducer } from './reducers/language.reducer';
import { repoReducer } from './reducers/repo.reducer';
import thunk from 'redux-thunk';
import { popRepReducer } from './reducers/pop.rep.reducer';


const logger = createLogger({
    collapsed: true
});

const store = createStore(
    combineReducers({
        appReducer,
        languageReducer,
        repoReducer,
        popRepReducer
    }),
    applyMiddleware(thunk, logger)
);

export default store;