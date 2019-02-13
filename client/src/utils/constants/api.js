// utils file for storing urls for api requests

export const url = query => {
	return `https://api.pexels.com/v1/search?query=${query}+query&per_page=40&page=1`;
};

export const urlID = id => {
	return `https://api.pexels.com/v1/photos/:${id}`;
};
