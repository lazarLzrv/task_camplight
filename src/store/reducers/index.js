import { combineReducers } from "redux";
import popup from "./popup";
import pagination from "./pagination";

const rootReducer = combineReducers({
    popup: popup,
    pagination: pagination,
});

export default rootReducer;
