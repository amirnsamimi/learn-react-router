import React from 'react'
import amirLogo from "../assets/Amir-Samimi-Logo.svg"
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { ButtonBase, InputBase } from '@mui/material'
import {  SearchOutlined } from '@mui/icons-material'

const Navigation = () => {
    const navigate = useNavigate();
    const {lesson} = useParams();
  
    return (
        <Grid2 xs={12} container px={4} pt={4} alignContent="flex-start" textAlign="center" justifyContent="space-between" >
            <Grid2  xs={4} textAlign={"left"}>
            <figure>
               <NavLink to="/" > <img src={amirLogo} alt="amir-samimi-logo"/></NavLink>
            </figure>
            </Grid2>
            <Grid2  xs={4} sx={{fontFamily:"morabba"}}>
           {lesson}
            </Grid2>
            <Grid2 xs={4} textAlign={"right"}>
                <ButtonBase sx={{borderRadius:"100px"}} onClick={()=>{ navigate("/search") }}><SearchOutlined /> </ButtonBase>
            </Grid2>
            </Grid2>
    )


}

export default Navigation
