import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const nav= useNavigate()
  return (
    <div>
       <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <Button sx={{background:"orange", marginTop:30}} onClick={()=> nav("/books")} variant='contained'>
          <Typography variant='h3'>
Viem all products
          </Typography>
        </Button>
       </Box>
      
    </div>
  )
}
