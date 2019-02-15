import { HOME_TOGGLE, ISLOGGED_IN } from './types';

export const loginUser = signUpData => dispatch => {
	fetch('/localauth/login', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(signUpData)
	})
		.then(resp => resp.json())
		.then(user => {
			localStorage.setItem('token', user.token);
			dispatch({
				type: ISLOGGED_IN,
				payload: true
			});
		})
		.catch(err => {
			throw new Error(err);
		});
};

export const isLoggedIn = () => dispatch => {
	dispatch({
		type: ISLOGGED_IN,
		payload: true
	});
};

export const homeToggle = toggle => dispatch => {
	dispatch({
		type: HOME_TOGGLE,
		payload: toggle
	});
};
