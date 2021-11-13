import { Button, Container} from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useHistory, useLocation } from 'react-router';
import { Link} from 'react-router-dom';
import { Box } from '@mui/system';
import useAuth from '../../../../hooks/useAuth';
const Login = () => {
    const { SignIn} = useAuth();
    const [logInData, setLogInData] = useState({});
    const history = useHistory()
    const location = useLocation()
    console.log(location)
    const handleOnBlur = (e) => {
        e.preventDefault()
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...logInData }
        newLogInData[field] = value;
        setLogInData(newLogInData)

    }

    const handleLogInSubmit = (e) => {
        SignIn(logInData?.email,logInData?.password,history,location)
        e.preventDefault()
        e.target.reset()
       
    }
    return (
        <Box sx={{display:'flex',justifyContent:'center'}}>
            <Container style={{ textAlign: 'center', margin: '10px 0' }}>
                <h2 style={{color:'#1976D2'}}>Please Loging </h2>
                <form onSubmit={handleLogInSubmit} style={{ display: 'block', margin: '10px 0', height: '180px' }}>
                    <TextField
                        style={{ width: '80%', margin: '5px 0' }}
                        id="standard-basic"
                        type="email"
                        name="email"
                        label="email"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        style={{ width: '80%', margin: '5px 0' }}
                        id="standard-basic"
                        type="password"
                        name="password"
                        label="password"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <br />
                    <Button type="submit">LogIn</Button>
                </form>
                <h4>--------------------</h4>
                <Link to='/registration'>
                    <Button>Registration</Button>
                </Link>
            </Container>
        </Box>
    );
};

export default Login;