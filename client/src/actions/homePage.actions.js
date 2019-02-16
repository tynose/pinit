import { FETCH_PHOTOS, PHOTOS_PAG } from './types';

export const fetchPhotos = (url, fetched) => dispatch => {
	fetch(`${url}`, {
		method: 'GET',
		headers: {
			authorization: process.env.REACT_APP_ACCESS_TOKEN
		}
	})
		.then(resp => resp.json())
		.then(photos => {
			const payload = {
				next_page: photos.next_page,
				photos: photos.photos
			};
			if (fetched) {
				dispatch({
					type: PHOTOS_PAG,
					payload
				});
			} else {
				dispatch({
					type: FETCH_PHOTOS,
					payload
				});
			}
		})
		.catch(err => {
			throw new Error(err);
		});
};
