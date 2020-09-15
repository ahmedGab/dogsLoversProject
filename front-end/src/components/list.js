import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Check from '../images/check.png'
import "./home/home.css"
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
          <div className="listP">

      <ListItem alignItems="flex-start">
          <img src={Check} alt=""/>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Raison
              </Typography>
              {" —  Valoriser l’affection incomparable entre un maître et son chien."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
      <img src={Check} alt=""/>

        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                EFFICACE

              </Typography>
              {" —  Nos méthodes fonctionnent et elles fonctionnent le plus rapidement possible. On le sait parce qu'on les teste constamment, en jouant à des jeux d'entraînement."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
      <img src={Check} alt=""/>

        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                ENJOYABLE 
              </Typography>
              {' — La formation de chien (comme la plupart des choses dans la vie) devrait être AMUSANTE, Pour nous et le chien.'}
            </React.Fragment>
          }
        />
      </ListItem>
      </div>

    </List>
  );
}