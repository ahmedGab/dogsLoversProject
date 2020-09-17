import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  root: {
    flexGrow: 1,
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };const dispatch = useDispatch()
  const user = useSelector(state => state.user);

 




  return (
    <div>
      <Button   onClick={handleClickOpen} style={{position: 'absolute',
    top: '0',
    width: '100%',
    height: '130%',
    border: 'none',
    outline:'none'}}>
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        
         
          <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
    
            </Typography>
            <h2>
          {props.ecole}
          </h2>
          </Toolbar>
        </AppBar>
        <img  src={`http://localhost:4000/${user.coverimg}`} />
        <div className={classes.root}>

        <Grid container spacing={3} style={{
   padding:"30px 30px"
      }} >
     
      
      <Grid item xs={12} sm={4} md={4}>
      <img  src={`http://localhost:4000/${props.card.photo}`} style={{
      width:'375px',height:'355px',borderRadius:'15px'
      }} />
          
  </Grid>
      <Grid item xs={12} md={8}>
  <div style={{
    borderLeft:"3px solid #00add8",paddingLeft:"3px",color:"rgb(1, 58, 97)",fontWeight:500
    }}>  <h1> {props.card.title}</h1> 
    <h4>{props.card.subtitle}</h4>
    </div>
    <hr/>
    <h6 style={{
  fontWeight:400,    lineHeight: '23px',  textAlign: 'justify'
    }}>{props.card.desc}</h6>
  </Grid>
  </Grid>
  </div>
      </Dialog>
    </div>
  );
}