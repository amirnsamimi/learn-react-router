import { ArrowCircleRightOutlined } from '@mui/icons-material';
import { ButtonBase } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NextButtonBase = ({navArray,iconSize}) => {
    
    const navigationArray = navArray; //get navigation array with links provided
    const navigate = useNavigate();

  
    return (
   <ButtonBase onClick={()=>{navigate("/course/Syllabus")}}>  <ArrowCircleRightOutlined fontSize={iconSize}/> </ButtonBase>
  )
}

export default NextButtonBase
