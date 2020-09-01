import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getVideo} from "../../actions/upload"
import axios from "axios"
import "./upload.css"


export default function  UploadComponent () {

  const[file,setFile]=useState(null)

  const dispatch =  useDispatch();

    
   const uploadSingleFile=(e)=> {
            setFile(e.target.files[0])

    }

    
     const uploadVideo=(e)=>{

         e.preventDefault()
         dispatch(getVideo(file))

        const formData = new FormData()
        formData.append('video', file)
    
        axios.post("http://localhost:4000/video", formData, {withCredentials:true
        }).then(res => {
            console.log(res)
        })
    }
      
                return (
            <form onSubmit={uploadVideo}>
                <div className="form-group preview">
                </div>

                <div className="form-group">
                    <input type="file" className="form-control" onChange={uploadSingleFile} />
                </div>
                <button type="submit" className="btn btn-primary btn-block" >Importer un vide</button>
            </form >
        )
    
}