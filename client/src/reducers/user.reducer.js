import { FETCH_USER, FETCH_USER_ID } from '../actions/types';

const initialState = {
	user: {},
	profile: {}
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_USER:
			return {
				...state,
				user: payload
			};
		case FETCH_USER_ID:
			return {
				...state,
				profile: payload
			};
		default:
			return state;
	}
};
