import { HOME_TOGGLE, DROPDOWN_TOGGLE } from './types';

export const homeToggle = toggle => dispatch => {
	dispatch({
		type: HOME_TOGGLE,
		payload: toggle
	});
};

export const dropDownToggle = toggle => dispatch => {
	dispatch({
		type: DROPDOWN_TOGGLE,
		payload: toggle
	});
};
