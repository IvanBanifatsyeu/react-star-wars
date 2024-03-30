/**
 * Sends a fetch request
 * @param {string} url - url for request
 * @returns {Promise} = Promise with a request result
 */

export const getApiResource = async (url) => {
	try {
		const res = await fetch(url);
		return await res.json();
	} catch (error) {
		console.error("Could not fetch.", error.message);
		return false;
	}
};


