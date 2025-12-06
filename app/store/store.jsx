import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "../slice/slice";

export const store=configureStore({
    reducer:todoReducer
})