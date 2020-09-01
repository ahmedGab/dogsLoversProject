import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getPhoto} from "../../actions/upload"
import axios from "axios"
import "./upload.css"


export default function  UploadComponent () {

  const[file,setFile]=useState(null)
  const[pic,setPic]=useState(null)

  const dispatch =  useDispatch();

    
   const uploadSingleFile=(e)=> {
            setFile(e.target.files[0])
            setPic(URL.createObjectURL(e.target.files[0]))

    }

    
     const uploadPhoto=(e)=>{

         e.preventDefault()
         dispatch(getPhoto(file))

        const formData = new FormData()
        formData.append('photo', file)
    
        axios.post("http://localhost:4000/image", formData, {withCredentials:true
        }).then(res => {
            console.log(res)
        })
    }
        let imgPreview;
        if (file) {
            imgPreview = <img className="imgUpload" src={pic} alt='' />;
        }
                return (
            <form onSubmit={uploadPhoto}>
                <div className="form-group preview">
                    {imgPreview}
                </div>

                <div className="form-group">
                    <input type="file" className="form-control" onChange={uploadSingleFile} />
                </div>
                <button type="submit" className="btn btn-primary btn-block" >Importer un photo</button>
            </form >
        )
    
}