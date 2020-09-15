import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";

import axios from "axios"
import Navbar from "../navbar"
import Footer from "../footer/footer"
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles,withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

import CardDresseurs from "../cards/cardDresseurs"
import { Link } from 'react-router-dom';
import Spinner from "../spinner/spinner"
import CardsPremuim from "../cards/cardPremiuim"
import {getUser} from '../../actions/user.js'


// import './about.css'
const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);


const useStyles = makeStyles((theme) => ({
        icon: {
          marginRight: theme.spacing(2),
        },
       
        formControl: {
          width: '190px',
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

const Dresseur=(props)=>{
        const classes = useStyles();


    const [data, setData] = useState("");
    const [region, setRegion] = useState("Gouvernorats");
    const [name,setName]=useState("")
    const [Offset,setOffset]=useState(0)
    const [perPage,setPerPage]=useState(1)
    const [currentPage,setCurrentPage]=useState(0)



const dispatch = useDispatch()
    const user = useSelector(state => state.user);

    useEffect( () => {
       dispatch(getUser(props.match.params.id))
  
 },[]);


 return (
  <div>
    <div>
      <div  style={{backgroundImage:" linear-gradient(rgba(74, 144, 226, 0.06), rgba(74, 144, 226, 0.06)), url('https://s3.amazonaws.com/thinkific-import/5433/MHmepsSlQXWw7pIFJKTh_UK%20Where.png')"
      ,backgroundPosition:"50% 50%",
backgroundRepeat:" no-repeat",
backgroundSize: "cover",
height:'500px'
}}><Navbar />
</div>

<Container className={classes.cardGrid} >
<h3 style={{fontWeight:'400' ,margin:"30px 0",padding:"0 7px",textAlign:'center',color:'black'}}>
Les  méthodes d'entraînement et d'éducation de chiens chez<span style={{color:"rgb(74, 144, 226)",fontWeight:'800'}}> {user.ecole} </span> </h3>

     
        <CardsPremuim />
        

        </Container>
        <div style={{marginTop:"-54px"}}>
        <Footer />
        </div>
</div>
   </div>
)


}
export default Dresseur