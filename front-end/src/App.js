import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/authentification/signup'
import SignIn from './components/authentification/signin'
import About from './components/about/about';
import DetailDresseur from './détailDresseur';
import CarteVisiteDresseur from './components/cards/carteVisiteDresseur';
import { Route, Switch } from "react-router-dom";
import P404 from './components/404/404'



function App() {
  return (
    <div className="App">
       <Switch>
       <Route exact path= "/"  component={About}/>
      <Route exact path= "/(register|login|registerDresseur)/"  component={SignUp}/>
      <Route exact path= "/détailDresseur"  component={DetailDresseur}/>

      <Route exact path= "/error"  component={P404}/>



      <SignUp/>
      </Switch>
    </div>
  );
}

export default App;
