import { combineReducers, createStore } from "redux";
import { currencyReducer } from './currencyReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    currency: currencyReducer,
});
export type IGlobalState = ReturnType<typeof reducers>;

export const store = createStore(reducers, composeWithDevTools());

// @ts-ignore
window.store = store