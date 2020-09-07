import React, { Component,Fragment } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon,MDBBtn } from "mdbreact";
import { Link } from 'react-router-dom';
import {logout} from "../actions/user"
import { connect } from "react-redux";
import axios from "axios"
import { CircularProgress } from "@material-ui/core";
import  "./about/about.css"
import logo from "../images/logoDL1.png"
class NavbarPage extends Component {
state = {
  isOpen: false
  ,data:""
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
async componentDidMount(){
  document.addEventListener("scroll", () => {
    const backgroundcolor = window.scrollY < 450 ? "rgba(6, 1, 68, 0.32)" : "#4a90e2";

    this.setState({ navBackground: backgroundcolor });
  })
  const result =await axios.get("http://localhost:4000/dogsLovers/users/profil",{withCredentials:true})
this.setState({data:result.data})
}
profil=()=>{
  return window.location.href=`/detailDresseur/${this.state.data._id}`
  }
  Editprofil=()=>{
    return window.location.href=`/registerDresseur`
    }
 logOut=()=>{
 localStorage.removeItem("userData") 
 return window.location.href="/home"
}

render() {
  return (
    
    <div>
      {this.state.data ?
      <MDBNavbar  dark expand="md" style={{
        backgroundColor: `${this.state.navBackground}`,
        position:"fixed",
        borderBottom:"1px solid rgba(255, 255, 255, 0.26) ",
        zIndex:"10",
        width: "100vw",// vw being viewport-width, so 70% of the width of the viewport

      
      }}>
        <MDBNavbarBrand>
          <strong className="white-text"><img className="logoNav" src={logo} alt="" /></strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink Link to="/home">A propos</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/listesEducateurs">Educateurs de canins</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Contact</MDBNavLink>
            </MDBNavItem>
            
          </MDBNavbarNav>
          <MDBNavbarNav right>
           
            
            <MDBNavItem>
{ this.state.data =="error" || this.state.data =="" ?
              <MDBDropdown basic>
                              <MDBBtn outline color="info" size="sm"  href="/login" >Se connecter</MDBBtn>

                         </MDBDropdown>:<MDBDropdown basic>
                         <MDBDropdownToggle nav caret>
                         {this.state.data.name +" "+this.state.data.lastname }
                         </MDBDropdownToggle>
                         <MDBDropdownMenu className="dropdown-default">
                         <MDBDropdownItem  onClick={this.profil}>Mon profil</MDBDropdownItem>
                         <MDBDropdownItem  onClick={this.Editprofil}>Modifier mon profil</MDBDropdownItem>


                           <MDBDropdownItem  onClick={()=>{this.logOut();this.props.Logout()}}>Se déconnecter</MDBDropdownItem>
                      
                         </MDBDropdownMenu>
                                       </MDBDropdown>
}
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
:<CircularProgress/>}
    </div>
    );
  }
}

  const mapDispatchToProps=(dispatch)=>({
  Logout:()=>dispatch(logout())
  })
export default connect(null,mapDispatchToProps)(NavbarPage);


