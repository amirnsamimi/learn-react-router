import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/navigation.component";
import Footer from "../../components/footer.component";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";


const Root = () => {
  
  return <Grid2 container xs={12} p={0} m={0}  minHeight="100vh">


  <Navigation />
  
  <Outlet /> 

  <Footer />
  </Grid2>;
};

export default Root;
