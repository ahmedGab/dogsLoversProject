import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {AddComptePremiuim} from "../../actions/premiuim"
import Rating from '@material-ui/lab/Rating';
import Alert from './alert'






export default function FormDialog(props) {

  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [role, setRole] = useState("");
  
  const dispatch = useDispatch()
  let user=""
   function  getDataUsers(){
  if(JSON.parse(localStorage.getItem("userData"))){
    user=  JSON.parse(localStorage.getItem("userData"))
    setName(user.name)
    setLastName(user.lastname)
    setRole(user.role)
    setId(user._id)

    setTel(user.tel)
    setEmail(user.email)

    }
  }

  useEffect(  () => {
     getDataUsers()
    
    },[]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
function addPremiuim (){
  let date=new Date()
dispatch(AddComptePremiuim(id,new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())),name,lastname,email,tel,pass,role,"waiting"))
setOpen(false)
  
}
  return (
    <div>
         <Button
         style={props.style}
    type="submit"
    variant={props.variant}
    onClick={handleClickOpen}
  >
    {props.nom}
  </Button>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
  <DialogTitle id="form-dialog-title">{JSON.parse(localStorage.getItem("userData"))?<Rating name="size-large" value={5} size="large"  readOnly/>
:<h4 style={{color:'red'  ,fontWeight:400}}>D'abord se connecter
</h4>}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Pour vous abonner à compte premiuim, veuillez entrer votre email ,votre numéro et votre numéro téléphone ici.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            value={email}
            disabled
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Numéro de téléphone"
            type="text"
            defaultValue={tel}
            onChange={e=>setTel(e.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Mot de passe"
            type="password"
            onChange={e=>setPass(e.target.value)}

            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{backgroundColor:"#ed5e67"}}>
          Annuler
          </Button>
          {JSON.parse(localStorage.getItem("userData"))?
          <Button onClick={addPremiuim}  style={{backgroundColor:"#337aed"}}>
            Confirmer
          </Button>: <Button disabled style={{backgroundColor:"#6f785d"}}>
            Confirmer
          </Button>
}

        </DialogActions>
              {open==false? 
 <Alert el={true}  />:  <Alert el={false}  />}
      </Dialog>

    </div>
  );
}