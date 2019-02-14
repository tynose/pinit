import { ADD_LINK, DELETE_LINK } from '../actions/types';

const initialState = {};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_LINK:
			return {
				...state,
				payload
			};
		case DELETE_LINK:
			return {
				...state,
				payload
			};
		default:
			return state;
	}
};
