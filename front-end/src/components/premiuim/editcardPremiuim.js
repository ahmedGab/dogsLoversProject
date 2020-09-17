
import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import UploadPhoto from "../upload/uploadPhoto"
import {UpdateCardPemiuim} from "../../actions/cardPremiuim"
import axios from "axios"
import {deleteCard} from "../../actions/cardPremiuim"


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    background:"rgb(74, 144, 226)",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
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
    fontSize:'13px',
  },
  
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({card}) {
  const classes = useStyles();
  const [open, setOpen] =useState(false);
  const [title,setTitle]= useState(card.title)
  const [desc,setDesc]=useState(card.desc)
  const [price,setPrice]= useState(card.prix)
  const [time,setTime]= useState(card.time)
  const [img,setImg]= useState(card.photo)


  const [subtitle,setSubtitle]=useState(card.subtitle)
  const [Errorsubtitle,setErrorSubtitle]=useState("")
  const [Errortitle,setErrorTitle]=useState("")
  const [errorPic,setErrorPic]=useState("")


const pic = useSelector(state => state.photo)
const dispatch=useDispatch()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const uploadPhoto=()=>{


    const formData = new FormData()
    formData.append('photo', pic)

    axios.post("http://localhost:4000/image", formData, {withCredentials:true
    }).then(res => {
      console.log("res:"+res.data)
      setImg(res.data)
    })
   }


   
   function validation(){
    let formValid=true;
    if( title==="" || typeof title=="undefined"){
      setErrorTitle("Nom obligatoire. ")
      formValid=false;
  }
  else if(typeof title!== "undefined"  && title !==""){
     if(/^[a-z,A-zéüöêåø]/g.test(title)===false){
         setErrorTitle("Le titre doit étre des caractéres")
         formValid=false;
     }
     else if(/^[a-zA-Zéüöêåø\s]{3,40}/g.test(title)===false){
      setErrorTitle("Le titre doit étre minimum 3 caractéres")
      formValid=false;
    }
  }
     if( typeof title != "undefined" &&  /^[a-zA-Zéüöêåø\s]{3,40}/g.test(title) ){
         setErrorTitle("")
     }
     if(subtitle==="" || typeof subtitle=="undefined"){
      setErrorSubtitle("La description générale obligatoire. ")
      formValid=false;
  }
  else if(typeof subtitle!== "undefined"  && typeof subtitle!== "" ){
     if(/^[a-zA-Zéüöêåø\s]/g.test(subtitle)===false){
        setErrorSubtitle("La description générale doit étre des caractéres")
         formValid=false;
     }
     else if(  typeof subtitle != "undefined" &&  /^[a-zA-Zéüöêåø\s]{3,40}/g.test(subtitle)===false){
        setErrorSubtitle("La description générale doit étre minimum 3 caractéres")
      formValid=false;
  }
  
    }
    if( typeof subtitle!= "undefined" &&  /^[a-zA-Zéüöêåø\s]{3,40}/g.test(subtitle) ){
      setErrorSubtitle("")
  }
     
     
     
  if(/.+/gi.test(img)){
    setErrorPic("")
}
  


 return formValid
 }
      const user=JSON.parse(localStorage.getItem("userData"))
console.log(pic)
console.log(card.photo)

      function updatecard(){
        if( validation() ){
          if(uploadPhoto()){
        dispatch(UpdateCardPemiuim(card._id,title,subtitle,pic.name,time,price,desc,user._id))
          }
          else         dispatch(UpdateCardPemiuim(card._id,title,subtitle,pic.name,time,price,desc,user._id))

    }
    
    }

  return (
    <div>
      <div style={{display:'flex'}}>
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{margin:"20px"}}>
        Modifier cette carte
      </Button>
      <Button variant="contained" color="secondary" onClick={()=>dispatch(deleteCard(card._id))} style={{margin:"20px"}}>
        Supprimer
      </Button>
      </div>
      
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
           
          </Toolbar>
        </AppBar>
      <Grid container component="main" className={classes.root}>
     
     <CssBaseline />
     <Grid item xs={false} sm={4} md={4} className={classes.image} />

     <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
   
  
  <div className={classes.paper}>
    <Typography component="h1" variant="h5">
    Entrez vos données concernant votre méthode de dressage
    </Typography>
    <form className={classes.form} noValidate >
    <Grid container spacing={2}>
    <Grid  item xs={12} md={12} >
 
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
        defaultValue={title}

        onChange={e=>setTitle(e.target.value)}



     /> 
      <h6 className={classes.error}>{Errortitle}</h6>
      </Grid>
      <Grid  item xs={12} md={12} >

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="subtitle"
        label="Sous-titre"
        type="text"
        id="subtitle"
        autoComplete="current-password"
        defaultValue={subtitle}


        onChange={e=>setSubtitle(e.target.value)}
      />
             <h6 className={classes.error}>{Errorsubtitle}</h6>
             </Grid>

<Grid  item xs={12} md={3} >
<TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="prix"
        label="prix"
        type="text"
        id="prix"
        defaultValue={price}


        onChange={e=>setPrice(e.target.value)}
      /> 

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
        defaultValue={time}


        onChange={e=>setTime(e.target.value)}
      /> 

      </Grid>
      <Grid item xs={12} md={5}>
<UploadPhoto />
<h6 className={classes.error}>{errorPic}</h6>
</Grid>


<TextField
style={{width:"100%"}}        
id="standard-multiline-static"
         label="Description du méthode"
         multiline
         rows={6}
         defaultValue={desc}

         onChange={e=>setDesc(e.target.value)}

       />

 <Button
    fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
       onClick={()=>{uploadPhoto() ;updatecard()}}
      >
        Changer
      </Button> 



      
     </Grid>
    </form>
    

  </div>
     </Grid>
     
     <CssBaseline />
   </Grid>



   </Dialog>

    </div>
  );
}
