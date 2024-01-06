import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'


const Footer = () => {
  return (
    <Grid2 container xs={12}  alignContent="flex-end" >
          <footer>
        <Grid2 p={4} container xs={12} className={"footer"}>
      
           Amir Samimi &reg; 2016-2024
        
        </Grid2>
        </footer>
    
    </Grid2>
  )
}

export default Footer
