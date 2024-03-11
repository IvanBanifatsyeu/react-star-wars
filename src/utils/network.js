const SWAPI_ROOT = "https://swapi.tech/api/";
const SWAPI_PEOPLE = "people";

export const getApiResource = async (url) => {
	try {
		const res = await fetch(url);
		return await res.json();
	} catch (error) {
		console.error("Could not fetch.", error.message);
		return false;
	}
};

(async () => {
	const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
})();
