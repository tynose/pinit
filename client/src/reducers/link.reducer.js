import { ADD_LINK, GET_LINK } from '../actions/types';

const initialState = {};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_LINK:
			return {
				...state
			};
		case GET_LINK:
			return {
				...state
			};
		default:
			return state;
	}
};
