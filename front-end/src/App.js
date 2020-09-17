import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/authentification/signup'
import SignIn from './components/authentification/signin'
import Home from './components/home/home';
import ProfilDresseur from './components/profile/profileDresseur';
import DetailDresseur from './détailDresseur';
import { Route, Switch } from "react-router-dom";
import P404 from './components/404/404'
import pagePremiuim from './components/premiuim/pagePremiuim'
import contact from './components/contact/contact'
import Dashboard from './components/dashboard/Dashboard'
import Dresseurs from './components/listDresseurs/dresseurs'
import EditDresseurs from './components/authentification/editDresseurs'
import CardPremiuim from './components/premiuim/AddcardPremiuim'
import EditCardPremiuim from './components/premiuim/editcardPremiuim'

import PageCardPremiuim from './components/premiuim/PageCardsPremuim'






function App() {
  return (
    <div className="App">
       <Switch>
       <Route  exact path= "/"  component={Home}/>
       <Route exact path= "/listesEducateurs"  component={Dresseurs}/>

      <Route exact path= "/register"  component={SignUp}/>
      <Route exact path= "/login"  component={SignIn}/>
      <Route exact path= "/registerDresseur/:id"  component={EditDresseurs}/>


      <Route exact path= "/detailDresseur/:id"  component={ProfilDresseur}/>
      <Route exact path= "/contact"  component={contact}/>
      <Route exact path= "/premiuim"  component={pagePremiuim}/>

      <Route exact path= "/(admin|admin/users|admin/premiuim|admin/claim)/"  component={Dashboard}/>
      <Route exact path= "/cardPremiuim/:id"  component={CardPremiuim}/>
      <Route exact path= "/PagecardsPremiuim/:id"  component={PageCardPremiuim}/>
      <Route exact path= "/updatecardpremiuim/:id"  component={PageCardPremiuim}/>



  




      <Route exact path= "/error"  component={P404}/>



      <SignUp/>
      </Switch>
    </div>
  );
}

export default App;
