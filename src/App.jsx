import React from 'react'
import './App.css'
import Header from './components/Header';
import Perfil from './components/Perfil';
import Edit from './components/Edit';
import Friends from './components/Friends';

function App() {
  return (
    <>
      <Header />
      <Perfil />
      <Edit />
      <Friends />
    </>
  )
}

export default App;
