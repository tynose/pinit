import { FETCH_PHOTOS, PHOTOS_PAG } from '../actions/types';

const initialState = {
	fetching: false,
	nextPage: '',
	photos: []
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_PHOTOS:
			return {
				...state,
				photos: payload.photos,
				nextPage: payload.next_page,
				fetching: true
			};
		case PHOTOS_PAG:
			return {
				...state,
				nextPage: payload.next_page,
				photos: state.photos.concat(payload.photos)
			};
		default:
			return state;
	}
};
