import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import{GetCardsPremiuim} from "../../actions/cardPremiuim"
import Spinner from "../spinner/spinner"
import { useParams,Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import PageCardPremiuim from "../premiuim/PageCardPremuim"
import Editcard from "../premiuim/editcardPremiuim"



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const location = useParams();
  const dispatch = useDispatch()
  const cardsPrem = useSelector(state => state.cardsPrem)
useEffect(() => {
   dispatch(GetCardsPremiuim())
},[])
const user=JSON.parse(localStorage.getItem("userData"))

  return (
    <Grid container  className="cardsDresseurs" spacing={10} >
    {cardsPrem?  cardsPrem.filter(el=>el.idUser==location.id).map((card)=>

<Grid item key={card._id} xs={12} sm={4} md={4} >

                <Card className={classes.root} style={{	marginLeft: '07px',
maxWidth: '345px',height:'450px',fontWeight:400}}>
      <CardActionArea>
        
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image={`http://localhost:4000/${card.photo}`}
          title="Contemplative Reptile"
        />
        <CardContent>
        

            <div style={{background:"white",width:"100px",height:"40px",border:"2px solid rgb(74, 144, 226)",textShadow:"rgba(0, 0, 0, 0) 0px 0px 1px",position:"absolute" ,top:"160px",left:"34%"}} > 
            <h6 style={{textAlign:"center",paddingTop:"7px",fontSize:'16px',fontWeight:500}}>{card.prix} DT</h6></div>
          <Typography style={{padding:'30px 0 0 0', fontSize:'28px',height:'100px'}} gutterBottom  align="center">
            {card.title}
          </Typography>
          <Typography style={{fontSize:'16px',fontWeight:300}}   align="center"  >
          {card.subtitle}

          </Typography>

          
        </CardContent>
        <div style={{position:'absolute' ,top:'400px',left:'42%' }} >
          <Divider style={{position:'relative' ,left:'-144px',width:'380px' }} />

      <Typography style={{paddingTop:'10px',fontSize:'16px',color:'black'}}  >
    {card.time}


    </Typography>
    </div>
    <div > <PageCardPremiuim card={card} ecole={props.ecole}/></div>
       

      </CardActionArea>

      
    </Card> {user && user.role=="premiuim" && user._id==location.id ?  <Editcard card={card}/> :"" }  </Grid>):<Spinner/>}
    </Grid>
  );
}

// {user.role=="premiuim" && user._id==location.id ?  <div style={{textAlign:"center",paddingTop:"10px"}}>  <Button  variant="contained"  onClick={(e) => { e.preventDefault(); window.location.href=`/cardPremiuim/${card._id}`; }}   color="primary">Changer le contenu de cettre carte</Button></div> :"" } 