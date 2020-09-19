import {combineReducers} from "redux";
import fetchReducer from "./fetchData";
import productReducer from "./productData";

const rootReducer = combineReducers({
    fetchReducer: fetchReducer,
    productReducer: productReducer

})

export default rootReducer