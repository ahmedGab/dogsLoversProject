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
import {deleteUser} from "../../actions/user"
import {getUsers} from "../../actions/user"









export default function TableItems(props) {
  const dispatch=useDispatch()

  const users = useSelector(state => state.users);

  useEffect( () => {
   
 
    dispatch( getUsers())

  
  },[]);
  return (
    <React.Fragment>
      <Title>Les utilisateurs</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Nom</TableCell>
            <TableCell>Prénom</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Téléphone</TableCell>
            <TableCell>Page facebook</TableCell>
            <TableCell>Chaine youtube</TableCell>

            <TableCell align="right">Supprimer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {users ? users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.date}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.lastname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
              <TableCell>{user.tel}</TableCell>
              <TableCell>{user.fb}</TableCell>
              <TableCell>{user.youtube}</TableCell>


               <TableCell align="right"><DeleteIcon onClick={()=>dispatch(deleteUser(user._id))} style={{color: "red",cursor:"pointer"}} /></TableCell>
           
            </TableRow> 
          )):<div></div>}
        </TableBody>
      </Table>
      
    </React.Fragment>
  );
}