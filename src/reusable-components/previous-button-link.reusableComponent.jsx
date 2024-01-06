import { ArrowCircleLeftOutlined } from '@mui/icons-material'
import { createStyles } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import { Link } from 'react-router-dom'

const PreviousButtonLink = ({alignment,fontSize,link,iconSize,paddingTop,text}) => {

  const style = createStyles({

    text:{
      fontSize:"1rem",
      fontFamily:"Morabba"
    }

  })

  return (
    <Grid2 xs={12}  pt={paddingTop}  sx={{fontSize:fontSize, textAlign:alignment}} >
    <Link to={link}>  <ArrowCircleLeftOutlined fontSize={iconSize}/>  <span style={style.text}>{text}</span></Link>
  </Grid2>
  )
}

export default PreviousButtonLink
