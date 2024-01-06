import { createSlice } from "@reduxjs/toolkit";
import { REACTROUTERCOURSE } from "../data/react-router";

const courseSlice = createSlice({
    name:"course",
    initialState:{
        course:REACTROUTERCOURSE
    },
    reducers:{}

})

export const selectCourse = (state) => state.course.course;
export const filterCourse = (query, course) => Object.keys(course).filter(i => i.toLowerCase().includes(query.toLowerCase()))
export default courseSlice.reducer;