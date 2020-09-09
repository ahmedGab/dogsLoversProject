import React from "react";
import ReactDOM from "react-dom";
import { SwishSpinner } from "react-spinners-kit";
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    render() {
        const { loading } = this.state;
        return <div style={{height:'100vh',display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column', color:"blue" }}> <SwishSpinner size={100} loading={loading}  /> </div>  
    }
}

