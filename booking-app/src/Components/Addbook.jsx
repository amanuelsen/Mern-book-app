import { Box, Button, FormLabel, TextField, FormControlLabel, Checkbox } from '@mui/material'
import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export default function Addbook() {
    const nav = useNavigate()
    const [inputs, setinputs]=useState({
        name:"",
        description:"",
        price:"",
        image:"",
        
        author:""
    })

    const [checked, setchecked]=useState(false)

    const handlechange = (e) => {
        setinputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

const sendrequest= async()=>{
     await axios.post("http://localhost:5050/add", {
        name:String(inputs.name),
        author:String(inputs.author),
        description:String(inputs.description),
        price:Number(inputs.price),
        image:String(inputs.image),
        available: Boolean(checked)

    }).then(res=> res.data)

}

const handlesubmit=(e)=> {
    e.preventDefault()
    sendrequest().then(()=> nav("/"))
}

    return (
        <div className='add'>
           <div>
           <form onSubmit={handlesubmit}>
            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", maxWidth:700, alignItems:"center", alignSelf:"center", marginRight:"auto", marginLeft:"auto", marginTop:10}}>
                <FormLabel> Name</FormLabel>
                <TextField value={inputs.name} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='name'></TextField>
                <FormLabel> Author</FormLabel>
                <TextField value={inputs.author} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='author'></TextField>
                <FormLabel> Description</FormLabel>
                <TextField value={inputs.description} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='description'></TextField>
                <FormLabel> Price</FormLabel>
                <TextField value={inputs.price} onChange={handlechange} type='number' margin='normal' fullWidth variant='outlined' name='price'></TextField>
                <FormLabel> Image</FormLabel>
                <TextField value={inputs.image} onChange={handlechange} margin='normal' fullWidth variant='outlined' name='image'></TextField>
                <FormControlLabel control={<Checkbox checked={checked} />} onChange={()=>setchecked(!checked)} label="Available" />
                <Button sx={{width:"100%"}} variant='contained' type='submit'>Add book</Button>
            </Box>
        </form>
           </div>
        </div>
    )
}
