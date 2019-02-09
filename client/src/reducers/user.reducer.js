import { FETCH_USER } from '../actions/types';

const initialState = {
	user: {}
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_USER:
			return {
				...state,
				user: payload
			};
		default:
			return state;
	}
};
