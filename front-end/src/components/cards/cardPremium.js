import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./card.css"

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
      <img  className="card-img-top"  src="https://www.vetorino.com/img/profile/veterinaire-vetorino-2.jpg" alt=""/>
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
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      <img className="card-img-bottom"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAD6UlEQVR4nO1csWrrMBR1tnxHyVA6d89PlK79hzcVOnXoFuj6tiz9gi7tZrqYxPfEpOChkCFkyuBBkGJqikFviFOcPtuRZV3baX3gLCE5kY6vpesryZZVD3oATgFcARgR0SOAVwBLAALAZ0KRfPaafGeU/ObUsqxeTW3lgW3bfdd1LwE8AAgAyIoMADy4rntp23a/6f4pYzqdngMYA3g3YEIe3wGMp9PpedP9zYXrukMiemE0IZNE9OK67rDp/n9hMpmcEdFT3UZkGPM0mUzOGjPCtu0+Ed0lg2GjZqT4SUR3tY8xjuMMAMxaYEAeZ47jDGoxg4gusJ0em+70IQoiuuA246YFHS1FIrrh8KJHRPdNd66CKfeWycTumM1ImXJnxAwA1013xiD/VI2MixZ0wnSk6A20RHSC45hNylKUnpJt2+6j3XlGVc5KJW8AblvQaG7eKpnhOM6AiD5a0GBWEtGH0q3Thge1Gk15KjTDdd1h042sm4Wlg98UHSk+Z5qRVLqM/+Fms5FF8H3fuG4cx9LzPGWtzMobtmU/o2asVqtCM4QQLLrr9bqUHhH93TMjyTuM1kB935dxHBuPjkO6cRzL+XxeVlfs5SVJdbzWW2Wz2bDoBkGgpbuX0mO7VGDMjEMhLaWUb29vLLq6YxKA8c6PHsysm0gAcj6fH7xVwjBk0dUdkxIud9FxajI6DoW0lFIuFgsWXZ2oS9NxnIGF7VKhETNUQjqKIhZdnajL4JWF7fppZTGVkJZSytVqxaKrE3UZHFnJonJlMSEES3Rw6WaRiB4tGKh7qIS0TnRw6RZwZmG7/UBbRDWky6bTZXQNmSEBLC1UnHJVQlrK7aBXJoPk0j3AwEKFtdnFYqHU6B2iKFJKnLh0FfhZyZAwDEs1XEq16ZFLV9UQrVum7FVMo2gQ5NItc8ssdX4cBIF2w4uuJpeuIpfa024URdoNl1LmDoRcuoqcaSdmVZH33MGlq8JdYjbqDPniSPvhTiVpKkLeNMmlq8gr7cd/nakxjbyslUtXhbuFK60C0Xq91m500WzApavAZaUSou/72g0vyhe4dBU4rlxk1skZVK4il24R94rMussQnucplfZ2iONYadDj0i2g+G97BDQXqjzPU7qiYRiWajSXbk507C9UmVjK9H1fBkGwl2nGcSyFEJXKe1y6aeYeIgDwbOIPjozZi93J4DpsQQNr5cGTFL9sS0R+dOzQbanKHku6TXdpdNsyM9Bt3M02pdva/R34WZv/ryuZkYqUn3A85N6IGQm6A0RZ6I6YZZvSHUL8ju6Yaga6g8w56I6656B7GUIOutdl5KB7oUoxjuaVO/8AMFxxGAjS6b4AAAAASUVORK5CYII=" alt="" />
    </Card>
  );
}
