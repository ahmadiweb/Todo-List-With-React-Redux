import { combineReducers } from "redux";
import todos from "./features/todos/todosSlice";
import filters from "./features/filter/filterSlice";

const rootReducer = combineReducers({
    todos,
    filters
})

export default rootReducer