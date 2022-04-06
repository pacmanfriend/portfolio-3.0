import {createStore, combineReducers} from "redux";
import {catalogReducer} from "./catalogReducer";
import {cartReducer} from "./cartReducer";

const rootReducer = combineReducers({
    catalog: catalogReducer,
    cart: cartReducer
});

export const store = createStore(rootReducer)