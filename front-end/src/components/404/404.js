import React from 'react';
import img from '../../images/imgerror.png'
import Button from '@material-ui/core/Button';


import "./404.css"
const P404 = () => {
    return (
        <div className="container">
        <img className="ops" src={img} />
        <br />
        <br />
        <h3>Cette page est introuvable</h3>
        <br />
        <Button variant="contained" color="primary" href="/">
        Page acceuil      </Button>
    </div>
    );
};

export default P404;