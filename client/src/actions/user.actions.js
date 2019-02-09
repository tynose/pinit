import { FETCH_USER } from './types';

export const fetchUser = () => dispatch => {
	fetch('/user/me', {
		method: 'GET',
		headers: {
			authorization: `Bearer ${localStorage.getItem('token')}`
		}
	})
		.then(resp => resp.json())
		.then(user => {
			dispatch({
				type: FETCH_USER,
				payload: user
			});
		})
		.catch(err => {
			throw new Error(err);
		});
};
