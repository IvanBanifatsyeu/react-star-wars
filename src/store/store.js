import { composeWithDevTools } from "@redux-devtools/extension";
import { logger } from "@store/middleware/logger";
import { setLocalStprage } from "@utils/localStore";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(logger))
);

store.subscribe(() => {
	setLocalStprage("store", store.getState().favoriteReducer);
});

export default store;
