import React ,{useEffect, useState}from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Navbar from "../navbar"
import "../home/home.css"
import "./premuim.css"
import dog from "../../images/pet (1).svg"
import files from "../../images/photo.svg"
import dresseur from "../../images/man.svg"
import Footer from "../footer/footer"
import ModalConfirmationPremiuim from "./dialog"


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
 
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {

    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
      borderRadius:"6px",
      boxShadow: "rgb(255, 255, 255) 0px 8px 0px 0px"

  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'gratuit',
    price: '0',
    description: ['Photo de profil et de couveture', 'Video','Description', 'Géo localisation', 'Horarire de  travail'],
  },
  {
    title: 'Premiuim',
    subheader: 'le plus populaire    ',
    price: '15',
    description: [
      'compte gratuit +',
      'Profil Gold',
      'Galerie de photo',
      'Affichage dans la page accueil',
      'Affichage dés le premier dans la liste'
    ],
    buttonText: "C'est Parti ",
    buttonVariant: 'contained',

  }
];

const parcours=[
  {
    logo:dog,title:"Ajouter vos méthodes d'éducation ainsi leurs prix et leurs descriptions "
},
{
  logo:files,title:"Ajouter multiples photos et créer votre galerie"
},{
  logo:dresseur,title:"Votre profil sera affiché dés les premiers"
}
]

export default function Pricing() {
  const classes = useStyles();

  return (
    <div style={{backgroundColor:"white"}}>
      <div  className="header">
      <Navbar/>
        </div>
        
      <Container   maxWidth="md" component="main" className={classes.heroContent}>
      <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
        Pourquoi passer à dogs Lovers Premium ?
        </Typography>
        <Grid style={{textAlign:"center"}} container spacing={10}>
   {parcours.map(el =>  <Grid className="listes_activity imgPremiuim" sm={4} xs={12}><img src={el.logo}/><h6>{el.title}</h6></Grid>   )}

            </Grid>
      </Container>
      {/* End hero unit */}
      <div style={{textAlign:"center",marginTop:"50px", backgroundColor:"#f8f8f8" }}>
      <Container style={{padding:"40px 0 100px 0"}}   maxWidth="md" component="main">
      <Typography style={{padding:"50px 0"}}  component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
      Choisissez votre offre Dogs Lovers Premium        </Typography>
     
        <Grid container spacing={5} alignItems="center">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item  key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={6}>
              <Card style={{maxWidth:"370px"}}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      DT{tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mois
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions className="btnPrem">
                {tier.title === 'Premiuim' ?
                  <ModalConfirmationPremiuim fullWidth variant={tier.buttonVariant} style={{borderRadius:"20px",backgroundColor:"rgb(29, 185, 84)"}} nom={tier.buttonText} />
                 :""
}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      </div>
      {/* Footer */}
     <Footer/>
      {/* End footer */}
    </div>
  );
}