import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../features/helloSlice";
import courseReducer from "../features/courseSlice";

const Store = configureStore({
    reducer:{
        hellos:helloReducer,
        course:courseReducer,
    }
})



export default Store;