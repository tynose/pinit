import { LOGIN_USER, HOME_TOGGLE } from './types';

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
				type: LOGIN_USER,
				payload: true
			});
		})
		.catch(err => {
			throw new Error(err);
		});
};

export const homeToggle = toggle => dispatch => {
	dispatch({
		type: HOME_TOGGLE,
		payload: toggle
	});
};
