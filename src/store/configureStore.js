import { createStore } from "redux";
import rootReducer  from "../reducers/rootReducers"


export const configureStore = () => {
    const store = createStore( rootReducer )

    return store;
}