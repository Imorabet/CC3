import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TodoSlice  from "./TodoSlice";
import  UserSlice  from "./UserSlice";

const reducer=combineReducers({
    todo:TodoSlice,
    user:UserSlice
})
const store=configureStore({reducer,})
export default store