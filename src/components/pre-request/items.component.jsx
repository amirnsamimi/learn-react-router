import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import ReactLogo from "../../assets/react.svg"
import NextButtonLink from '../../reusable-components/next-button-link.reusableComponent'
import { Link } from 'react-router-dom'

const Items = () => {
  return (
    <Grid2  container xs={12}  alignItems="flex-start">
       <Grid2 xs={4} xsOffset={8} md={2} mdOffset={10}  px={2} > <Grid2 p={1}  className="titles persian-bold">پیشنیازها </Grid2> </Grid2> 
       <Grid2 xs={12} container>
        <Grid2 xs={6} md={4} lg={3} xl={2}  p={2} container>
            <Grid2 xs={12} p={2} container className="prerequesties-card">
            <Grid2 xs={12} container justifyContent="center" p={4}>
                <figure>
            <img src={ReactLogo}  width="100px" alt="react-logo" />
            </figure>
            </Grid2>
            <Grid2 xs={12}  container justifyContent="center" alignItems="center" className="prerequesties-card-info">

<Link to="https://reactjs.org/">
ReactJS
            </Link>
            </Grid2>
            </Grid2>
          
        </Grid2>
        <Grid2 xs={6} md={4}  p={2} lg={3} xl={2}  container>
            <Grid2 xs={12} p={2}  container className="prerequesties-card">
            <Grid2 xs={12} container justifyContent="center" p={4}>       
                 <figure>
            <img src="https://cdn.worldvectorlogo.com/logos/redux.svg"   width="100px" alt="react-logo" />
            </figure>
            </Grid2>
            <Grid2 xs={12} container justifyContent="center"  alignItems="center"  className="prerequesties-card-info">

<Link to="https://redux.js.org/">
ReduxJS
            </Link>
            </Grid2>
            </Grid2>
          
        </Grid2>
        <Grid2 xs={6} md={4} lg={3}  xl={2} p={2} container>
            <Grid2 xs={12} p={2}  container className="prerequesties-card">
            <Grid2 xs={12} container justifyContent="center" p={4}>         
               <figure>
            <img src="https://mui.com/static/logo.png" alt="react-logo" width="100px" />
            </figure>
            </Grid2>
            <Grid2 xs={12}  container justifyContent="center" alignItems="center"  className="prerequesties-card-info">
            <Link to="https://mui.com/">
            Material UI
            </Link>
            </Grid2>
            </Grid2>

        </Grid2>
        <NextButtonLink alignment={"right"} fontSize={"0.6rem"} link={"/course/Syllabus"} iconSize={"large"} paddingTop={6} text={"شروع دوره"} />

       </Grid2>
        
    </Grid2>
  )
}

export default Items
