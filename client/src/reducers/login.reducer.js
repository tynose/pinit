import { LOGIN_USER, HOME_TOGGLE } from '../actions/types';

const initialState = {
	isLoggedIn: false,
	login: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case LOGIN_USER:
			return {
				...state,
				isLoggedIn: payload
			};
		case HOME_TOGGLE:
			return {
				...state,
				login: !payload
			};
		default:
			return state;
	}
};
