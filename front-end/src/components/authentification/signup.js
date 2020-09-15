
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
import PetsIcon from '@material-ui/icons/Pets';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {AddUsers} from "../../actions/user"
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
  const [name,setName]= useState(data.name)
  const [eroorname,setErrorName]=useState("")
  const [lastName,setLastName]= useState(data.lastname)
  const [eroorlastname,setErrorLastname]=useState("")
const [email,setEmail]=useState("");
const [eroormail,setErrorMail]=useState("")
const [password,setPassword]=useState("")
const [eroorpassword,setErrorPassword]=useState("")
const [repassword,setRepassword]=useState("")
const [eroorrepassword,setErrorRepasssword]=useState("")
  const [role,setRole]= useState(data.role)
  const [tel,setTel]= useState(data.tel)
  const [loc,setLoc]= useState("")
  const [fb,setFb]= useState(data.facebook)
  const [desc,setDesc]= useState(data.desc)

  const [youtube,setYoutube]= useState(data.youtube)

  const [img,setImg]= useState(data.photo)
  const[map,setMap]=useState(data.lat)
  const [lat,setLat]= useState(data.lat)
  const [lon,setLon]= useState(data.lon)
  const [ecole,setEcole]= useState(data.ecole)
  const [errorLat,setErrorLat]=useState("")
  const [eroorLon,setErrorLon]=useState("")
  const [errorRole,setErrorRole]=useState("")
  const [eroorTel,setErrorTel]=useState("")
  const [errorDesc,setErrorDesc]=useState("")
  const [errorloc,setErrorLoc]=useState("")
  const [errorphoto,setErrorPhoto]=useState("")
  const [errorEcole,setErrorEcole]=useState("")
  const [errorVideo,setErrorVideo]=useState("")
  const [errorMap,setErrorMap]=useState("")
  const [errorImg,setErrorImg]=useState("")

  




  



  const dispatch = useDispatch();
   async function  getData(){
      const result =  await axios.get("http://localhost:4000/dogsLovers/users/profil",{withCredentials:true})

      setData(result.data);
  
      
  }
  useEffect( () => {
    getData()
     
    
    },[]);
    

if(data=="error"){
  localStorage.clear()
}





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
     if(password !==repassword){
         setErrorRepasssword(" Les mots de passe ne correspondent pas. Veuillez réessayer. ")
         formValid=false;
 
     }
     if(password === repassword){
         setErrorRepasssword("")
     }
     if(typeof role==="undefined" || role===""){
      setErrorRole(" choisissez votre role ")
      formValid=false;
  }
  if(role!=undefined && /^[a-z]/gi.test(role)){
    setErrorRole("")
}
  


 return formValid
 }
 





  




  
  
function register(e){
  e.preventDefault()
   if (validation() ){
     
dispatch(AddUsers(name,lastName,email,password,role))
 
}
}
  
 





  return (
    <div>
          {  data=="error"?

    <Grid container component="main" className={classes.root}>
     
      <CssBaseline />
      <Grid item xs={false} sm={4} md={5} className={classes.image} />

      <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>

        <div className={classes.paper}>

          <Typography component="h1" variant="h4">
          <PetsIcon/>
          &nbsp;

Inscrivez-vous  
&nbsp; 
<PetsIcon/>

 </Typography>
          <form className={classes.form} noValidate onSubmit={register}>
          <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
          <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nom"
                autoFocus
                onChange={e => setName(e.target.value)}
              />
              <h4 className={classes.error}>{eroorname}</h4>

            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Prénom"
                name="lastName"
                autoComplete="lname"
                onChange={e => setLastName(e.target.value)}
              />
                            <h4 className={classes.error}>{eroorlastname}</h4>

            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Adresse Email "
                name="email"
                autoComplete="email"
                onChange={e => setEmail(e.target.value)}
              />
                <h4 className={classes.error}>{eroormail}</h4>

            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
              />
              <h4 className={classes.error}>{eroorpassword}</h4>

            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Confirmer le mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => setRepassword(e.target.value)}

              />
                            
              <h4 className={classes.error}>{eroorrepassword}</h4>

            </Grid>
            <Grid item xs={12}>
            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Type de dressage *</InputLabel>
        <Select
          native
          value={role}
          onChange={e => setRole(e.target.value)}
          label="Type de dressage "
         
        
        >
          <option aria-label="None" value="" />
          <option value="visiteur">Visiteur</option>
          <option value="dresseur">Dresseur</option>
         
        </Select>
        
        <h4 className={classes.error}>{errorRole}</h4>

      </FormControl>
      </Grid>
            </Grid>
          
            <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            fullWidth
          >
            S'inscrire
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">

              Vous avez déjà un compte? Se connecter              </Link>
            </Grid>
          </Grid>
          </form>
        </div>
      </Grid>
      
      <CssBaseline />
    </Grid>:data._id ?
     <P404 />:<p></p>}
  </div>
  );
}