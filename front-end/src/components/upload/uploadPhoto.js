import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getPhoto} from "../../actions/upload"
import axios from "axios"
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import "./upload.css"


export default function  UploadComponent () {

  const[pic1,setPic1]=useState("")
 



  const dispatch =  useDispatch();

    
   const uploadSingleFile=(e)=> {
            setPic1(URL.createObjectURL(e.target.files[0]))


    }
  //  const SelectFile=(event)=>{

    

  //     let files = event.target.files 
     
   
  //  }
    
        let imgPreview;
        if (pic1) {
            imgPreview = <img className="imgUpload" src={pic1} alt='' />;

        }
                return (
                    <form >
               <div className="form-group preview">
                  {imgPreview} 
              </div> 

                    <div class="wrap-custom-file">
                    <input type="file" name="image2" id="image2" onChange={e=>{dispatch(getPhoto(e.target.files[0]));uploadSingleFile(e)}} accept=".gif, .jpg, .png" />
                    <label  for="image2">
                  <PhotoLibraryIcon/>
                  &nbsp;
                      <span>Importer votre photo de profil</span>
                    </label>
                  </div> 
                  </form>
        )
    
}