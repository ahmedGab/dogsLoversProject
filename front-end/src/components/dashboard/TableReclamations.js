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
import {GetReclamations} from "../../actions/reclamations"
import { deleteRec } from '../../actions/reclamations';










export default function TableItems() {
  const dispatch=useDispatch()
  const recs = useSelector(state => state.recs)
  useEffect( () => {
   
 
    dispatch( GetReclamations())

  
  },[]);
  console.log(recs)
  return (
    <React.Fragment>
      <Title>les réclamations</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Nom </TableCell>
            <TableCell>Prénom</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Objet</TableCell>
            <TableCell>Message</TableCell>

            <TableCell align="right">Supprimer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {recs?recs.map((rec) => (
            <TableRow key={rec._id}>
              <TableCell>{rec.date}</TableCell>
              <TableCell>{rec.name}</TableCell>
              <TableCell>{rec.lastname}</TableCell>
              <TableCell>{rec.email}</TableCell>
              <TableCell>{rec.subject}</TableCell>
              <TableCell>{rec.message}</TableCell>
               
               <TableCell align="right"><DeleteIcon  onClick={()=>dispatch(deleteRec(rec._id))} style={{color: "red",cursor:"pointer"}} /></TableCell>
           
            </TableRow> 
          )).reverse():<p></p>}
        </TableBody>
      </Table>
      
    </React.Fragment>
  );
}