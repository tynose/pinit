import { LOGIN_USER } from '../actions/types';

const initialState = {
	isLoggedIn: localStorage.getItem('token') === null ? false : true
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case LOGIN_USER:
			return {
				...state,
				isLoggedIn: payload
			};
		default:
			return state;
	}
};
