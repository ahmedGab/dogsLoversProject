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

const Dresseur=()=>{
        const classes = useStyles();


    const [data, setData] = useState("");
    const [region, setRegion] = useState("Gouvernorats");
    const [name,setName]=useState("")
    const [Offset,setOffset]=useState(0)
    const [perPage,setPerPage]=useState(1)
    const [currentPage,setCurrentPage]=useState(0)




    const users = useSelector(state => state.users);

    async function getData(){
        const result =await axios.get("http://localhost:4000/dogsLovers/users/profil",{withCredentials:true})
        if(result.data!=="error" && result.data.lat){
          localStorage.setItem("userData",JSON.stringify(result.data))
          }
         
        setData(result.data);
       }  
    useEffect( () => {
       
        getData()
  
 },[]);


 const regions=["Tunis","Ariana","Beja","Ben Arous","Ben Guerden","Bizerte","Gabes","Gafsa","Jendouba","Kairouan","Kasserine","Kebili","Kef","mahdia","Manouba","Medenine","Monastir","Nabeul","Sfax","Sidi Bouzid","Siliana","Soussa","Tataouine","Touzeur","Zaghouane"]
 return (
  <div>
  {users  ?
    <div>
      <div  className="header"><Navbar />
</div>

<Container className={classes.cardGrid} >
<h5 style={{fontWeight:'300' ,margin:"30px 0",padding:"0 7px"}}>Vous cherchez <span style={{color:"rgb(74, 144, 226)",fontWeight:'400'}}>dressage </span> de qualité près de chez vous avec  un service qualifié pour votre chien ,<span style={{fontWeight:'700',color:"rgb(74, 144, 226)"}}> DogsLovers</span> le meilleur guide en tunisie.</h5>
<div style={{display: "flex",alignItems:"center",justifyContent:"center"
}}> <div style={{backgroundColor:"rgba(69, 103, 111, 0.5)" ,    display: "flex",alignItems:"center",padding:'10px ',borderRadius:"5px"
}}>
      <FormControl className={classes.margin}>
        <BootstrapInput 
        placeholder="Nom" 
        style={{width:"300px" }} 
        id="demo-customized-textbox" 
        onChange={e=>setName(e.target.value)}
        />
      </FormControl>
      
      <FormControl className={classes.margin}>
        <NativeSelect
        style={{width:"300px",paddingLeft:"10px" }}
          id="demo-customized-select-native"
          input={<BootstrapInput />}
          onChange={e=>setRegion(e.target.value)}
        >
          <option  selected value="Gouvernorats" >Toute la tunisie</option> 
          {regions.map(region=>
          <option value={region}>{region}</option>
          )
}
        </NativeSelect>
      </FormControl>
      </div>
    </div>
      <br/>
     
        <CardDresseurs   region={region} name={name}/>
        

        </Container>
        <div style={{marginTop:"-54px"}}>
        <Footer />
        </div>
</div>:<Spinner/>

  }
   </div>
)


}
export default Dresseur