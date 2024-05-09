import { composeWithDevTools } from "@redux-devtools/extension";
import { logger } from "@store/middleware/logger";
import { setLocalStorage } from "@utils/localStore";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(logger))
);

store.subscribe(() => {
	setLocalStorage("store", store.getState().favoriteReducer);
});

export default store;
