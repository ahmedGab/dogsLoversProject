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
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiPeople';

import "./card.css"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '345px',
height:'400px'
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
     <Card className={classes.root} style={{textAlign:"center"}}>
         
         <CardHeader
   
         
           title={user.ecole}
   
         />
         <CardMedia
           className={classes.media}
           image={"http://localhost:4000/"+user.photo}
           title="Paella dish"
         />
         <CardContent>
           <Typography variant="body2" color="textSecondary" component="p">
           <div style={{display:"flex",justifyContent:"space-between",fontWeight:"500",height:"60px"}}>

          <h6> <PhoneIcon/>{user.tel} </h6>
          <h6> <RoomIcon/>{user.region} </h6>
          <h6><EmojiEmotionsIcon/>{user.name} {user.lastname}</h6>
           </div>
           </Typography>
         </CardContent>
         <CardActions>
       <Link to={{pathname:`/detailDresseur/${id}`}}> <Button    style={{backgroundColor:"#45676f",color:"white",marginBottom:''}} >Plus de détails
   </Button></Link> 
         </CardActions>
       </Card>
   
    
  );
}