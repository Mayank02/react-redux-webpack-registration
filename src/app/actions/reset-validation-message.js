import * as types from '../utils/action-types';

export function resetValidationMessage() {
    return (dispatch) => {
        dispatch({ type: types.RESET_VALIDATE_MESSAGE });
    };
}
