import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getCoverPhoto} from "../../actions/upload"
import axios from "axios"
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import "./upload.css"


export default function  UploadComponent () {
const [pic,setPic]=useState("")



  const dispatch =  useDispatch();

    
   const uploadSingleFile=(e)=> {
            setPic(URL.createObjectURL(e.target.files[0]))


    }
  //  const SelectFile=(event)=>{

    

  //     let files = event.target.files 
     
   
  //  }
    
        let imgPreview;
        if (pic) {
            imgPreview = <button> non </button>;

        }
                return (
                    <form >
              <div style={{backgroundImage:`url(${pic})` ,height:"550px", backgroundPosition: "50% 20%",backgroundRepeat: "no-repeat",backgroundSize:"cover", width:"100%"}}>
              </div> 

                    <div class="wrap-custom-file" >
                    <input type="file" name="image2" id="image2" onChange={e=>{dispatch(getCoverPhoto(e.target.files[0]));uploadSingleFile(e)}} accept=".gif, .jpg, .png" />
                    <label  for="image2">
                  <PhotoLibraryIcon/>
                  &nbsp;
                      <span>Importer votre photo de couverture</span>
                    </label>
                  </div> 
                  </form>
        )
    
}