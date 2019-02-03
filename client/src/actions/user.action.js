import { FETCH_USER } from './types';

export const fetchUser = () => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(resp => resp.json())
		.then(user =>
			dispatch({
				type: FETCH_USER,
				payload: user
			})
		);
};
