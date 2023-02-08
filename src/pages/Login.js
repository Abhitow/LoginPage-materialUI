import React from 'react'
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
const classes = useStyles();


const handleSubmit = (e) =>{
    e.preventDefault();
}
const handleCancel = () =>{
    alert("clicked");
}
    return(
        <>
        <Container component='form'  maxWidth='sm' className={classes.background}>
            <Typography className={classes.heading} sx={{marginTop:'50px'}} variant='h4' >Login Page</Typography>
            <Stack className={classes.usernameTextfield} >
                <TextField label='UserName' variant='filled' />
            </Stack>
            <Stack className={classes.passwordTextfield}>
                <TextField label='Password' variant='filled' />
            </Stack>
            <Stack direction='row'>
            <Stack className={classes.submitBtn} direction='row'>
                <Button  type='submit' onClick={handleSubmit}  className={classes.submitBtn} variant='contained'>Submit</Button>
            </Stack>
            <Stack className={classes.cancelBtn}>
                <Button   className={classes.cancelBtn} variant='contained'>Cancel</Button>
            </Stack>
            </Stack>
           
        </Container> 
        </>
       
    )
}

export default Login