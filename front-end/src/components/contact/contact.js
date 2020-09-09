import React from 'react';
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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    backgroundColor: '#b6a88e ',
    width:'300px',
    height:'70px',
    boxShadow:'rgba(0, 0, 0, 0.18) 0px 5px 11px 0px, rgba(0, 0, 0, 0.15) 0px 4px 15px 0px',
    position:'relative',
    top:'-35px',
    right:'0',
    borderRadius:'4px' ,
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
fontSize:'50px'
  },
  textrect:{
      color:'white',
      textAlign:'center',
      marginTop: '-32px',
      [theme.breakpoints.down('sm')]: {
        fontSize:"5vw"
      }

  },
  map:{
    padding:'63px 10px 0 0 ' 
    ,backgroundColor:"white",
    [theme.breakpoints.down('xs')]: {
       padding:'0 15px 40px 15px'
  },
  [theme.breakpoints.up('sm')]: {
      paddingTop:"100px"
}
}
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
      <>
      <div className="header">
          <Navbar/>
      </div>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={6} md={6} lg={5} component={Paper}>
        <div className={classes.paper}>
          <div className={classes.avatar} xs={false} >
          <EmailTwoToneIcon  className={classes.icon} style={{color:"white"}}/>
             <h3 className={classes.textrect}>Contacter </h3> 

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
             label="Nom" />
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
            label="Adresse email" />
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
            label="Sujet" />
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
          defaultValue=""
        />
</Grid>
</Grid>
       <div className={classes.submit}>          
       <Button
              type="submit"
              variant="contained"
              style={{backgroundColor:"#b6a88e ",width:'90px',height:'40px'}}
            >
              Envoyer
            </Button>
            </div>
        
           
           
            
          </form>
        </div>
      </Grid>
      <Grid className={classes.map} item xs={12} sm={5} md={6} lg={7}  >
          <Map lat={36.74737824720171}  
  lon={ 10.218874049034865}/>
          </Grid>
   
    </Grid>
    <Footer/>
    </>
  );
}

