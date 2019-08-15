import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import logger from "./middlewares/logger";
import generateId from "./middlewares/generate-id";
import provideUserId from "./middlewares/provide-user-id";
import { composeWithDevTools } from "redux-devtools-extension";
import api from "./middlewares/api";

const composeEnhancer = composeWithDevTools({});
const enhancer = composeEnhancer(
  applyMiddleware(api, generateId, provideUserId, logger)
);

const store = createStore(reducer, enhancer);

window.store = store;

export default store;
