import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../utils/action-types';

const registration = (state = {}, action) => {
    switch (action.type) {
        case types.SET_REGISTERED_USER:
            return {
                ...state,
                validationError: null,
                registeredUser: action.payload
            };
        case types.SET_VALIDATE_MESSAGE:
            return {
                ...state,
                userDetails: null,
                validationError: action.payload
            };
        case types.RESET_VALIDATE_MESSAGE:
            return {
                ...state,
                userDetails: null,
                validationError: null
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    registration,
    routing
});

export default rootReducer;
