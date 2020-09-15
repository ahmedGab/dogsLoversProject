import React from 'react';
import "./footer.css"
import logo from "../../images/logoDL1.png"
import {Link} from 'react-router-dom'
export default function footer() {
  
  return (
    <footer className="footer-distributed">
    
                <div className="footer-left">
    
                    <img src={logo} alt="logo" />
    
                    <p className="footer-links">
                        <Link to="/">Acceuil</Link>
                        
                        <Link to="/listesEducateurs">Educateurs de canins</Link>
                    
                        <Link to="/contact">Contact</Link>
                        <Link to="/premiuim">Premiuim</Link>


                    
                      
                    </p>
    
                    <p className="footer-company-name">DogsLovers © 2020</p>
                </div>
    
                <div className="footer-center">
    
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p>Ben Arous</p>
                    </div>
    
                    <div>
                        <i className="fa fa-phone"></i>
                        <p>29737939</p>
                    </div>
    
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p>support@dogsLovers.com</p>
                    </div>
    
                </div>
    
                <div className="footer-right">
    
                    <p className="footer-company-about">
                    Vous cherchez dressage de qualité près de chez vous avec un service qualifié pour votre chien ,<span style={{fontWeight:600,fontSize:'19px'}}> DogsLovers</span>  le meilleur guide en tunisie.
                    </p>
    
                    <div className="footer-icons">
    
            
    
                    </div>
    
                </div>
    
            </footer>
  );
}