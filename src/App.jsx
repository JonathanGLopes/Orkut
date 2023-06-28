import React from 'react'
import './App.css'
import Header from './components/Header';
import Perfil from './components/Perfil';
import Edit from './components/Edit';
import Friends from './components/Friends';
import Description from './components/Description';
import Community from './components/Community';

function App() {
  return (
    <>
      <Header />
      <Perfil />
      <Edit />
      <Description />
      <Friends />
      <Community />
    </>
  )
}

export default App;
