import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from './reducers'
import {logger} from '@store/middleware/logger'

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger) ))

export default store;