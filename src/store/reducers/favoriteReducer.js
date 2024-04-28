import {
	ADD_PERSON_TO_FAVORITE,
	REMOVE_PERSON_TO_FAVORITE,
	REMOVE_ALL
} from "@store/constants/actionTypes";

import { getLocalStorage } from "@utils/localStore";
import { omit } from "lodash";

const initialState = getLocalStorage("store");

const favoriteReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PERSON_TO_FAVORITE:
			return {
				...state,
				...action.payload,
			};
		case REMOVE_PERSON_TO_FAVORITE: {
			return { ...omit(state, [action.payload]) };
		};
		case REMOVE_ALL: {
			return {};
		};

		default:
			return state;
	}
};

export default favoriteReducer;
