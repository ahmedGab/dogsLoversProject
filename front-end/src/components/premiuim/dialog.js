import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';



export default function FormDialog(props) {

  const user=JSON.parse(localStorage.getItem("userData"))
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [tel, setTel] = useState(user.tel);
  const [pass, setPass] = useState("");


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            value={email}
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
          <Button onClick={handleClose}  style={{backgroundColor:"#337aed"}}>
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}