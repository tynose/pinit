import { FETCH_USER, FETCH_USER_ID } from './types';

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

export const fetchUserId = id => dispatch => {
	fetch(`/user/${id}`)
		.then(resp => resp.json())
		.then(user => {
			dispatch({
				type: FETCH_USER_ID,
				payload: user
			});
		})
		.catch(err => {
			throw new Error(err);
		});
};
