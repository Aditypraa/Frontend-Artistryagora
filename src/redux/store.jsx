import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";

import authReducer from "./auth/reducer";
import categoriesReducer from "./categories/reducer";
import notifReducer from "./notif/reducer";
import talentsReducer from "./talents/reducer";
import paymentsReducer from "./payments/reducer";
import eventsReducer from "./events/reducer";
import listReducer from "./list/reducer";
import ordersReducer from "./orders/reducer";

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Global State
const rootReducers = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  notif: notifReducer,
  talents: talentsReducer,
  payments: paymentsReducer,
  events: eventsReducer,
  lists: listReducer,
  orders: ordersReducer,
});
// End Global State

const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);

export default store;
