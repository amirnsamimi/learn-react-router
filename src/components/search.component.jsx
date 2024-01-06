import { Close } from '@mui/icons-material'
import { ButtonBase, InputBase } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { useEffect, useState } from 'react'
import { Link, createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import { filterCourse, selectCourse } from '../redux/features/courseSlice'
import { useSelector } from 'react-redux'

const Search = () => {
    const course = useSelector(selectCourse)
    const navigate = useNavigate();
    const [searchParams,setSearchParams] = useSearchParams();
    const [searchString,setSearchString] = useState("");
    const searchCourses = (e,value) => {
        setSearchString(value)
    }

    const searchedByUser = searchParams.get("course")

    useEffect(()=>{

        if(searchedByUser !== null ){
            setSearchString(searchedByUser)
        }
    },[])

    const searchByType = (e) => {
    const newSearchParameter = createSearchParams({course: searchString})
    navigate({pathname:"/search",search:`?${newSearchParameter}`})
    }


    const filteredArticles = searchedByUser ? filterCourse(searchedByUser, course) : Object.keys(course)



  return (
   <Grid2 container xs={12} justifyContent="center" height="80vh"  >
      <Grid2 xs={12} container p={4}>
      <ButtonBase sx={{borderRadius:"100px"}}  onClick={()=>{navigate("/course/Syllabus")}}> <Close /></ButtonBase>
        </Grid2>
    <Grid2 container xs={12} justifyContent="center"  alignContent="flex-start" >
      
        <Grid2 container xs={8} justifyContent="center">
    <InputBase onKeyDown={(e)=> e.key == "Enter" ? searchByType() : "" }  onChange={(e)=>{searchCourses(e,e.target.value)}} value={searchString} className='course-input'  />
    <Grid2  container xs={6} justifyContent="flex-start">
    <ButtonBase onClick={ searchByType}  className='course-button'> جستجو</ButtonBase>
   

    </Grid2>
    <Grid2 container xs={6}  justifyContent="flex-end">
    <span className='course-text'> کورس مورد نظر خود را جستجو کنید</span>
    </Grid2>
    
    </Grid2>
   
    </Grid2>
    <Grid2  p={2} container alignItems="flex-start" justifyContent={"flex-start"} xs={8} >
        { filteredArticles.map(i=>{  return  <Grid2 px={2}>
    <ButtonBase className='course-button'> 
            <Link to={`/course/${i}`}>
           {i}
            </Link>
            </ButtonBase>
            </Grid2>})}
        
        
        
       
        </Grid2>
    
   </Grid2>
  )
}

export default Search;
