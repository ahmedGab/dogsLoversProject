import React ,{useEffect, useState}from 'react';
import {useSelector,useDispatch} from 'react-redux'

import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Logo from "../images/thebest.png"
import "./carousel.css"
import {getUsers} from "../actions/user"
import { Link } from 'react-router-dom';



 
 
export default  function Example(props)
{
    const dispatch = useDispatch()
const users = useSelector(state => state.users)

    useEffect( () => {
        dispatch(getUsers())
        },[]);


    
 
    return (
        <Carousel>
        
            {
                             users? users.filter(el=>el.role=="premiuim").map( (item, i) => <Item key={i} item={item} /> ):""
                             
            }
        </Carousel>
    )
}
function Item(props)
{

    return (
        <Paper>
            

            <h2>{props.item.ecole}</h2>
            <img src={`http://localhost:4000/${props.item.photo}`} alt=""/>
            <Link to={`/detailDresseur/${props.item._id}`}> 
            <Button variant="outlined" fullWidth className="CheckButton">
             <strong> Découvrir !</strong></Button>
             </Link> 
            
        </Paper>
    )
}