 
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
import img1 from "../../images/doglove.png"
import UploadPhoto from "../upload/uploadPhoto"
import UploadVideo from "../upload/uploadVideo"
import Select1 from 'react-select'
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Snackbar from '@material-ui/core/Snackbar';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiAlert from '@material-ui/lab/Alert';

import axios from "axios"
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
const [email,setEmail]=useState(data.email);
const [eroormail,setErrorMail]=useState("")
const [password,setPassword]=useState("")
const [eroorpassword,setErrorPassword]=useState("")
const [repassword,setRepassword]=useState("")
const [eroorrepassword,setErrorRepasssword]=useState("")
  const [role,setRole]= useState(data.role)
  const [tel,setTel]= useState(data.tel)
  const [loc,setLoc]= useState("")
  const [type,setType]= useState(data.type)
  const [photo,setPhoto]= useState("")
  const [lat,setLat]= useState(data.lat)
  const [lon,setLon]= useState(data.lon)
  const [ecole,setEcole]= useState(data.ecole)
  const [errorLat,setErrorLat]=useState("")
  const [eroorLon,setErrorLon]=useState("")
  const [errorRole,setErrorRole]=useState("")
  const [eroorTel,setErrorTel]=useState("")
  const [errorType,setErrorType]=useState("")
  const [eroorloc,setErrorLoc]=useState("")
  const [errorphoto,setErrorPhoto]=useState("")
  const [errorEcole,setErrorEcole]=useState("")
  const[picture,setPicture]=useState("")
  const [open, setOpen] = useState(false);


console.log(lat)
console.log(email)
console.log(password)

  const handleClose = () => {
    setOpen(false);
  };



  const errorAuth = useSelector(state => state.errorAuth);
  const pic = useSelector(state => state.photo);

  const dispatch = useDispatch();
   async function  getData(){
      const result =  await axios.get("http://localhost:4000/dogsLovers/users/profil",{withCredentials:true})

      setData(result.data);
  }
 
 useEffect( () => {
        
  getData()
     
 
},[]);

const handleInput = (e) => {
  setPicture(e.target.files[0])
}
const upload=(e)=>{
  e.preventDefault()
 const formData = new FormData()
 formData.append('photo', picture)


 axios.post("http://localhost:4000/image", formData, {withCredentials:true
 }).then(res => {
     console.log(res)
 })
}
console.log(picture)
const gouvernorats=["Ariana","Béja","Ben Arous","Bizert","zaghouane"]

const options = [
  { value: 'Ariana', label: 'Ariana' },
  { value: 'Béja', label: 'Béja' },
  { value: 'Arous', label: 'Arous' },
  { value: 'Arous', label: 'Arous' },
  { value: 'Arous', label: 'Arous' },
  { value: 'Arous', label: 'Arous' }
]
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
 function validationDresseur(){
let formValid=true
if(name===""){
  setErrorName("Nom obligatoire. ")
  formValid=false;
}
else if(typeof name!== "undefined" ){
 if(/^[a-z]/gi.test(name)===false){
     setErrorName("le nom doit étre des caractéres")
     formValid=false;
 }
 else if(/^[a-z,A-z]{3,40}/g.test(name)===false){
  setErrorName("le nom doit étre minimum 3 caractéres")
  formValid=false;
}
}
 if(/^[a-z,A-z]{3,40}/g.test(name)){
     setErrorName("")
 }
 if(lastName===""){
  setErrorLastname("Prénom obligatoire. ")
  formValid=false;
}
else if(typeof lastName!== "undefined" ){
 if(/^[a-z,A-z]/g.test(name)===false){
     setErrorLastname("le nom doit étre des caractéres")
     formValid=false;
 }
 else if(/^[a-z,A-z]{3,40}/g.test(name)===false){
  setErrorLastname("le nom doit étre minimum 3 caractéres")
  formValid=false;
}

}
 if(/^[a-z,A-z]{3,40}/g.test(lastName)){
     setErrorLastname("")
 }
 if(email===""){
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

if(tel===""){
  setErrorTel("numéro de téléphone obligatoire. ")
  formValid=false;
}
else if(typeof tel!== "undefined" ){
 if(/^[0-9]{8}/g.test(tel)===false){
     setErrorTel("le numéro de téléphone doit étre 8 chiffres")
     formValid=false;
 }
}
if(/^[0-9]{8}/g.test(tel)){
  setErrorTel("")
  
}
//  if(loc===""){
//   setErrorLoc("Lieu de résidence obligatoire. ")
//   formValid=false;
// }
// else if(typeof loc!== "undefined" ){
//  if(/^[a-z]{3,10}/gi.test(loc)===false){
//      setErrorLoc("Choisir un gouvernorat existante ")
//      formValid=false;
//  }
// }
if(/^[a-z]{3,10}/gi.test(loc)){
  setErrorLoc("")
}
if(type===""){
  setErrorType("type obligatoire. ")
  formValid=false;
}
else if(typeof type!== "undefined" ){
 if(/^[a-z]+/g.test(type)===false){
     setErrorType("error ")
     formValid=false;
 }
}
if(/^[a-z]/g.test(loc)){
  setErrorLoc("")
 
}
if(/^[a-z]/g.test(type)){
  setErrorType("")
 
}


return   formValid

 }
function register(e){
  e.preventDefault()
   if (validation() && role==="visiteur" ){
     
dispatch(AddUsers(name,lastName,email,password,role))
   }
   if (validation() && role==="dresseur" ){
    
    dispatch(AddUsers(name,lastName,email,password,role,tel,lat,lon,ecole,type,pic.name))
       }
}
function login(e){
  e.preventDefault()
  if (validationLogin()){
    

  dispatch(Auth(email,password))
  }


  

}



console.log(data)
if(data.name && window.location.href==="http://localhost:3000/login"  ){
return window.location.href="/"  
  //if the token does not exist then page 404 displays

  
  }
  if(data.name && window.location.href==="http://localhost:3000/register"  ){
return window.location.href="/"  
  //if the token does not exist then page 404 displays

  
  }
  
 


if(    window.location.href==="http://localhost:3000/registerDresseur" 
){
  
  //if the token does not exist then page 404 displays
if(data==="error"){
  window.location.href="error"
}
  if(!data.name && !data.lastname && !data.email){

    return  <CircularProgress/>
    
  }
  
 
}

  
  

  
 

function registerDresseur(e){
  e.preventDefault()
  if (validationDresseur()){
   
    setOpen(true);

  //dispatch(AddDresseurs(data._id,name,lastName,email,password,role,tel,loc,type,photo))
  }
  else
  setOpen(false);

}
function ap(e){
  e.preventDefault()
  dispatch(AddDresseurs(data._id,name,lastName,data.email,password,role,tel,lat,lon,ecole,type,pic.name))
  


}
  return (
    <div>
      {data ?
    <Grid container component="main" className={classes.root}>
     
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />

      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
      {window.location.href==="http://localhost:3000/register"  ?

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
              <Link href="#" variant="body2">

              Vous avez déjà un compte? Se connecter              </Link>
            </Grid>
          </Grid>
          </form>
        </div>:  window.location.href==="http://localhost:3000/login" ? 
   
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
         <Grid item xs>
           <Link href="#" variant="body2">
             Forgot password?
           </Link>
         </Grid>
         <Grid item>
           <Link href="#" variant="body2">
             {"Vous n'avez pas de compte? Inscrivez-vous"}
           </Link>
         </Grid>
       </Grid>
      
     </form>
     

   </div>:window.location.href==="http://localhost:3000/registerDresseur"  ?

<div className={classes.paper}>

  <Typography component="h1" variant="h5">
  <PetsIcon/>
  &nbsp;

Inscrivez-vous  
&nbsp; 
<PetsIcon/>

</Typography>
  <form className={classes.form} noValidate >
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
        defaultValue={data.name}

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
        defaultValue={data.lastname}
        onChange={e => setLastName(e.target.value)}
      />
                   
                    <h4 className={classes.error}>{eroorlastname}</h4>

    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        variant="outlined"
        required
        fullWidth
        id="email"
        label="Adresse Email "
        name="email"
        autoComplete="email"
        value={data.email}

        onChange={e => setEmail(e.target.value)}
      />
        <h4 className={classes.error}>{eroormail}</h4>

    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        variant="outlined"
        required
        fullWidth
        name="Numéro de téléphone"
        label="Numéro de téléphone"
        type="text"
        id="tel"
        autoComplete="tel"
        defaultValue={data.tel}

        onChange={e => setTel(e.target.value)}
      />
      <h4 className={classes.error}>{eroorTel}</h4>

    </Grid>
    <Grid item xs={12} sm={6}>
    <TextField
        variant="outlined"
        required
        fullWidth
        name="Latitude"
        label="Latitude"
        type="text"
        id="lat"
        autoComplete="lat"
        defaultValue={data.lat}

        onChange={e => setLat(e.target.value)}
      />
          


  
{/*   <select  onChange={e=>setLoc(e.target.value)} size="3" >
<option value="none" disabled> -- Choisir votre localisation --</option>
{gouvernorats.map(el=>
  <option value={el}>{el}</option>)
}

</select>  */}


      <h4 className={classes.error}>{errorLat}</h4>

    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        variant="outlined"
        required
        fullWidth
        name="Longtitude"
        label="Longtitude"
        type="text"
        id="lng"
        autoComplete="tel"
        defaultValue={data.lon}

        onChange={e => setLon(e.target.value)}
      />
      <h4 className={classes.error}>{eroorLon}</h4>
{console.log(lon)}
{console.log(lat)}
{console.log(ecole)}

    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        variant="outlined"
        required
        fullWidth
        name="nomEcole"
        label="Nom d'école"
        type="text"
        id="nomEcole"
        autoComplete="tel"
        defaultValue={data.ecole}

        onChange={e => setEcole(e.target.value)}
      />

    </Grid>
    <Grid item xs={12} sm={6}>
    <FormControl variant="outlined" className={classes.formControl}>
<InputLabel htmlFor="outlined-age-native-simple">Type de dressage *</InputLabel>
<Select
  native
  value={type}
  onChange={e => setType(e.target.value)}
  label="Type de dressage "
      
>

  <option aria-label="None" value="" />
  <option value="chien">chien</option>
  <option value="loup">loup</option>
 
</Select>
<h4 className={classes.error}>{errorType}</h4>

</FormControl>
</Grid>
<Grid item xs={12} sm={6}>
  {/* <form onSubmit={upload}>
<input type="file" name="photo"  className="input-add" placeholder="image"   onChange={e =>{handleInput(e)}}  />
    <p  style={{color: "#d93025"}}>  </p> 
    <button type="submit"  className="upbutton">                   Upload
                </button>
                </form> */}
                <UploadPhoto/>
  
                
                
                </Grid>
<Grid item xs={12} sm={6}>
    <UploadVideo/>
</Grid>
    </Grid>
  
    <div>
         <Button
    type="submit"
    variant="contained"
    color="primary"
    className={classes.submit}
    fullWidth
    onClick={registerDresseur}
  >
    S'inscrire
  </Button>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        
        <DialogContent>
          <DialogContentText>
Pour Créer votre espace dresseur, veuillez entrer votre Mot de passe ici  </DialogContentText>
{errorAuth==="email ou password sont incorrects" ?
           <Grid item xs={12} sm={12}>

              <Alert severity="error">{errorAuth} </Alert>
</Grid>
:<></>
}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Mot de passe"
            type="password"
            fullWidth
            onChange={e=>setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">
          Annuler
          </Button>
          <Button onClick={ap} variant="contained" color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  
  <Grid container justify="flex-end">
    <Grid item>
      <Link href="#" variant="body2">

      Vous avez déjà un compte? Se connecter              </Link>
    </Grid>
  </Grid>
  </form>
</div>:window.location.href="http://localhost:3000/error" }
      </Grid>
      
      <CssBaseline />
    </Grid>:<div></div>

}
  </div>
  );
}