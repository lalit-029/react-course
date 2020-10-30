import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.scss'; 
import Header from './shared/Header';
import Footer from './shared/Footer';
import Home from './home/Home';
import About from "./main/About";
import Contact from "./main/Contact";
import Services from "./main/Services";
import Resume from "./main/Resume";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component = {Header}/>
          <Route exact path='/home' Component={Home} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/contact' Component={Contact} />
          <Route exact path='/service' Component={Services} />
          <Route exact path='/resume' Component={Resume} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
