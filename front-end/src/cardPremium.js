import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <img className="card-img-top" src="https://www.vetorino.com/img/profile/veterinaire-vetorino-2.jpg" alt=""/>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
       
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          <strong>“Les chiens d'aujourd'hui souffrent d'un manque de stimulation mentale</strong> et de temps de qualité passé avec'leur peuple'. L'ennui et l'anxiété qui en résultent peuvent conduire à des problèmes physiques et comportementaux sans fin. Le Brain Training for Dogs est la solution! De manière claire et concise, Adrienne Farricelli guide les propriétaires à travers une série d'énigmes et d'exercices qui mettront au défi et divertiront les chiens de tous niveaux.”
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
