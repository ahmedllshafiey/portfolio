import React from 'react';
import Nav from './components/navbar/Nav';
import Header from './components/haeder/Header'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Skills from './components/skills/skills'
import './App.css';
function App() {
  return (
    <div>
      <Nav />
      <h2 className='display-3 mx-5'>About Me</h2>
      <hr />      
      <Header />
      <About />
      <br/>
      <h2 className='display-3 mx-5'>Skills</h2>
      <hr />
      <Skills />
      <br />
      <br />
      <br />
      <Footer />
    </div>    
  );
}

export default App;
