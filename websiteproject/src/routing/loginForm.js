import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function LoginForm(props) {
    const [user, setUser] = useState({username: '', password: ''});

    const inputChanged = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <TextField sx={{marginTop: 50, width: 150}}
                name="username"
                value={user.username}
                onChange={inputChanged}
                margin="dense"
                label="Username"
                fullWidth
          />
            <TextField sx={{marginTop: 50, width: 150}}
                name="password"
                value={user.password}
                onChange={inputChanged}
                margin="dense"
                label="Password"
                fullWidth
          />    
            <Button variant="contained" color="primary" sx={{marginTop: 50, width: 150, height: 55}} onClick={() => {console.log('yay')}}> 
              Login 
            </Button>
        </div>
    )

}

export default LoginForm