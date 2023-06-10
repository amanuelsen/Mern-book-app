import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Tab, Tabs } from '@mui/material';


import {NavLink} from "react-router-dom"
export default function Header() {
    const [value, setvalue]= useState()
   
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:"#232F3D"}} position="static">
        <Toolbar>
          
        <NavLink style={{color:"white"}} to={"/"}>
        <IconButton sx={{color:"white"}}>
         <LibraryBooksIcon />
         </IconButton>
        </NavLink>
          <Tabs sx={{ml:"auto"}} textColor='inherit' indicatorColor='secondary' value={value} onChange={(e, val)=>setvalue(val)}>
          <Tab  LinkComponent={NavLink} to="/add" label="Add product"/>
            <Tab LinkComponent={NavLink} to="/books" label="Books"/>
            <Tab LinkComponent={NavLink} to="/about" label="About Us"/>

          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
}