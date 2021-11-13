import { Button, Container, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink ,useHistory,useLocation} from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Register = () => {
    const [registerData, setRegisterData] = useState({})
    const {registration,user} = useAuth()
    const location = useLocation();
    const history  = useHistory()
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData)
        e.preventDefault()
    }
    const handleRegister = (e) => {
        if(registerData.password === registerData.password2){
            registration(registerData?.email, registerData.name,registerData?.password,history,location)
        }
        else{
            alert("Passwords are not matches")
        }
        e.preventDefault()
        e.target.reset()
       
    }
    console.log(user.email)
    return (
        <Box style={{ textAlign: 'center', margin: '10px 0' }} sx={{ display: 'flex', justifyContent: 'center' }}>

            <Container style={{ textAlign: 'center', margin: '10px 0' }}>
                <h1 style={{ color: '#1976D2' }}>Please Register</h1>
                <form onSubmit={handleRegister} style={{ display: 'block', margin: '20px 0', height: 'auto' }}>
                    <TextField
                        style={{ width: '80%', margin: '5px 0' }}
                        id="standard-basic"
                        required
                        type="text"
                        name="name"
                        label="Name"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        style={{ width: '80%', margin: '5px 0' }}
                        id="standard-basic"
                        type="email"
                        name="email"
                        label="Email"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        style={{ width: '80%', margin: '5px 0' }}
                        id="standard-basic"
                        required
                        type="password"
                        name="password"
                        label="Password"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        style={{ width: '80%', margin: '5px 0' }}
                        id="standard-basic"
                        required
                        type="password"
                        name="password2"
                        label="Confirm Password"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <br />
                    <Button type="submit">Registration</Button>
                </form>
                <p>------------------------</p>
                <NavLink to='/login' style={{textDecoration:'none',fontWeight:'bold',color:'#1976D2',padding:'10px 15px'}}>Already have an account</NavLink>
            </Container>
        </Box>
    );
};

export default Register;