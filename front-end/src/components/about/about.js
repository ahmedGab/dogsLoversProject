import React,{useState,useEffect, Fragment} from 'react'
import axios from "axios"
import Navbar from "../navbar"
import Footer from "../footer/footer"
import CircularProgress from '@material-ui/core/CircularProgress';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/core'
import './about.css'
import Button from "@material-ui/core/Button";

import recall from "../../images/Recall.png"
import Box from '@material-ui/core/Box';
import Carousel from "../carousel"
import CardP from "../cards/cardPremium"
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from "../list"
import Rating from '@material-ui/lab/Rating';
import CardDresseurs from "../cards/cardDresseurs"
import { Link } from 'react-router-dom';


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
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Dresseur=()=>{
        const classes = useStyles();


    const [data, setData] = useState("");
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


return (
  <div>
  {data   ?
    <div>
      <div  className="header"><Navbar />
</div>
{ window.location.href==="http://localhost:3000/home" ?
<>
<div className="intro">
<h1>

<strong>Développer <span>"l'intelligence cachée" </span> <br/> de votre chien</strong></h1>

<Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={6}>

           
          <Grid item xs={12}  sm={6} md={6}>
                  
          <CardP/>

        </Grid>
        <Grid item xs={12}  sm={6} md={6}>            <CardP/>
     </Grid>
 

         
          </Grid>
        </Container>
</div>
<div className="instruction">
        <h2>Connaître son chien ... </h2>
<Box display="flex" justifyContent="center" >
<Box item >

        <img src="https://theonlinedogtrainer.com/wp-content/uploads/2017/09/Aggression-1.png" alt=""/>        </Box>
        <Box item >
        <Alert severity="error">
        Aucun chien ne naît éduqué. Tous suivent naturellement leur instinct.</Alert>        </Box>
        </Box>
<Box display="flex" justifyContent="center" >
       
       <Box item >
       <img src="https://theonlinedogtrainer.com/wp-content/uploads/2017/09/Puppy.png" alt=""/>        </Box>
       <Box item >
       <Alert  className="orange">
       N'hésitez pas à parler et à  communiquer le plus possible avec votre chien. S'il ne comprend pas vos paroles, il décryptera vos sentiments rien qu'au son de votre voix     
.</Alert>       

 </Box>
     
</Box>
<Box display="flex" justifyContent="center" >
       
        <Box item >
        <img src={recall} alt="" />        </Box>
        <Box item >
        <Alert severity="info">
        le chien capable d'apprendre près de 200 mots</Alert>        </Box>
         
      
</Box>

<Box display="flex" justifyContent="center" >
       
       <Box item >
       <img src="https://theonlinedogtrainer.com/wp-content/uploads/2017/09/Barking-1.png" alt="" />        </Box>
       <Box item >
       <Alert  severity="warning">
Vous voulez que votre chien arrête d'aboyer sur les gens, les animaux ou les objets.</Alert>        </Box>
        
     
</Box>

<Box display="flex" justifyContent="center" >
<Box item >
        <img src="https://theonlinedogtrainer.com/wp-content/uploads/2017/09/Walk.png" alt="" />        </Box>
        <Box item >
        <Alert severity="success">
        Prendre un chien est en effet un engagement sur du long terme et la décision doit être prise de manière réfléchie..</Alert>        </Box>
        </Box>

      
</div>
<div className="problems">
        <h4>Comment  mettre en valeur les capacités  de votre chien et savoir l’orienter <div><u><b>pour arrêter les mauvais comportements?</b></u></div></h4>
        <h5>L'un des énoncés suivants vous semble-t-il familier…</h5>

        <Grid container >

           
<Grid   item  sm={6} md={6}>

        <img src="https://www.braintraining4dogs.com/get-btfd/assets/dog-problems.jpg" alt=""/>
        </Grid>

           
<Grid item  sm={6}  md={6}>        <ul> <h6>
                <li>Votre chien <strong>ne vous écoute pas</strong></li>
                <li>Votre chien <strong>aboie de manière incontrôlable</strong></li>
                <li>Votre chien <strong>tire la laisse</strong> </li>
                <li>Votre chien <strong>est agressif</strong></li>
                <li>Votre chien <strong>mâche des choses qu'il ne devrait pas</strong></li>
                <li>Votre chien <strong>saute</strong></li>
                <li>Vous êtes <strong>frustré</strong>  par votre chien</li>
                <li>Vous pourriez <strong>même regretter</strong> d'avoir votre chien</li>
                <li>Vous craignez de devoir abandonner votre chien en raison de problèmes de comportement que vous ne pouvez pas gérer</li>
                <li>Vous vous sentez <strong>impuissant à contrôler</strong>  votre chien</li>
                <li>Vous dites à votre chien <strong>«non» sans succès</strong></li>
                <li>Votre chien a peur de certains sons ou stimuli ou souffre d'anxiété</li>
                <li>Vous voulez un chien qui vous obéit</li>
                <li>Vous voulez un meilleur lien avec votre chien</li>
                <li>Vous voulez un meilleur lien avec votre chien</li>
                </h6>
                <br/>
                <div className="prob">
                 <h6>Presque TOUT problème de comportement auquel vous pouvez penser peut sera résolu rapidement et facilement  avec les techniques des experts éducateurs de canin qui se trouvent <strong>au dessus</strong> <EmojiEmotionsIcon/><EmojiEmotionsIcon/>. </h6>
                 </div>
                </ul>

        </Grid>
        </Grid>
</div>
<div className="premiuim_dresseur">

<Grid container >

       
<Grid   item  sm={6} md={6}>
<Rating name="size-large" value={5} size="large"  readOnly/>

      <Carousel/>       </Grid>
       <Grid   item  sm={6} md={6} item className="textPremiuimDresseurs">
      <h3>
Ce qui rend leurs système de dressage de chien si unique…</h3><br/><List />     </Grid>
        
     
</Grid></div>
</>:window.location.href==="http://localhost:3000/listesEducateurs" ? 

<Container className={classes.cardGrid} >
        <CardDresseurs/>
        </Container>:window.location.href="http://localhost:3000/error"}
<Footer/>
</div>:<CircularProgress/>

  }
   </div>
)


}
export default Dresseur