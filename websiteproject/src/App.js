import './App.css';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import LoginForm from './routing/loginForm.js'
import NasaPicture from './routing/nasaPicture.js'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AppBar position="static" style={{ background:'#000000'}}>
          <Grid container sx={{alignItems: "center", justifyContent: "center"}}>
            <nav>
              <Button variant="outlined" color="primary" component={Link} to="/">Home</Button>
              <Button component={Link} to="/picture">Picture</Button>
            </nav>
          </Grid>
        </AppBar>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/picture" element={<NasaPicture />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//navigointi toimii
// tee mahollisuus kirjautumaan ja tekemään tili 