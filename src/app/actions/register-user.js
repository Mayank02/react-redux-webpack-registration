import 'whatwg-fetch';
import constants from '../utils/constant';
import * as types from '../utils/action-types';
const headers = new Headers({ 'Content-Type': 'application/json' });

export function registerUser(user, form) {
    return (dispatch) => {
        // I have used mock json from api folder so I am using GET method instead POST, so I have commented post data line.
        fetch(`${process.env.API_URL}/register.json`, {
            method: 'GET',
            headers,
            // body: JSON.stringify(user),
        }).then(response => response.json()).then((res) => {
            const data = res.data;
            if(data.id) {
                form.reset();
                dispatch({ type: types.SET_REGISTERED_USER, payload: data });
            } else{
                let message;
                const errorDetails = data.error.details;

                if(errorDetails && errorDetails.messages && errorDetails.messages.email) {
                    message = constants.EMAIL_EXIST;
                } else{
                    message = constants.ERROR_OCCUR;
                }

                dispatch({ type: types.SET_VALIDATE_MESSAGE, payload: { message } });
            }
        });
    };
}
