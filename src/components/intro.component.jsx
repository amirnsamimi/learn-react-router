import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { selectHellos } from "../redux/features/helloSlice";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Link } from 'react-router-dom';
import NextButtonLink from '../reusable-components/next-button-link.reusableComponent';

const Intro = () => {
    //REDUX
  const welcomeNote = useSelector(selectHellos);

  //STATES
  const [hello, setHello] = useState(welcomeNote.Persian);
  const [fadeStatus, setFadeStatus] = useState("fadeInText");
  const [state,setState] = useState(0);

  //SOLID STATE
  const [keys] = useState(Object.keys(welcomeNote));
  const [updateDate] = useState("5th Jan 2024");
  

  //UPDATE DIFF LANGUAGES FROM HELLO
  useEffect(() => {
    setTimeout(() => {
    state == 22 ? setState(0) : setState(state+1)
    }, 3500);
    setHello(welcomeNote[keys[state]]);
  }, [state]);

  
  //UPDATE ANIMATION DYNAMICALLY AT HELLO
  useEffect(() => {
    const fadeInterval = setInterval(() => {
      fadeStatus == "fadeInText"
        ? setFadeStatus("fadeOutText")
        : setFadeStatus("fadeInText");
    }, 1750);
    return () => clearInterval(fadeInterval);
  }, [fadeStatus]);



  return (
<Grid2 container justifyContent="center" textAlign="center" xs={12}  alignContent="center">
    <Grid2>
<Grid2 xs={12} p={2} className={`${fadeStatus} welcome-text`} > {hello.hello}, </Grid2>
<Grid2 xs={12} px={4}>
    Welcome to React-Router Course
  
</Grid2>
<Grid2 xs={12} px={4} sx={{fontSize:"0.6rem", textAlign:"left"}} >
   By Amir Samimi,
</Grid2>
<Grid2 xs={12} px={4} sx={{fontSize:"0.6rem", textAlign:"left"}} >
   Last update: {updateDate}.
</Grid2>

<NextButtonLink alignment={"right"} fontSize={"0.6rem"} link={"/course"} iconSize={"large"} paddingTop={6} />
</Grid2>
</Grid2>
  )
}

export default Intro
