// import logo from './logo.svg';
import { useEffect , useState } from 'react';
import './App.css';
import Main from './components/Main'; 

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MoviePrev from './components/MoviePrev';






const API_URL = 'http://www.omdbapi.com/?apikey=ef1dc9dd&s=';
// const API_URL = "http://localhost:8000/users";

function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/moviePrev/:id' element={<MoviePrev />}/>
      </Routes>
      
    </BrowserRouter>
  )

  
}

export default App;

// http://www.omdbapi.com/?apikey=ef1dc9dd
