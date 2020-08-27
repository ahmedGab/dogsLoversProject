import React ,{useState,useEffect}from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {getUsers} from "./actions/user"
import axios from "axios"
import Map from "./components/map/map"
import UploadVideo from "./components/upload/uploadVideo"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 20 
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [data,setData]=useState("")
  const dispatch = useDispatch()

  const users = useSelector(state => state.users);

  useEffect( () => {
    dispatch( getUsers())
   
    async function a(){
     const result =await axios.get("http://localhost:4000/dogsLovers/users/profil",{withCredentials:true})
     setData(result.data);
     
    }  
    a()   
   
  
  },[]);

  return (
    <div>
      <Grid container spacing={2} className={classes.root} >
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}  >
  <img src={`http://localhost:4000/${data.photo}`}  width="100vh" height="471"/> 
        </Grid>
        <Grid item xs={6}  container>
          <Paper className={classes.paper}>       <UploadVideo/>
</Paper>
        </Grid>

      </Grid>
      <Grid item xs={12}>
        <Map/>

        </Grid>
    </div>
  );
}



















