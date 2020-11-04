import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss'; 
import Header from './shared/Header';
import Footer from './shared/Footer';
import Home from './home/Home';
import About from "./main/About";
import Contact from "./main/Contact";
import Services from "./main/Services";
import Resume from "./main/Resume";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/service'>
            <Services />
          </Route>
          <Route exact path='/resume'>
            <Resume />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App;
