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
import {getUsers} from "./actions/user"




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


export default function Album() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  const dispatch = useDispatch()

  const users = useSelector(state => state.users);

  useEffect( () => {
    dispatch( getUsers())
   
 
   
  
  },[]);
  console.log(users)



  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <React.Fragment>
      <CssBaseline />
     
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h5" style={{ marginTop: "50px" }} variant="h4" align="center" color="textPrimary" gutterBottom>
              Chercher un ou des dresseurs selon votre choix
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              
            </Typography>
            <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Localisation *</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Localisation"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={6} sm={6}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Type de dressage *</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Type de dressage "
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
            </Grid>
            </Grid>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {users.map((user) => (
              <Grid item key={user} xs={12} sm={6} md={4}>
               <Card1 user={user} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
     
    </React.Fragment>
  );
}