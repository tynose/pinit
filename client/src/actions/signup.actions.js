import { SIGNUP_USER } from './types';

export const signUpUser = (signUpData, formReset, setErrors) => dispatch => {
	fetch('/localauth/signup', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(signUpData)
	})
		.then(resp => resp.json())
		.then(user => {
			dispatch({
				type: SIGNUP_USER,
				payload: user
			});
			if (user.errors) {
				setErrors({
					[Object.keys(user.fields)]: `A user with that ${[
						Object.keys(user.fields)
					]} already exists`
				});
			} else {
				formReset();
			}
		})
		.catch(err => {
			throw new Error(err);
		});
};
