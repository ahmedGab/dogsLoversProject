import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MonetizationOnTwoToneIcon from '@material-ui/icons/MonetizationOnTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import {Link} from "react-router-dom"

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/"><ListItemText primary="DogsLovers" /></Link> 
    </ListItem>
    
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
   <Link to="/admin/users"><ListItemText primary="Utilisateurs" /></Link>   
    </ListItem>
    <ListItem button>
      <ListItemIcon>
<MonetizationOnTwoToneIcon />
      </ListItemIcon>
      <Link to="/admin/premiuim">  <ListItemText primary="Compte premiuim" /> </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EmailTwoToneIcon />
      </ListItemIcon>
      <Link to="/admin/claim"> <ListItemText primary="Réclamations" />
  </Link>  </ListItem>
  
  </div>
);

