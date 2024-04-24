import {
	ADD_PERSON_TO_FAVORITE,
	REMOVE_PERSON_TO_FAVORITE,
} from "@store/constants/actionTypes";

const favoriteReducer = (state= {x:3}, action) => {
	switch (action.type) {
		case ADD_PERSON_TO_FAVORITE:
			return {
				...state,
				...action.payload,
			};
		case REMOVE_PERSON_TO_FAVORITE:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};

export default favoriteReducer;
