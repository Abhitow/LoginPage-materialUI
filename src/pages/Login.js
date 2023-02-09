import React,{useState} from 'react'
import { Container , Stack } from '@mui/system'
import { Button, TextField, Typography } from '@mui/material'
import {makeStyles} from '@material-ui/styles'



const useStyles = makeStyles({
    background:{
        backgroundColor:'Linear-Gradient(to right ,red ,yellow)'
    },
    heading:{
        marginLeft:'50px',
        textAlign:'center'
    } ,
    usernameTextfield:{
        marginTop:'60px',
        marginLeft:'100px',
        width:'60%',

    } ,
    passwordTextfield:{
        marginTop:'50px',
        marginLeft:'100px',
        width:'60%'
    } ,
    submitBtn : {
        marginTop:'40px',
        marginLeft:'30%'
    },
    cancelBtn:{
       marginTop:'40px',
       marginLeft:'10px'
    }
});

const Login = () => {
    /*Hooks starts here */
const [email , setEmail] = useState("");
const [password , setPassword] = useState("");
const classes = useStyles();


/* button function starts here*/
const handleSubmit = (e) =>{
    
}
const handleCancel = (e) =>{
    e.preventDefault();
}
const URL = "http://demo.emeetify.com:8080/daytodaytask/admin/adminlogin";
console.log(URL);
fetch(URL,{
    method:"POST",
    body:JSON.stringify({
        email:email,
        password: password
    }) ,
    header:{
        'Content-type':'application/json; charset=UTF-8'
    }
})
.then((response)=>{response.json()}).then((data)=>{console.log(data)}).catch((err)=>{console.log(err.message ,"eeeee")});




/*button function ends here */
    return(
        <>
        <Container component='form'  maxWidth='sm' className={classes.background}>
            <Typography className={classes.heading} sx={{marginTop:'50px'}} variant='h4' >Login Page</Typography>

            <Stack className={classes.usernameTextfield} >
                <TextField label='UserName' 
                variant='filled' 
                value={email}
                onChange={(e)=> {setEmail(e.target.value)}}
               
                />
            </Stack>

            <Stack className={classes.passwordTextfield}>
                <TextField value={password} onChange={(e)=> {setPassword(e.target.value)}} label='Password' variant='filled' />
            </Stack>

            <Stack direction='row'>
                <Stack className={classes.submitBtn} direction='row'>
                <Button  type='submit' onClick={handleSubmit}  className={classes.submitBtn} variant='contained'>Submit</Button>
                </Stack>
                <Stack className={classes.cancelBtn}>
                <Button onClick={handleCancel}   className={classes.cancelBtn} variant='contained'>Cancel</Button>
                </Stack>
            </Stack> 
        </Container> 
        
        </>
       
    )
}

export default Login