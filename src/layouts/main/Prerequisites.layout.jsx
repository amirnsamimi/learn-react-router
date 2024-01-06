import React from 'react'
import Items from '../../components/pre-request/items.component'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

const Prerequisites = () => {
  return (
   <Grid2 container  xs={12}  className="persian-content"  alignItems="flex-start" p={2}>
   <Items />
   </Grid2>
  )
}

export default Prerequisites
