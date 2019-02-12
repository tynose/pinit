import { HOME_TOGGLE, DROPDOWN_TOGGLE } from '../actions/types';

const initialState = {
	login: false,
	dropDownActive: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case HOME_TOGGLE:
			return {
				...state,
				login: !payload
			};
		case DROPDOWN_TOGGLE:
			return {
				...state,
				dropDownActive: !payload
			};
		default:
			return state;
	}
};
