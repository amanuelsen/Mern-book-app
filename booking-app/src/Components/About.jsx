import { Box, Typography } from '@mui/material'
import React from 'react'
import "./about.css"

export default function About() {
  const shouldDisplay = window.innerWidth <= 600;
  return (
    <div className="about">
     <h3 >Crud Application </h3>
    </div>
  )
}
