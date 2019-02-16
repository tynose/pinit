import {
	FETCH_USER,
	FETCH_USER_ID,
	FETCH_USER_PHOTOS,
	DELETE_PHOTO
} from '../actions/types';

const initialState = {
	user: {},
	profile: {},
	photos: []
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
		case FETCH_USER_PHOTOS:
			return {
				...state,
				photos: state.photos.concat(payload)
			};
		case DELETE_PHOTO:
			return {
				...state,
				photos: payload
			};
		default:
			return state;
	}
};
