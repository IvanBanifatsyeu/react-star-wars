export const getApiResource = async (url) => {
	try {
		const res = await fetch(url);
		return await res.json();
	} catch (error) {
		console.error("Could not fetch.", error.message);
		return false;
	}
};


