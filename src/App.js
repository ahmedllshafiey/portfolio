import React from 'react';
import Nav from './components/navbar/Nav';
import Header from './components/haeder/Header'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'
import './App.css';
function App() {
  return (
    <div>
      <Nav />      
      <Header />
      <Skills />
      <Footer />
    </div>    
  );
}

export default App;
