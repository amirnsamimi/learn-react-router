import { createSlice } from "@reduxjs/toolkit";
import { HELLOS } from "../data/hello";

const helloSlice = createSlice({
    name:"hello",
    initialState:{ hello: HELLOS},
    reducers:{}
})

export const selectHellos = (state) => state.hellos.hello;
export default helloSlice.reducer;