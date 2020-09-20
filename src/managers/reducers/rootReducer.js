import {combineReducers} from "redux";
import fetchReducer from "./fetchData";
import productReducer from "./productData";
import storeReducer from "./storeData";
import userReducer from "./userData";

const rootReducer = combineReducers({
    fetchReducer: fetchReducer,
    productReducer: productReducer,
    storeReducer : storeReducer,
    userReducer : userReducer

})

export default rootReducer