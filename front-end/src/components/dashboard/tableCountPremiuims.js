import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import {deleteUser} from "../../actions/user"
import {GetCountsPremiuim} from "../../actions/premiuim"
import { deleteCount } from '../../actions/premiuim';
import {UpdateCountPemiuim} from '../../actions/premiuim';
import {AddDresseurs} from "../../actions/user"









export default function TableItems(props) {
  const dispatch=useDispatch()
  const countPrem = useSelector(state => state.countPrem)
  useEffect( () => {
   
    dispatch(GetCountsPremiuim())

  
  },[]);
 console.log(countPrem)
  return (
    <React.Fragment>
      <Title>Les comptes premiuim</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Nom </TableCell>
            <TableCell>Prénom</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Numéro de téléphone</TableCell>
            <TableCell>Compte</TableCell>
            <TableCell>Etat</TableCell>

            <TableCell align="right">Accepter le compte</TableCell>

            <TableCell align="right">Supprimer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {countPrem ?countPrem.map((prem) => (
            <TableRow key={prem._id}>
              <TableCell>{prem.date}</TableCell>
              <TableCell>{prem.name}</TableCell>
              <TableCell>{prem.lastname}</TableCell>
              <TableCell>{prem.email}</TableCell>
              <TableCell>{prem.tel}</TableCell>
              <TableCell>{prem.role}</TableCell>
              <TableCell>{prem.state}</TableCell>
              <TableCell align="right"><DoneOutlineIcon onClick={()=>dispatch(UpdateCountPemiuim(prem._id,prem.idUser,prem.date,prem.name,prem.lastname,prem.email,prem.tel,prem.password,"premiuim","confirmé"))} style={{color: "blue",cursor:"pointer"}} /></TableCell>

               <TableCell align="right"><DeleteIcon onClick={()=>dispatch(deleteCount(prem._id))} style={{color: "red",cursor:"pointer"}} /></TableCell>
           
            </TableRow> 
          )).reverse():<p></p>}
        </TableBody>
      </Table>
      
    </React.Fragment>
  );
}