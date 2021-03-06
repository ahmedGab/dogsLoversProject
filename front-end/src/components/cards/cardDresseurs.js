import React ,{useState,useEffect}from 'react';
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Card1 from "./card"
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {getUsers} from "../../actions/user"

import Pagination from '@material-ui/lab/Pagination';


import "./card.css"




const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  formControl: {
    width: '190px'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function CardDresseur(props) {
  const classes = useStyles();
  const itemsPerPage = 9;
  const [page, setPage] = useState(1);
  const dispatch = useDispatch()

  const users = useSelector(state => state.users);

  useEffect( () => {
    dispatch( getUsers())
   
 
   
  
  },[]);

  const handleChange = (event, value) => {
    setPage(value);
  };


  return (
   <>
       

          <Grid container  className="cardsDresseurs" spacing={10} >

            {props.name !=""  ?users.slice((page - 1) * itemsPerPage, page * itemsPerPage).filter(el=>el.role=="dresseur" || el.role=="premiuim").filter(el=>props.region!="Gouvernorats"  ?
             el.region==props.region && el.ecole.includes(props.name)
             : el.ecole.includes(props.name))
             .map((user) => (
              <Grid item key={user} xs={12} sm={4} md={4} >
               <Card1 key={user} user={user} />  

              </Grid>)):
              users.slice((page - 1) * itemsPerPage, page * itemsPerPage).filter(el=>el.role=="dresseur" || el.role=="premiuim").
              filter(el=>props.region!="Gouvernorats" ?
               el.region==props.region : el.ecole.includes(props.name)).map((user) => (
              <Grid item key={user} xs={12} sm={4} md={4} >
               <Card1 key={user} user={user} />  

              </Grid>
            ))}
         
          </Grid>
          <Pagination
          count={    Math.ceil(users.length / itemsPerPage)
          }
          page={page}
          onChange={handleChange}
          defaultPage={1}
          variant="outlined"
           color="primary"        
          showFirstButton
          showLastButton />

     </>
  );
}