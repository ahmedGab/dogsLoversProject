
import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {Auth} from "../../actions/user"
import {AddDresseurs} from "../../actions/user"
import {getPhoto} from "../../actions/upload"



import img1 from "../../images/doglove.png"
import UploadPhoto from "../upload/uploadPhoto"
import UploadVideo from "../upload/uploadVideo"
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Snackbar from '@material-ui/core/Snackbar';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiAlert from '@material-ui/lab/Alert';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Table from '../tabletimeWorking'
import Map1 from '../map/map1'
import axios from "axios"
import Select1 from "../select/select"
import P404 from "../404/404"

import "./auth.css"





const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/1600x900/?dog)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  formControl: {
    width: '190px',
    textAlign:'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },error:{
    color:'#8d0000',
    fontSize:'13px'
  },
  
}));

export default function SignInSide() {
  const classes = useStyles();
 
  const [data,setData]=useState("")
  const [name,setName]= useState("")
  const [eroorname,setErrorName]=useState("")
  const [lastName,setLastName]= useState("")
  const [eroorlastname,setErrorLastname]=useState("")
const [email,setEmail]=useState("");
const [eroormail,setErrorMail]=useState("")
const [password,setPassword]=useState("")
const [eroorpassword,setErrorPassword]=useState("")
const [repassword,setRepassword]=useState("")
const [eroorrepassword,setErrorRepasssword]=useState("")
  const [role,setRole]= useState("")
  
 const dispatch = useDispatch()
  const errorAuth = useSelector(state => state.errorAuth);
  


  async function  getData(){
    const result =  await axios.get("http://localhost:4000/dogsLovers/users/profil",{withCredentials:true})

    setData(result.data);
  


    
}

useEffect( () => {
getData()


},[]);
 
 
  

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function validationLogin(){
  let formValid=true;
  if(typeof email==="undefined"||email===""){
    setErrorMail("Entrez votre email. ")
    formValid=false;
}
else if(typeof email!== "undefined" ){
   if(/^\w[\w|.]{5,30}@[a-z]{3,6}\.[a-z]{2,3}/g.test(email)===false){
       setErrorMail("Votre email doit comprendre entre 5 et 30 caractéres =")
       formValid=false;

   }
  }
   if(/^\w[\w|.]{5,30}@[a-z]{3,6}\.[a-z]{2,3}/g.test(email)){
       setErrorMail("")
   }
   if(password===""){
    setErrorPassword("Enter un mot de passe ")
    formValid=false;
}
else if(typeof password!== "undefined" ){
   if(/\w{8,40}/g.test(password)===false){
       setErrorPassword("Utilisez 8 caractères ou plus pour votre mot de passe")
       formValid=false;

   }
  }
   if(/\w{8,40}/g.test(password)){
       setErrorPassword("")
   }
   return formValid
}




function login(e){
  e.preventDefault()
  if (validationLogin()){
    

  dispatch(Auth(email,password))
  }


  

}




console.log(data._id)
  
  

  
 


  return (
    <div>
       { data=="error" || data.role=="dresseur" && !data.photo?
    <Grid container component="main" className={classes.root}>
     
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />

      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
    
   
   <div className={classes.paper}>
   <img className="logo_signup" src={img1}/>

     <Typography component="h1" variant="h5">
       Se connecter
     </Typography>
     <form className={classes.form} noValidate onSubmit={login}>
       {errorAuth==="email ou password sont incorrects" ?
           <Grid item xs={12} sm={6}>

              <Alert severity="error">{errorAuth} </Alert>
</Grid>
:<></>
}
       <TextField
         variant="outlined"
         margin="normal"
         required
         fullWidth
         id="email"
         label="Adresse Email"
         name="email"
         autoComplete="email"
         autoFocus
         onChange={e=>setEmail(e.target.value)}

       />
                     <h4 className={classes.error}>{eroormail}</h4>
       <TextField
         variant="outlined"
         margin="normal"
         required
         fullWidth
         name="password"
         label="Mot de passe"
         type="password"
         id="password"
         autoComplete="current-password"
         onChange={e=>setPassword(e.target.value)}
       />
                 <h4 className={classes.error}>{eroorpassword}</h4>

       <Button
         type="submit"
         fullWidth
         variant="contained"
         color="primary"
         className={classes.submit}
       >
         Se connecter
       </Button>
       <Grid container>
      
         <Grid item>
           <Link href="/register" variant="body2">
             {"Vous n'avez pas de compte? Inscrivez-vous"}
           </Link>
         </Grid>
       </Grid>
      
     </form>
     

   </div>
      </Grid>
      
      <CssBaseline />
    </Grid>
    :data._id ?
     <P404 />:<p></p> }
  </div>
  );
}