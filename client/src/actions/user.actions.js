import {
	FETCH_USER,
	FETCH_USER_ID,
	FETCH_USER_PHOTOS,
	DELETE_PHOTO
} from './types';

export const fetchUser = () => dispatch => {
	fetch('/user/me', {
		method: 'GET',
		headers: {
			authorization: `Bearer ${localStorage.getItem('token')}`
		}
	})
		.then(resp => resp.json())
		.then(user => {
			localStorage.setItem('user', user.id);
			dispatch({
				type: FETCH_USER,
				payload: user
			});
		})
		.catch(err => {
			throw new Error(err);
		});
};

export const fetchUserId = id => dispatch => {
	fetch(`/user/${id}`)
		.then(resp => resp.json())
		.then(user => {
			dispatch({
				type: FETCH_USER_ID,
				payload: user
			});
		})
		.catch(err => {
			throw new Error(err);
		});
};

export const fetchUserPhotos = (id, limit) => dispatch => {
	fetch(`/link/${id}?limit=${limit}`)
		.then(resp => resp.json())
		.then(photos => {
			dispatch({
				type: FETCH_USER_PHOTOS,
				payload: photos
			});
		})
		.catch(err => {
			throw new Error(err);
		});
};

export const deletePhoto = (id, photos) => dispatch => {
	console.log({ photos, id });

	dispatch({
		type: DELETE_PHOTO,
		payload: photos.filter(photo => photo.id !== id)
	});
};
