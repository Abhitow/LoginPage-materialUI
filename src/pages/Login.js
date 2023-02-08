import React from 'react'
import { Container , Stack } from '@mui/system'
import { Button, TextField, Typography } from '@mui/material'
import {makeStyles} from '@material-ui/styles'



const useStyles = makeStyles({
    usernameTextfield:{
        marginTop:'40px',
        width:'60%'
    } ,
    passwordTextfield:{
        marginTop:'50px',
        width:'60%'
    } ,
    submitBtn : {
        marginTop:'40px',
        marginLeft:'25%'
    },
    cancelBtn:{
       marginTop:'40px',
       marginLeft:'10px'
    }
});

const Login = () => {
const classes = useStyles();
    return(
        <>
        <Container maxWidth='sm'>
            <Typography variant='h4' sx={{marginTop:'50px'}}>Login Page</Typography>
            <Stack className={classes.usernameTextfield} >
                <TextField label='UserName' variant='filled' />
            </Stack>
            <Stack className={classes.passwordTextfield}>
                <TextField label='Password' variant='filled' />
            </Stack>
            <Stack direction='row'>
            <Stack className={classes.submitBtn} direction='row'>
                <Button className={classes.submitBtn} variant='contained'>Submit</Button>
            </Stack>
            <Stack className={classes.cancelBtn}>
                <Button className={classes.cancelBtn} variant='contained'>Cancel</Button>
            </Stack>
            </Stack>
           
        </Container> 
        </>
       
    )
}

export default Login