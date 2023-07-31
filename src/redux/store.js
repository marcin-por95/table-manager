import {applyMiddleware, compose, legacy_createStore as createStore} from 'redux';
import { combineReducers } from 'redux';
import tablesReducer from './tablesReducer';
import thunk from 'redux-thunk';
import loadingReducer from "./loadingRedux";
import initialState from "./initialState";


const subreducers = {
  tables: tablesReducer,
    loading: loadingReducer
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);
export default store;
