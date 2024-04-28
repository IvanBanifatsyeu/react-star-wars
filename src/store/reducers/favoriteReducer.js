import {
	ADD_PERSON_TO_FAVORITE,
	REMOVE_PERSON_TO_FAVORITE,
} from "@store/constants/actionTypes";

 import {omit} from 'lodash'
 import { getLocalStorage } from "@utils/localStore";

const initialState = getLocalStorage('store');

const favoriteReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PERSON_TO_FAVORITE:
			return {
				...state,
				...action.payload,
			};
		case REMOVE_PERSON_TO_FAVORITE: {
			return {...omit(state,[action.payload])}
		}

		default:
			return state;
	}
};

export default favoriteReducer;
