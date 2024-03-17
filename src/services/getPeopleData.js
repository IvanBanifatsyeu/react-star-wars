import { SWAPI_PEOPLE, URL_IMG_PERSON, GUIDE_IMG_EXTENSION } from "../constants/api";
const getId = (url, category) => {
	const splitUrl = url.split("/");
	return splitUrl[splitUrl.length -1]
};

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);

export const getPeopleImg = id => URL_IMG_PERSON + id + GUIDE_IMG_EXTENSION;
