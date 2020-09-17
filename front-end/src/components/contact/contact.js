import React,{ useState ,useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import ClosedCaptionTwoToneIcon from '@material-ui/icons/ClosedCaptionTwoTone';
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import Map from "../map/map"
import Navbar from "../navbar"
import Footer from "../footer/footer"
import axios from 'axios'
import {AddReclamation, reponseReclamation} from "../../actions/reclamations"



const useStyles = makeStyles((theme) => ({

  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8,9),

    padding:'0 20px 30px 0 ',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)',
    borderRadius:'4px',
    [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(12,2),
        paddingBottom:'30px ',

    }


  },
  avatar: {
    width:'300px',
    height:'70px',
    boxShadow:'rgba(0, 0, 0, 0.18) 0px 5px 11px 0px, rgba(0, 0, 0, 0.15) 0px 4px 15px 0px',
    position:'relative',
    top:'-35px',
    right:'0',
    left:'09px',
    borderRadius:'4px' ,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    [theme.breakpoints.down('sm')]: {
        width:'85%',
        left:'3%',
        height:'70px',
      }
},
  form: {
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",

  },
  submit: {
      paddingTop:"30px",
    textAlign:"center"
  },
  input:{
      width:'270px',
      [theme.breakpoints.down('sm')]: {
        width:'150px',
      }
  },
  icon:{
fontSize:'42px'
  },
  textrect:{
      color:'white',
      textAlign:'center',
    
      [theme.breakpoints.down('sm')]: {
        fontSize:"3vw"
      }

  },
  map:{
    padding:'63px 10px 0 0 ' 
    ,backgroundColor:"white",
    [theme.breakpoints.down('xs')]: {
       padding:'0 15px 40px 15px'
  },
  [theme.breakpoints.up('sm')]: {
      paddingTop:"100px",
      height:'400px'
},

},
error:{
  paddingTop:'3px',
  color:"red",
  fontSize:'13px'
}
}));

export default function SignInSide() {
  const classes = useStyles();

  const [data, setData] = useState("")
const [msg,setMsg]=useState("Veuillez nous contactez")
const [color,setColor]=useState('rgb(47,30,14)')
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [objet, setObjet] = useState("")
  const [message, setMessage] = useState("")

  const [errorname,setErrorName]=useState("")
  const [errorlastname,setErrorLastname]=useState("")
const [errormail,setErrorMail]=useState("")
const [errorObjet,setErrorObjet]=useState("")
const [errorMessage,setErrorMessage]=useState("")

function validation(){
  let formValid=true;
  if(typeof name==="undefined" || name===""){
    setErrorName("Nom obligatoire. ")
    formValid=false;
}
else if(typeof name!== "undefined" ){
   if(/^[a-z,A-z]/g.test(name)===false){
       setErrorName("le nom doit étre des caractéres")
       formValid=false;
   }
   else if(/^[a-z,A-z]{3,40}/g.test(name)===false){
    setErrorName("le nom doit étre minimum 3 caractéres")
    formValid=false;
  }
}
   if( name!=undefined && /^[a-z,A-z]{3,40}/g.test(name) ){
       setErrorName("")
   }
   if(typeof lastName==="undefined" ||lastName===""){
    setErrorLastname("Prénom obligatoire. ")
    formValid=false;
}
else if(typeof lastName!== "undefined" ){
   if(/^[a-z,A-z]/g.test(lastName)===false){
       setErrorLastname("le nom doit étre des caractéres")
       formValid=false;
   }
   else if(  /^[a-z,A-z]{3,40}/g.test(lastName)===false){
    setErrorLastname("le nom doit étre minimum 3 caractéres")
    formValid=false;
}

  }
   if( lastName!=undefined &&/^[a-z,A-z]{3,40}/g.test(lastName)){
       setErrorLastname("")
   }
   if(typeof email==="undefined"||email===""){
    setErrorMail("Entrez votre email. ")
    formValid=false;
}
else if(email== "undefined" ){
   if(/^\w[\w|.]{5,30}@[a-z]{3,6}\.[a-z]{2,3}/g.test(email)===false){
       setErrorMail("Votre email doit comprendre entre 5 et 30 caractéres =")
       formValid=false;

   }
  }
   if(/^\w[\w|.]{5,30}@[a-z]{3,6}\.[a-z]{2,3}/g.test(email)){
       setErrorMail("")
   }
  

   if( /^.{5,20}$/gi.test(objet)==false ){
    setErrorObjet("Votre objet doit comprendre entre 5 et 25 lettres")
    formValid=false;
}
if( /^.{5,20}$/gi.test(objet)){
  setErrorObjet("")
}


if(/^.{5,50}$/gi.test(message)==false ){
  setErrorMessage("Votre message doit comprendre entre 5 et 50 lettres")
  formValid=false;
}
if( /^.{5,50}$/gi.test(message)){
setErrorMessage("")
}








return formValid
}


 
 
  let user=""
function getDataUsers(){
  if(JSON.parse(localStorage.getItem("userData"))){
    user=JSON.parse(localStorage.getItem("userData"))
    setName(user.name)
    setLastName(user.lastname)
    setEmail(user.email)

    }
  }

  async function  getData(){
    const result =  await axios.get("http://localhost:4000/dogsLovers/users/profil",{withCredentials:true})
   setData(result)


    
}
const dispatch = useDispatch()
const reponse = useSelector(state => state.reponse)
useEffect( () => {
  getData()
  getDataUsers()

  
  },[]);
  function addReclamation(e){
    e.preventDefault()
    if(!JSON.parse(localStorage.getItem("userData"))){
    setMsg("D'abord se connecter")
    setColor("red")
    }
    if( JSON.parse(localStorage.getItem("userData"))&& validation() &&reponse!="error"){
      let date = new Date()


    dispatch(AddReclamation( new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()))
    ,name,lastName,email,objet,message))
     setMsg("Votre message a été envoyé")
     setColor("green")

     setTimeout(() => {
      setMsg("Veuillez nous contactez")
       setColor('rgb(47,30,14)')
    
    }, 5000);
      
    }
   
  }
  
  console.log(user.name)

  return (
    
      <>
      <div className="header">
          <Navbar/>
      </div>

    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={6} md={6} lg={5} component={Paper}>
        <div className={classes.paper}>
          <div style={{backgroundColor:color}} className={classes.avatar} xs={false} >

          <EmailTwoToneIcon  className={classes.icon} style={{ marginTop:"-10px",color:"white"}}/>
             <h4 className={classes.textrect}>{msg} </h4> 

          </div>
          <Typography component="h1" variant="h5">
          </Typography>
          <form className={classes.form} noValidate>
          <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircleTwoToneIcon className={classes.icon}/>
          </Grid>
          <Grid item>
            <TextField className={classes.input}
             id="input-with-icon-grid" 
             label="Nom Complet"
             value={name +" "+lastName}
             />
             <h6 className={classes.error}>{errorname + errorlastname }</h6>
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <EmailTwoToneIcon  className={classes.icon} />
          </Grid>
          <Grid item>
            <TextField 
            className={classes.input} 
            id="input-with-icon-grid" 
            label="Adresse email"
            value={email}
            />
        <h6 className={classes.error}>{errormail }</h6>

          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <ClosedCaptionTwoToneIcon className={classes.icon} />
          </Grid>
          <Grid item>
            <TextField 
            className={classes.input} 
            id="input-with-icon-grid" 
            label="Objet" 
            onChange={e=>setObjet(e.target.value)}
            />
          <h6 className={classes.error}>{errorObjet }</h6>

          </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <CreateTwoToneIcon  className={classes.icon}/>
          </Grid>
<Grid item >

<TextField
className={classes.input}         
 id="standard-multiline-static"
          label="Message"
          multiline
          rows={4}
          onChange={e=>setMessage(e.target.value)}

        />
                  <h6 className={classes.error}>{errorMessage }</h6>

</Grid>
</Grid>
       <div className={classes.submit}>          
       <Button
              type="submit"
              variant="contained"
              style={{backgroundColor:color,width:'90px',height:'40px'}}
              onClick={(e)=>addReclamation(e)}
            >
              Envoyer
            </Button>
            </div>
          </form>
        </div>
      </Grid>
      <Grid className={classes.map} item xs={12} sm={6} md={6} lg={7}  >
          <Map lat={36.74737824720171}  
  lon={ 10.218874049034865}/>
          </Grid>
   
    </Grid>
    <Footer/>
    </>
  );
}

