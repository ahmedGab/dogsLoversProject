import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Logo from "../images/thebest.png"
import "./carousel.css"


 
 
export default  function Example(props)
{

    var items = [
       
        {
            name: "Random Name #1",
            description: "https://i2.wp.com/metro.co.uk/wp-content/uploads/2019/03/SEC_59085628.jpg?quality=90&strip=all&zoom=1&resize=644%2C338&ssl=1"
        },
        {
            name: "Random Name #2",
            description: "https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/08/PRC_81848847.jpg?quality=90&strip=all&zoom=1&resize=644%2C338&ssl=1"
        }
    ]
 
    return (
        <Carousel>
        
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
function Item(props)
{

    return (
        <Paper>

            <h2>{props.item.name}</h2>
            <img src={props.item.description} alt=""/>
 
            <Button variant="outlined" fullWidth className="CheckButton">
               <strong> Check it out! </strong>
            </Button>
        </Paper>
    )
}