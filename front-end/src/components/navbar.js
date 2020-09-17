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
,a:JSON.parse(localStorage.getItem("userData")),
navBackground:"#00add85c"

};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
async componentDidMount(){
  if(window.scrollY==0)
{

}  
  document.addEventListener("scroll", () => {
    const backgroundcolor = window.scrollY < 450 ? "#00add85c" : "#4a90e2";


    this.setState({ navBackground: backgroundcolor });
  })
  const result =await axios.get("http://localhost:4000/dogsLovers/users/profil",{withCredentials:true})
this.setState({data:result.data})

}
 go=()=>{
   return window.location.href=`/registerDresseur/${this.state.a._id}`
 }

 logOut=()=>{
 localStorage.removeItem("userData") 
 localStorage.removeItem("visiteur") 
 localStorage.removeItem("admin") 

 }

render() {
  const exist=JSON.parse(localStorage.getItem("userData"))
  const   admin=JSON.parse(localStorage.getItem("admin"))
  const   visiteur=JSON.parse(localStorage.getItem("visiteur"))


  return (
    
    <div>
      <MDBNavbar  dark expand="md" style={{
        backgroundColor: `${this.state.navBackground}`,
        position:"fixed",
        borderBottom:"1px solid rgba(255, 255, 255, 0.26) ",
        zIndex:"100",
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
{ !exist && !admin && !visiteur ?
              <MDBDropdown basic>
                              <MDBBtn outline color="info" size="sm"  href="/login" >Se connecter</MDBBtn>

                         </MDBDropdown>: admin && !exist &&!visiteur ?
                                                       
        <div style={{display:"flex"}} > 


        <MDBNavLink   to={`/admin`}>
        
         {admin.name +" "+admin.lastname }
         </MDBNavLink>
         <MDBDropdown basic>

<MDBDropdownToggle nav caret>
</MDBDropdownToggle>
<MDBDropdownMenu className="dropdown-default">
<Link to="/listesEducateurs">  <MDBDropdownItem style={{margin:"-25px 0 "}}  onClick={()=>{this.props.Logout();this.logOut()}}> 
                          <span style={{paddingLeft:"10px",fontWeight:400}}> Se déconnecter</span>  </MDBDropdownItem> </Link>
                         </MDBDropdownMenu>
                                       </MDBDropdown>
         </div>:!admin && !exist && visiteur.role=="visiteur" ?
                                                       
                                                       <div style={{display:"flex"}} > 
                                               
                                               
                                                       <MDBNavLink   to={`/`}>
                                                       
                                                        {visiteur.name +" "+visiteur.lastname }
                                                        </MDBNavLink>
                                                        <MDBDropdown basic>
                                               
                                               <MDBDropdownToggle nav caret>
                                               </MDBDropdownToggle>
                                               <MDBDropdownMenu className="dropdown-default">
                                               <Link to="/listesEducateurs">  <MDBDropdownItem style={{margin:"-25px 0 "}}  onClick={()=>{this.props.Logout();this.logOut()}}> 
                                                                         <span style={{paddingLeft:"10px",fontWeight:400}}> Se déconnecter</span>  </MDBDropdownItem> </Link>
                                                                        </MDBDropdownMenu>
                                                                                      </MDBDropdown>
                                                        </div>
                                         :<div style={{display:"flex"}} > 


<MDBNavLink   to={`/detailDresseur/${exist._id}`}>
<img src={`http://localhost:4000/${exist.photo}`}  style={{width:"30px",height:"30px",borderRadius:"50%"}} alt=""/> &nbsp;
 {exist.name +" "+exist.lastname }
 </MDBNavLink>
 

                         <MDBDropdown basic>

                         <MDBDropdownToggle nav caret>
                         </MDBDropdownToggle>
                         <MDBDropdownMenu className="dropdown-default">
                         <MDBDropdownItem  > <Link to ={`/detailDresseur/${exist._id}`}>Mon compte</Link></MDBDropdownItem>

                        <MDBDropdownItem onClick={this.go}> <span style={{paddingLeft:"10px",fontWeight:400}} >Modifier mon profil</span> </MDBDropdownItem>

                           
                           {exist.role=="premiuim" ?
                           <MDBDropdownItem   >
                           <Link to ={`/cardPremiuim/${exist._id}`}>Ajouter vos méthodes  </Link> </MDBDropdownItem>
                           :""
                           }
                         <Link to="/listesEducateurs">  <MDBDropdownItem style={{margin:"-25px 0 "}}  onClick={()=>{this.props.Logout();this.logOut()}}> 
                          <span style={{paddingLeft:"10px",fontWeight:400}}> Se déconnecter</span>  </MDBDropdownItem> </Link>
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


