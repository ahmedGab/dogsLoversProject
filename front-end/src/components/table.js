
import React,{useState,useEffect} from 'react';
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
import axios from "axios"



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
       const[data,setData]=useState("")
       const [role,setRole]=useState("")

       const [errorRole,setErrorRole]=useState("")
const dispatch=useDispatch()


async function  getData(){
       const result =  await axios.get("http://localhost:4000/dogsLovers/users/profil",{withCredentials:true})
   
       setData(result.data);
   }
   
   useEffect( () => {
         
   getData()
      
   
   },[]);

  




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
            
              <TableCell align="right"><input onChange={e=>dispatch(lundi(e.target.value))} defaultValue={data.lundi} type="time" id="appt" name="appt" 
        /></TableCell>
              <TableCell align="right"><input onChange={e=>dispatch(lundipm(e.target.value))} defaultValue={data.lundipm} type="time" id="appt" name="appt"
       /></TableCell>
      </TableRow>
      <TableRow key={2}>
              <TableCell >Mardi</TableCell>
        <TableCell align="right"><input onChange={e=>dispatch(mardi(e.target.value))} defaultValue={data.mardi} type="time" id="appt" name="appt"
      /></TableCell>
              <TableCell align="right"><input onChange={e=>dispatch(mardipm(e.target.value))} defaultValue={data.mardipm} type="time" id="appt" name="appt"
        /></TableCell> 
       </TableRow>
       <TableRow key={3}>
              <TableCell >Mercredi</TableCell>
       <TableCell align="right"><input onChange={e=>dispatch(mercredi(e.target.value))} defaultValue={data.mercredi} type="time" id="appt" name="appt"/></TableCell>
              <TableCell align="right"><input onChange={e=>dispatch(mercredipm(e.target.value))} defaultValue={data.mercredipm} type="time" id="appt" name="appt"
       /></TableCell>
       </TableRow>
       <TableRow key={4}>
              <TableCell >Jeudi</TableCell>
        <TableCell align="right"><input onChange={e=>dispatch(jeudi(e.target.value))} defaultValue={data.jeudi} type="time" id="appt" name="appt"
        /></TableCell>
              <TableCell align="right"><input onChange={e=>dispatch(jeudipm(e.target.value))} defaultValue={data.jeudipm} type="time" id="appt" name="appt"
       /></TableCell> 
       </TableRow>
       <TableRow key={5}>
              <TableCell >Vendredi</TableCell>
       <TableCell align="right"><input onChange={e=>dispatch(vendredi(e.target.value))} defaultValue={data.vendredi} type="time" id="appt" name="appt"
       /></TableCell>
              <TableCell align="right"><input onChange={e=>dispatch(vendredipm(e.target.value))} defaultValue={data.vendredipm} type="time" id="appt" name="appt"
/></TableCell> 
       </TableRow>
       <TableRow key={6}>
              <TableCell >Samedi</TableCell>
       <TableCell align="right"><input onChange={e=>dispatch(samedi(e.target.value))} defaultValue={data.samedi} type="time" id="appt" name="appt"
       /></TableCell>
              <TableCell align="right"><input onChange={e=>dispatch(samedipm(e.target.value))} defaultValue={data.samedipm}type="time" id="appt" name="appt"
       /></TableCell> 
       </TableRow>
       <TableRow key={7}>
              <TableCell >Dimanche</TableCell>
       <TableCell align="right"><input onChange={e=>dispatch(dimanche(e.target.value))} defaultValue={data.dimanche} type="time" id="appt" name="appt"
       /></TableCell>
              <TableCell align="right"><input onChange={e=>dispatch(dimanchepm(e.target.value))} defaultValue={data.dimanchepm} type="time" id="appt" name="appt"
     /></TableCell>
            </TableRow>
            
         
        </TableBody>
      </Table>
    </TableContainer>
  );
}
