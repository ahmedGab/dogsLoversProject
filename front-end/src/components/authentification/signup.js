
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
import Table from '../table'
import Map1 from '../map/map1'
import axios from "axios"
import Select1 from "../select/select"
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

  


  const[file,setFile]=useState("")
  const[pict,setPic]=useState("")

  const[picture,setPicture]=useState("")
  const[video,setVideo]=useState("")

  const [open, setOpen] = useState(false);



  const handleClose = () => {
    setOpen(false);
  };



  const errorAuth = useSelector(state => state.errorAuth);
  const pic = useSelector(state => state.photo);
  const videos = useSelector(state => state.video);
  const Lat=useSelector(state =>state.lat)
  const Lng=useSelector(state =>state.lng)
  const region=useSelector(state =>state.loc)
  const lundi=useSelector(state =>state.lundi)
  const lundipm=useSelector(state =>state.lundipm)
  const mardi=useSelector(state =>state.mardi)
  const mardipm=useSelector(state =>state.mardipm)
  const mercredi=useSelector(state =>state.mercredi)
  const mercredipm=useSelector(state =>state.mercredipm)
  const jeudi=useSelector(state =>state.jeudi)
  const jeudipm=useSelector(state =>state.jeudipm)
  const vendredi=useSelector(state =>state.vendredi)
  const vendredipm=useSelector(state =>state.vendredipm)
  const samedi=useSelector(state =>state.samedi)
  const samedipm=useSelector(state =>state.samedipm)
  const dimanche=useSelector(state =>state.dimanche)
  const dimanchepm=useSelector(state =>state.dimanchepm)




  const dispatch = useDispatch();
   async function  getData(){
      const result =  await axios.get("http://localhost:4000/dogsLovers/users/profil",{withCredentials:true})

      setData(result.data);
      setEmail(result.data.email)
      setDesc(result.data.desc)
      setEcole(result.data.ecole)
      setTel(result.data.tel)


      
  }
 
  useEffect( () => {
getData()
 

},[]);

// const handleInput = (e) => {
//   setPicture(e.target.files[0])
// }
// const upload=(e)=>{
//   e.preventDefault()
//  const formData = new FormData()
//  formData.append('photo', picture)


//  axios.post("http://localhost:4000/image", formData, {withCredentials:true
//  }).then(res => {
//      console.log(res)
//  })
// }

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
 console.log(desc)
 console.log(tel)

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

if(tel==="" || tel===undefined){
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
 if(region==="" ||region===undefined){
  setErrorLoc("Votre gouvernorat obligatoire. ")
  formValid=false;
}
else if(typeof region!== "undefined" ){
 if(/^[a-z,A-Z]{3,11}/gi.test(region)===false){
     setErrorLoc("Choisir un gouvernorat existante ")
     formValid=false;
 }
}
if(/^[a-z]{3,11}/gi.test(region)){
  setErrorLoc("")
}

if( pic===null){
  setErrorImg("Choisir une image  ")
  formValid=false;
}
else if( pic!==null){

if(/.+/gi.test(pic)){
  setErrorImg("")
}
}

if(videos==="" || videos===null){
  setErrorVideo("Choisir un video  ")
  formValid=false;
}
else if(typeof videos!== null ){
 
 if(/^.{2,7}/gi.test(videos)){
  setErrorVideo("")
}
}
console.log(videos)

if(Lat===""){
  setErrorMap("choisir votre localisation ")
  formValid=false;
}
else if(typeof Lat!== "" ){
  if(/^.+/gi.test(Lat)){
    setErrorMap("")
  }
 
}

//
if(ecole==="" ||ecole==undefined){
  setErrorEcole("Ecrire le nom de votre établissement  ")
  formValid=false;
}

else if(typeof desc!== "undefined"  ){

 if(/^.{2,}/gi.test(ecole)){
  setErrorEcole("")
}
}
if(desc==="" ||desc===undefined ){
  setErrorDesc("Ecrire une description concernat votre établissement  ")
  formValid=false;
}
else if(typeof desc!== "undefined"  ){
 if(/^.{3,}/gi.test(desc)===false){
     setErrorDesc("Ecrire une description a propos vous ou votre école ")
     formValid=false;
 }

if(/^.{3,}/gi.test(desc)){
  setErrorDesc("")
}
}

return   formValid

 }

function register(e){
  e.preventDefault()
   if (validation() && role==="visiteur" ){
     
dispatch(AddUsers(name,lastName,email,password,role))
   }
   if (validation() && role==="dresseur" ){
    
    dispatch(AddUsers(name,lastName,email,password,role))
       }
}
function login(e){
  e.preventDefault()
  if (validationLogin()){
    

  dispatch(Auth(email,password))
  }


  

}



console.log(pic)
console.log(videos)


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
// const uploadSingleFile=(e)=> {
//   setFile(e.target.files[0])
//   setPic(URL.createObjectURL(e.target.files[0]))

// }
// const uploadSingleVideo=(e)=>{
//   setVideo(e.target.files[0])

// }
//upload photo
const uploadPhoto=(e)=>{


 const formData = new FormData()
 formData.append('photo', pic)

 axios.post("http://localhost:4000/image", formData, {withCredentials:true
 }).then(res => {
     console.log(res)
 })
}

//uploadvideo
const uploadVideo=(e)=>{


        const formData = new FormData()
        formData.append('video', videos)
    
        axios.post("http://localhost:4000/video", formData, {withCredentials:true
        }).then(res => {
            console.log(res)
        })
      }
     
function ap(){
    dispatch(AddDresseurs(data._id,name,lastName,email,password,role,tel,Lat,Lng,ecole,region,fb,youtube,videos.name,desc,pic.name    ,lundi,lundipm,mardi,mardipm,mercredi,mercredipm,jeudi,jeudipm,vendredi,vendredipm,samedi,samedipm,dimanche,dimanchepm))


}


  return (
    <div>
      {data ?
    <Grid container component="main" className={classes.root}>
     
      <CssBaseline />
      <Grid item xs={false} sm={4} md={5} className={classes.image} />

      <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
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
           <Link href="/register" variant="body2">
             {"Vous n'avez pas de compte? Inscrivez-vous"}
           </Link>
         </Grid>
       </Grid>
      
     </form>
     

   </div>:window.location.href==="http://localhost:3000/registerDresseur"  ?

<div className={classes.paper}>

<Typography className="dresseurInsc" component="h1" variant="h5">
<PetsIcon/>
&nbsp;

Espace Dresseur&nbsp; 
<PetsIcon/>
<h6>Completer vos cordonnées pour que ton profil sera affiché</h6>
</Typography>
<form className={classes.form} noValidate >
<Grid container spacing={2}>
<Grid item xs={12} sm={4}>
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
  <Grid item xs={12} sm={4}>
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
  <Grid item xs={12} sm={4}>
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
  <Grid item xs={12} sm={4}>
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

  <Grid item xs={12} sm={4}>
    <TextField
      variant="outlined"
      required
      fullWidth
      name="nomEcole"
      label="Nom d'établissement"
      type="text"
      id="nomEcole"
      autoComplete="tel"
      defaultValue={data.ecole}

      onChange={e => setEcole(e.target.value)}
    />
    <h4 className={classes.error}>{errorEcole}</h4>

  </Grid>
  <Grid item xs={12}  sm={4}>
 <Select1/>
 <h4 className={classes.error}>{errorloc}</h4>  </Grid>

  <Grid item xs={12}  sm={4}>
    <TextField
      variant="outlined"
      required
      fullWidth
      name="Page Facebook"
      label="Facebook"
      type="Page Facebook"
      id="nomEcPage Facebookole"
      autoComplete="fb"
      defaultValue={data.fb}

      onChange={e => setFb(e.target.value)}
    />

  </Grid>
  <Grid item xs={12}  sm={4}>
    <TextField
      variant="outlined"
      required
      fullWidth
      name="Youtube"
      label="Chaine Youtube"
      type="Youtube"
      id="Youtube"
      autoComplete="you"
      defaultValue={data.youtube}

      onChange={e => setYoutube(e.target.value)}
    />

  </Grid>
  <Grid item xs={12} sm={4}>
  {/* <div class="wrap-custom-file video">
  <input type="file" name="video" id="video"     onChange={uploadSingleVideo} accept=".mp4, .avi, .mov,.mpg"  />
  <label  for="video">
<PhotoLibraryIcon/>
&nbsp;
    <span>Importer un video</span>
  </label>
</div> 
<h4 className={classes.error}>{errorVideo}</h4> */
}
<UploadVideo/>
<h4 className={classes.error}>{errorVideo}</h4> 
              </Grid>
             
<Grid item xs={12} sm={8}>
<div className="textarea">
<textarea onChange={e=>setDesc(e.target.value)} rows="5" defaultValue={data.desc} aria-invalid="false" placeholder="description" className="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline"></textarea>
</div>
<h4 className={classes.error}>{errorDesc}</h4>
</Grid>
{/* <form onSubmit={upload}>
<input type="file" name="photo"  className="input-add" placeholder="image"   onChange={e =>{handleInput(e)}}  />
  <p  style={{color: "#d93025"}}>  </p> 
  <button type="submit"  className="upbutton">                   Upload
              </button>
              </form> */}
             
             <Grid item xs={12} sm={4}>

{/* <form >
              <div className="form-group preview">
                  {imgPreview}
              </div>

              
          </form >    

          <div class="wrap-custom-file">
  <input type="file" name="image2" id="image2" onChange={pic} accept=".gif  aqsdfghj:+m-p
  "".jpg, .png" />
  <label  for="image2">
<PhotoLibraryIcon/>
&nbsp;
    <span>Importer une image</span>
  </label>
</div>  */}
<UploadPhoto/>
<h4 className={classes.error}>{errorImg}</h4> 
   
              </Grid>


  <Grid item xs={12} md={6} sm={12}>
    <p>Horaires de travail</p>
<Table />
</Grid>
<Grid item xs={12} md={6} sm={12}>
<p>Cliquer sur l'emplacement de votre établissement
</p>
{data.lat && data.lon ?
<Map1 zoom={8} center={{ lat: data.lat, lng: data.lon }} />:
<Map1 zoom={8} center={{ lat: 36.80278	, lng: 10.17972 }} />
}
<h4 className={classes.error}>{errorMap}</h4> 
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
Valider
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
        
        <Button onClick={()=>{uploadPhoto();uploadVideo(); ap()
}} variant="contained" color="primary">
          Confirmer


        </Button>
      </DialogActions>
    </Dialog>
  </div>


</form>
</div>:window.location.href="http://localhost:3000/error" }
      </Grid>
      
      <CssBaseline />
    </Grid>:<div></div>

}
  </div>
  );
}