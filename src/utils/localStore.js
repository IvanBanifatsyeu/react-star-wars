export const getLocalStorage = (key) => {
	const data = localStorage.getItem(key);

	if (data !== null) {
		return JSON.parse(data);
	}
	return {};
};

export const setLocalStprage = (key, data) => {
	localStorage.setItem(key, JSON.stringify(data));
};
