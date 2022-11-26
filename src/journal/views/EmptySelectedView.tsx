import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material';
import React from 'react'

export const EmptySelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent={"center"}
      sx={{ minHeight:'calc(100vh - 120px)' ,backgroundColor: "primary.main", padding: 4, borderRadius: 3 }}
    >
        <Grid item
            xs={12}
        >
            <StarOutline sx={{fontSize:100, color: 'white'}}></StarOutline>
        </Grid>
        <Grid item
            xs={12}
        >
            <Typography variant='h5' sx={{color:'white'}}> Selecciona o crea una entrada </Typography>
        </Grid>
    </Grid>
  )
}
