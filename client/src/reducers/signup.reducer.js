import { SIGNUP_USER } from '../actions/types';

const initialState = {
	response: {}
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SIGNUP_USER:
			return {
				...state,
				response: payload
			};
		default:
			return state;
	}
};
