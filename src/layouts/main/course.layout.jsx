import React, { useCallback, useEffect, useState } from 'react'
import Course from '../../components/course/course.component';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useSelector } from 'react-redux';
import { selectCourse } from '../../redux/features/courseSlice';
import { useNavigate, useParams } from 'react-router-dom';
import NextButtonBase from '../../reusable-components/next-button-button.reusable.component';
import { ButtonBase } from '@mui/material';
import { ArrowCircleLeftOutlined, ArrowCircleRightOutlined, Done, DoneRounded } from '@mui/icons-material';

const CourseLayout = () => {

    const dynamicsValues = useSelector(selectCourse);
    const [courses,setCourses] = useState(Object.keys(dynamicsValues))
    const [activeCourseIndex,setActiveCourseIndex] = useState([])


    const {lesson} = useParams();


    useEffect(()=>{
        setActiveCourseIndex(Object.keys(dynamicsValues).findIndex(i=>i==lesson))
    },[lesson])


    const navigate = useNavigate();

    const navigateToNextCourse = (e) => {

        e.preventDefault();
        navigate(`/course/${courses[activeCourseIndex+1]}`)

    }
    const navigateToPrevCourse = (e) => {

        e.preventDefault();
        navigate(`/course/${courses[activeCourseIndex-1]}`)

    }
 
  return (
    <Grid2 container className="persian-content" xs={12} p={4}  alignContent={"space-between"}>
        <Course />
        <Grid2 pt={4} container>
        <ButtonBase onClick={(e)=>{ navigateToNextCourse(e) }} sx={{display: courses[activeCourseIndex+1] ? "flex" : "none"}}>  <ArrowCircleRightOutlined fontSize="large"/> </ButtonBase>
        <ButtonBase className='course-button' onClick={(e)=>{ navigate("/course") }} sx={{display: courses[activeCourseIndex+1] ? "none" : "flex"}}>  پایان دوره! </ButtonBase> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <ButtonBase sx={{display: courses[activeCourseIndex-1] ? "flex" : "none"}} onClick={(e)=>{ navigateToPrevCourse(e) }}>  <ArrowCircleLeftOutlined fontSize="large"/> </ButtonBase>
        </Grid2>

    </Grid2>
  )
}

export default CourseLayout;
