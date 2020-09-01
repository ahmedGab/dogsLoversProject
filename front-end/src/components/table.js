
import React,{useState} from 'react';
import {useDispatch} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {lundi,lundipm,mardi,mardipm,mercredi,mercredipm,jeudi,jeudipm,vendredi,vendredipm,samedi,samedipm,dimanche,dimanchepm} from '../actions/workingHours'



function createData(jours) {
  return { jours};
}

const rows = [
  createData('Lundi'),
  createData('Mardi'),
  createData('Mercredi'),
  createData('Jeudi'),
  createData('Vendredi'),
  createData('Samedi'),
  createData('Dimanche'),


];
export default function SimpleTable() {
  const[lundi,setLundi]=useState("")
  const[lundipm,setLundipm]=useState("")
  const[mardi,setMardi]=useState("")
  const[mardipm,setMardipm]=useState("")
  const[mercredi,setMercredi]=useState("")
  const[mercredipm,setMercredipm]=useState("")
  const[Jeudi,setJeudi]=useState("")
  const[Jeudipm,setJeudipm]=useState("")
  const[Vendredi,setVendredi]=useState("")
  const[Vendredipm,setVendredipm]=useState("")
  const[Samedi,setSamedi]=useState("")
  const[Samedipm,setSamedipm]=useState("")
  const[Dimanche,setDimanche]=useState("")
  const[Dimanchepm,setDimanchepm]=useState("")

const dispatch=useDispatch()











 return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell> <h6>Jours</h6></TableCell>
            <TableCell align="right"><h6>à partir de</h6> </TableCell>
            <TableCell align="right"><h6>Jusqu'à</h6></TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow key={1}>
              <TableCell >Lundi</TableCell>
            
              <TableCell align="right"><input onChange={e=>dispatch(lundi(e.target.value))} type="time" id="appt" name="appt"
       min="09:00" max="18:00" required/></TableCell>
              <TableCell align="right"><input onChange={e=>dispatch(lundipm(e.target.value))} type="time" id="appt" name="appt"
       min="09:00" max="18:00" required/></TableCell>
      </TableRow>
      <TableRow key={2}>
              <TableCell >Mardi</TableCell>
        <TableCell align="right"><input onChange={e=>dispatch(mardi(e.target.value))} type="time" id="appt" name="appt"
       min="09:00" max="18:00" required/></TableCell>
              <TableCell align="right"><input onChange={e=>dispatch(mardipm(e.target.value))} type="time" id="appt" name="appt"
       min="09:00" max="18:00" required/></TableCell> 
       </TableRow>
       <TableRow key={3}>
              <TableCell >Mercredi</TableCell>
       <TableCell align="right"><input onChange={e=>dispatch(mercredi(e.target.value))} type="time" id="appt" name="appt"
       min="09:00" max="18:00" required/></TableCell>
              <TableCell align="right"><input onChange={e=>dispatch(mercredipm(e.target.value))} type="time" id="appt" name="appt"
       min="09:00" max="18:00" required/></TableCell>
       </TableRow>
       <TableRow key={4}>
              <TableCell >Jeudi</TableCell>
        <TableCell align="right"><input onChange={e=>dispatch(jeudi(e.target.value))} type="time" id="appt" name="appt"
       min="09:00" max="18:00" required/></TableCell>
              <TableCell align="right"><input onChange={e=>dispatch(jeudipm(e.target.value))} type="time" id="appt" name="appt"
       min="09:00" max="18:00" required/></TableCell> 
       </TableRow>
       <TableRow key={5}>
              <TableCell >Vendredi</TableCell>
       <TableCell align="right"><input onChange={e=>dispatch(vendredi(e.target.value))} type="time" id="appt" name="appt"
       min="09:00" max="18:00" required/></TableCell>
              <TableCell align="right"><input onChange={e=>dispatch(vendredipm(e.target.value))} type="time" id="appt" name="appt"
       min="09:00" max="18:00" required/></TableCell> 
       </TableRow>
       <TableRow key={6}>
              <TableCell >Samedi</TableCell>
       <TableCell align="right"><input onChange={e=>dispatch(samedi(e.target.value))} type="time" id="appt" name="appt"
       min="09:00" max="18:00" required/></TableCell>
              <TableCell align="right"><input onChange={e=>dispatch(samedipm(e.target.value))} type="time" id="appt" name="appt"
       min="09:00" max="18:00" required/></TableCell> 
       </TableRow>
       <TableRow key={7}>
              <TableCell >Dimanc</TableCell>
       <TableCell align="right"><input onChange={e=>dispatch(dimanche(e.target.value))} type="time" id="appt" name="appt"
       min="09:00" max="18:00" required/></TableCell>
              <TableCell align="right"><input onChange={e=>dispatch(dimanchepm(e.target.value))} type="time" id="appt" name="appt"
       min="09:00" max="18:00" required/></TableCell>
            </TableRow>
            
         
        </TableBody>
      </Table>
    </TableContainer>
  );
}
