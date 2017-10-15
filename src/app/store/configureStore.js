import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers';
import ReduxThunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(ReduxThunk)
        )
    );
}
