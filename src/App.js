import React, {Component} from 'react';
import './App.scss'; 
import Header from './shared/Header';
import Footer from './shared/Footer';
import Home from './home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
