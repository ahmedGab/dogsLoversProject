
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
import {AddCardPremiuim} from "../../actions/cardPremiuim"






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
 
  const [title,setTitle]= useState("")
  const [desc,setDesc]=useState("")
  const [price,setPrice]= useState("")
  const [subtitle,setSubtitle]=useState("")
  const [Errorsubtitle,setErrorSubtitle]=useState("")
  const [Errortitle,setErrorTitle]=useState("")
  const [errorPic,setErrorPic]=useState("")


const [time,setTime]=useState("");

  const pic = useSelector(state => state.photo)
 const dispatch = useDispatch()
  


 


useEffect( () => {


},[]);
 
 
  let user=JSON.parse(localStorage.getItem("userData"))
  const uploadPhoto=()=>{


    const formData = new FormData()
    formData.append('photo', pic)
   
    axios.post("http://localhost:4000/image", formData, {withCredentials:true
    }).then(res => {
        console.log(res)
    })
   }
   function validation(){
    let formValid=true;
    if( title===""){
      setErrorTitle("Nom obligatoire. ")
      formValid=false;
  }
  else if(typeof title!== "" ){
     if(/^[a-z,A-z]/g.test(title)===false){
         setErrorTitle("Le titre doit étre des caractéres")
         formValid=false;
     }
     else if(/^[a-z,A-z]{3,40}/g.test(title)===false){
      setErrorTitle("Le titre doit étre minimum 3 caractéres")
      formValid=false;
    }
  }
     if(  /^[a-z,A-z]{3,40}/g.test(title) ){
         setErrorTitle("")
     }
     if(subtitle===""){
      setErrorSubtitle("La description générale obligatoire. ")
      formValid=false;
  }
  else if(typeof subtitle!== "" ){
     if(/^[a-z,A-z]/g.test(subtitle)===false){
        setErrorSubtitle("La description générale doit étre des caractéres")
         formValid=false;
     }
     else if(  /^[a-z,A-z]{3,40}/g.test(subtitle)===false){
        setErrorSubtitle("La description générale doit étre minimum 3 caractéres")
      formValid=false;
  }
  
    }
     if( /^[a-z,A-z]{3,40}/g.test(subtitle)){
        setErrorSubtitle("")
     }
     
     if( pic==user.photo){
      setErrorPic(" choisissez une image")
      formValid=false;
  }
  if(/.+/gi.test(pic) && pic!=user.photo){
    setErrorPic("")
}
  


 return formValid
 }
 




function addcard(){
    if(validation())
    dispatch(AddCardPremiuim(title,subtitle,pic.name,time,price,desc,user._id))

}

  
  console.log(pic)

  


  return (
    <div>
       { user.role=="premiuim"?
    <Grid container component="main" className={classes.root}>
     
      <CssBaseline />
      <Grid item xs={false} sm={4} md={5} className={classes.image} />

      <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
    
   
   <div className={classes.paper}>
     <Typography component="h1" variant="h5">
       Ajouter une carte 
     </Typography>
     <form className={classes.form} noValidate onSubmit={(e)=>{uploadPhoto(e);addcard(e)}}>
     <Grid container spacing={2}>

       <TextField
         variant="outlined"
         margin="normal"
         required
         fullWidth
         id="title"
         label="Titre "
         name="title"
         autoComplete="title"
         autoFocus
         onChange={e=>setTitle(e.target.value)}

       />
       <h6 className={classes.error}>{Errortitle}</h6>
       <TextField
         variant="outlined"
         margin="normal"
         required
         fullWidth
         name="subtitle"
         label="Description général"
         type="text"
         id="subtitle"
         autoComplete="current-password"
         onChange={e=>setSubtitle(e.target.value)}
       />
<Grid  item xs={12} md={4} >
<TextField
         variant="outlined"
         margin="normal"
         required
         fullWidth
         name="prix"
         label="prix"
         type="text"
         id="prix"
         autoComplete="current-password"
         onChange={e=>setPrice(e.target.value)}
       /> 
       <h6 className={classes.error}>{Errorsubtitle}</h6>

       </Grid>
       <Grid  item xs={12} md={4} >
<TextField
         variant="outlined"
         margin="normal"
         required
         fullWidth
         name="temps"
         label="Durée de serie"
         type="text"
         id="time"
         autoComplete="current-password"
         onChange={e=>setTime(e.target.value)}
       /> 

       </Grid>
       <Grid item xs={12} md={4}>
<UploadPhoto />
<h6 className={classes.error}>{errorPic}</h6>
</Grid>


<TextField
style={{width:"100%"}}        
 id="standard-multiline-static"
          label="Message"
          multiline
          rows={6}
          onChange={e=>setDesc(e.target.value)}

        />



       <Button
     fullWidth
         variant="contained"
         color="primary"
         className={classes.submit}
         onClick={(e)=>{uploadPhoto(e);addcard(e)}}
       >
         Ajouter
       </Button>
       
      </Grid>
     </form>
     

   </div>
      </Grid>
      
      <CssBaseline />
    </Grid>
    :<P404/> }
  </div>
  );
}