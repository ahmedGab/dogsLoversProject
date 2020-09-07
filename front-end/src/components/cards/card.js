import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {getUser} from "../../actions/user"
import { Link } from 'react-router-dom';

import "./card.css"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({user}) {
  const classes = useStyles();
  const [expanded, setExpanded] =useState(false);
  const [id, setId] =useState(user._id);

const dispatch = useDispatch()
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
     <Card className={classes.root}>
         
         <CardHeader
   
         
           title={user.ecole}
   
           subheader={user.region}
         />
         <CardMedia
           className={classes.media}
           image={"http://localhost:4000/"+user.photo}
           title="Paella dish"
         />
         <CardContent>
           <Typography variant="body2" color="textSecondary" component="p">
             This impressive paella is a perfect party dish and a fun meal to cook together with your
             guests. Add 1 cup of frozen peas along with the mussels, if you like.
           </Typography>
         </CardContent>
         <CardActions>
       <Link to={{pathname:`/detailDresseur/${id}`}}> <Button    style={{backgroundColor:"#45676f",color:"white"}} >Plus de détails
   </Button></Link> 
         </CardActions>
       </Card>
   
    
  );
}