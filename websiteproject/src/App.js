import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



import LoginForm from './routing/loginForm.js'
import NasaPicture from './routing/nasaPicture.js'




function App() {

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <BrowserRouter>
          <Link to="/">
          <Button sx={{ my: 2, color: 'white', display: 'block' }}>
            Home
          </Button>
          </Link>
          <Link to="/picture">
          <Button sx={{ my: 2, color: 'white', display: 'block' }}>
            Picture
          </Button>
          </Link>
          </BrowserRouter>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/picture" element={<NasaPicture />} />
        </Routes>
        </BrowserRouter> 
    </div>
  );
}

export default App;

// tähä asti toimii, mut ei lataa sivua iteksee
// poista buttonit ja tee ennemmi linkit <nav> <Link...> kato nasakoulutehtävä
// sit koita wrappaa ne toolbaariin/appbaariin