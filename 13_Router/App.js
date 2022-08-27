import React, { useRef, useState, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile.';
import Article from './pages/Article';
import ArticlePage from './pages/ArticlePage';
import LayOut from './Layout';

const App = () => {


  return (
    <Routes>
      <Route element={<LayOut/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile/:username' element={<Profile/>}/>
      </Route>
      <Route path='/article' element={<Article/>}>
        <Route path=':id' element={<ArticlePage/>}/>
      </Route>
    </Routes>
  )
}



export default App;

