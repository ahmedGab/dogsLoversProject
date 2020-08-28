import React from 'react';
import "./footer.css"
import logo from "../../images/logoDL1.png"
export default function footer() {
  
  return (
    <footer className="footer-distributed">
    
                <div className="footer-left">
    
                    <img src={logo} alt="logo" />
    
                    <p className="footer-links">
                        <a href="#" className="link-1">A propos</a>
                        
                        <a href="#">Dresseurs</a>
                    
                        <a href="#">contact</a>
                    
                      
                    </p>
    
                    <p className="footer-company-name">Company Name © 2020</p>
                </div>
    
                <div className="footer-center">
    
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>aaaaa</span> aaaaa</p>
                    </div>
    
                    <div>
                        <i className="fa fa-phone"></i>
                        <p>2222222222</p>
                    </div>
    
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">support@company.com</a></p>
                    </div>
    
                </div>
    
                <div className="footer-right">
    
                    <p className="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>
    
                    <div className="footer-icons">
    
            
    
                    </div>
    
                </div>
    
            </footer>
  );
}