import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from "react-redux";
import {getVideo} from "../../actions/upload"
import axios from "axios"
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import "./upload.css"


export default function  UploadVideo () {

  const[file,setFile]=useState(null)

  const dispatch =  useDispatch();

 
                return (
                    <div class="wrap-custom-file video">
                    <input type="file" name="video" id="video"     onChange={e=>dispatch(getVideo(e.target.files[0]))} accept=".mp4, .avi, .mov,.mpg"  />
                    <label  for="video">
                  <VideoLibraryIcon/>
                  &nbsp;
                      <span>Importer un video</span>
                    </label>
                  </div> 
        )
    
}


  