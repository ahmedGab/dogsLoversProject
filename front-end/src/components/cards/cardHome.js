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
    fontSize: '20px',
    fontWeight:400
  },
  pos: {
    marginBottom: 12,
    fontSize: '20px',
    fontWeight:400
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <img  className="card-img-top"  src="https://i.axs.com/2017/12/cesar-millan_12-11-17_7_5a2eb4a30990c.jpg" alt=""/>
      <CardContent>
        <Typography className={classes.title}  gutterBottom>
          Cesar Millan
        </Typography>
       
        <Typography className={classes.pos} >
        National Geographic
                </Typography>
        <Typography variant="body2" component="p" style={{fontWeight:'300'}}>
        <strong> “Le dressage ou apprentissage du chien </strong> s’appuie sur différentes techniques qui ont évolué avec le temps et qui tiennent compte des besoins du chien et des objectifs de l’apprentissage. <strong>Le dressage du chiot est important car il est souvent synonyme de sécurité.</strong>Les chiens d'aujourd'hui souffrent d'un manque de stimulation mental et de temps de qualité passé avec'leur peuple'. L'ennui et l'anxiété qui en résultent peuvent conduire à des problèmes physiques et comportementaux sans fin.<strong>"</strong>
          <br />
        </Typography>
      </CardContent>
      
      <img className="card-img-bottom"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAD6UlEQVR4nO1csWrrMBR1tnxHyVA6d89PlK79hzcVOnXoFuj6tiz9gi7tZrqYxPfEpOChkCFkyuBBkGJqikFviFOcPtuRZV3baX3gLCE5kY6vpesryZZVD3oATgFcARgR0SOAVwBLAALAZ0KRfPaafGeU/ObUsqxeTW3lgW3bfdd1LwE8AAgAyIoMADy4rntp23a/6f4pYzqdngMYA3g3YEIe3wGMp9PpedP9zYXrukMiemE0IZNE9OK67rDp/n9hMpmcEdFT3UZkGPM0mUzOGjPCtu0+Ed0lg2GjZqT4SUR3tY8xjuMMAMxaYEAeZ47jDGoxg4gusJ0em+70IQoiuuA246YFHS1FIrrh8KJHRPdNd66CKfeWycTumM1ImXJnxAwA1013xiD/VI2MixZ0wnSk6A20RHSC45hNylKUnpJt2+6j3XlGVc5KJW8AblvQaG7eKpnhOM6AiD5a0GBWEtGH0q3Thge1Gk15KjTDdd1h042sm4Wlg98UHSk+Z5qRVLqM/+Fms5FF8H3fuG4cx9LzPGWtzMobtmU/o2asVqtCM4QQLLrr9bqUHhH93TMjyTuM1kB935dxHBuPjkO6cRzL+XxeVlfs5SVJdbzWW2Wz2bDoBkGgpbuX0mO7VGDMjEMhLaWUb29vLLq6YxKA8c6PHsysm0gAcj6fH7xVwjBk0dUdkxIud9FxajI6DoW0lFIuFgsWXZ2oS9NxnIGF7VKhETNUQjqKIhZdnajL4JWF7fppZTGVkJZSytVqxaKrE3UZHFnJonJlMSEES3Rw6WaRiB4tGKh7qIS0TnRw6RZwZmG7/UBbRDWky6bTZXQNmSEBLC1UnHJVQlrK7aBXJoPk0j3AwEKFtdnFYqHU6B2iKFJKnLh0FfhZyZAwDEs1XEq16ZFLV9UQrVum7FVMo2gQ5NItc8ssdX4cBIF2w4uuJpeuIpfa024URdoNl1LmDoRcuoqcaSdmVZH33MGlq8JdYjbqDPniSPvhTiVpKkLeNMmlq8gr7cd/nakxjbyslUtXhbuFK60C0Xq91m500WzApavAZaUSou/72g0vyhe4dBU4rlxk1skZVK4il24R94rMussQnucplfZ2iONYadDj0i2g+G97BDQXqjzPU7qiYRiWajSXbk507C9UmVjK9H1fBkGwl2nGcSyFEJXKe1y6aeYeIgDwbOIPjozZi93J4DpsQQNr5cGTFL9sS0R+dOzQbanKHku6TXdpdNsyM9Bt3M02pdva/R34WZv/ryuZkYqUn3A85N6IGQm6A0RZ6I6YZZvSHUL8ju6Yaga6g8w56I6656B7GUIOutdl5KB7oUoxjuaVO/8AMFxxGAjS6b4AAAAASUVORK5CYII=" alt="" />
    </Card>
  );
}
