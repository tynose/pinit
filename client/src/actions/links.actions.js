import { ADD_LINK, DELETE_LINK } from './types';

export const addLink = data => dispatch => {
	console.log(data);

	fetch('/link/add', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(resp => resp.json())
		.then(link => {
			dispatch({
				type: ADD_LINK,
				payload: link
			});
		})
		.catch(err => {
			throw new Error(err);
		});
};

export const deleteLink = id => dispatch => {
	fetch(`/link/delete/${id}`, {
		method: 'DELETE',
		headers: {
			'content-type': 'application/json'
		}
	})
		.then(resp => resp.json())
		.then(link => {
			dispatch({
				type: DELETE_LINK,
				payload: link
			});
		})
		.catch(err => {
			throw new Error(err);
		});
};
