import { LOGIN_USER, ISLOGGED_IN } from '../actions/types';

const initialState = {
	isLoggedIn: localStorage.getItem('token' && 'log') === null ? false : true
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case LOGIN_USER:
			return {
				...state,
				isLoggedIn: true
			};
		case ISLOGGED_IN:
			return {
				...state,
				isLoggedIn: true
			};
		default:
			return state;
	}
};
