import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "../layouts/main/root.layout";
import Intro from "../components/intro.component";
import Prerequisites from "../layouts/main/Prerequisites.layout";
import Course from "../components/course/course.component";
import CourseLayout from "../layouts/main/course.layout";
import Search from "../components/search.component";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Router = createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={<Root />} >
      <Route index element={<Intro />} />
      <Route path="course" element={<Prerequisites />} />
      <Route path="course/:lesson" element={<CourseLayout />} errorElement={<Grid2 xs={12} container justifyContent="center" sx={{fontFamily:"morabba"}}>صفحه یافت نشد ( در دست طراحی )</Grid2>} />
      <Route path="search" element={<Search />} />
    </Route>

));



export default Router;