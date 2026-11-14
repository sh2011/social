import {createStore, combineReducers} from 'redux';
import ProfileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import NavbarReducer from './navbarReducer';

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: dialogReducer,
    navbar: NavbarReducer
});
let store = createStore(reducers);

export default store;