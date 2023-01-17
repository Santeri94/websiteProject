import './App.css';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import LoginForm from './routing/loginForm.js'
import NasaPicture from './routing/nasaPicture.js'
import RandomQuestion from './routing/randomQuestion.js'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AppBar position="static" style={{ background:'#000000'}}>
          <Grid container sx={{alignItems: "center", justifyContent: "center"}}>
            <nav>
              <Button variant="outlined" color="primary" component={Link} to="/">Home</Button>
              <Button variant="outlined" color="primary" component={Link} to="/picture">Picture</Button>
              <Button variant="outlined" color="primary" component={Link} to="/question">Question</Button>
            </nav>
          </Grid>
        </AppBar>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/picture" element={<NasaPicture />} />
          <Route path="/question" element={<RandomQuestion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// tehää true/false vaihtoehot kysymyksille ja ilmotetaan kuinka monta mennyt oikein kun esim 10 kyssäriä vastattu
// poista login vaihtoehto ku ei oo järkee ideassa