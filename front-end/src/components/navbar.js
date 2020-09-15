import React, { Component,Fragment } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon,MDBBtn } from "mdbreact";
import { Link } from 'react-router-dom';
import {logout} from "../actions/user"
import { connect } from "react-redux";
import axios from "axios"
import { CircularProgress } from "@material-ui/core";
import  "./home/home.css"
import logo from "../images/logoDL1.png"
class NavbarPage extends Component {
state = {
  isOpen: false
  ,data:""
,a:JSON.parse(localStorage.getItem("userData"))};
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
 return window.location.href="/"
}

render() {
  const exist=JSON.parse(localStorage.getItem("userData"))

  return (
    
    <div>
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
            <MDBNavItem className={window.location.href === 'http://localhost:3000/' ? 'active' : ''}>
              <MDBNavLink  to="/">Accueil</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className={window.location.href === 'http://localhost:3000/listesEducateurs' ? 'active' : ''}>  
              <MDBNavLink  to="/listesEducateurs">Educateurs de canins</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className={window.location.href === 'http://localhost:3000/contact' ? 'active' : ''} >
              <MDBNavLink  to="/contact">Contact</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className={window.location.href === 'http://localhost:3000/premiuim' ? 'active' : ''} >
              <MDBNavLink  to="/premiuim">Premiuim</MDBNavLink>
            </MDBNavItem>
            
          </MDBNavbarNav>
          <MDBNavbarNav right>
           
            
            <MDBNavItem>
{ !exist ?
              <MDBDropdown basic>
                              <MDBBtn outline color="info" size="sm"  href="/login" >Se connecter</MDBBtn>

                         </MDBDropdown>: 
                                         <div style={{display:"flex"}} > 


<MDBNavLink   to={`/detailDresseur/${exist._id}`}>
<img src={`http://localhost:4000/${exist.photo}`}  style={{width:"30px",height:"30px",borderRadius:"50%"}} alt=""/> &nbsp;
 {exist.name +" "+exist.lastname }
 </MDBNavLink>

                         <MDBDropdown basic>

                         <MDBDropdownToggle nav caret>
                         </MDBDropdownToggle>
                         <MDBDropdownMenu className="dropdown-default">
                         <MDBDropdownItem  onClick={this.Editprofil}>Mon compte</MDBDropdownItem>

                         <MDBDropdownItem  onClick={this.Editprofil}>Modifier mon profil</MDBDropdownItem>
                         

                           
                           {exist.role=="premiuim" ?
                           <Link to ={`/cardPremiuim/${exist._id}`}><MDBDropdownItem   >Ajouter des cartes et galerie d'images</MDBDropdownItem>  </Link>
                           :""
                           }
                           <MDBDropdownItem  onClick={()=>{this.logOut();this.props.Logout()}}>Se déconnecter</MDBDropdownItem>
                         </MDBDropdownMenu>
                                       </MDBDropdown>
                                       </div>

}
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>

    </div>
    );
  }
}

  const mapDispatchToProps=(dispatch)=>({
  Logout:()=>dispatch(logout())
  })
export default connect(null,mapDispatchToProps)(NavbarPage);


