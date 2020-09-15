import React,{useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import logo from "../../images/prem.jpg"
import {Link} from 'react-router-dom'
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;

  
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(true);
  // const timer = setTimeout(() => {
  //   setOpen(true)
  //   }, 3000);
  // useEffect(() => {
   
  //    return timer;
  // }, []);

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
  
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <h2>Passez à Dogs Lovers Premium</h2>
        </DialogTitle>
        <DialogContent style={{backgroundColor:"#f6ebe6"}} dividers>
        <img src={logo} alt="logoPremiuim" />
        </DialogContent>
        <DialogActions>
         <Link to ="/premiuim"> <Button autoFocus  style={{backgroundColor:"#2c76b8"}}  color="primary">
            Découvrir
          </Button> </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}