import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/authentification/signup'
import SignIn from './components/authentification/signin'
import About from './components/about/about';
import ProfilDresseur from './components/profile/profileDresseur';
import DetailDresseur from './détailDresseur';
import CarteVisiteDresseur from './components/cards/carteVisiteDresseur';
import { Route, Switch } from "react-router-dom";
import P404 from './components/404/404'
import pagePremiuim from './components/premiuim/pagePremiuim'
import contact from './components/contact/contact'
import Dashboard from './components/dashboard/Dashboard'



function App() {
  return (
    <div className="App">
       <Switch>
       <Route exact path= "/(home|listesEducateurs)/"  component={About}/>
      <Route exact path= "/(register|login|registerDresseur)/"  component={SignUp}/>
      <Route exact path= "/detailDresseur/:id"  component={ProfilDresseur}/>
      <Route exact path= "/premiuim"  component={pagePremiuim}/>
      <Route exact path= "/contact"  component={contact}/>
      <Route exact path= "/admin"  component={Dashboard}/>



      <Route exact path= "/error"  component={P404}/>



      <SignUp/>
      </Switch>
    </div>
  );
}

export default App;
