import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Map from "../map/map"
import Table from "../tabletimeWorking"
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiPeople';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from "@material-ui/core/Button";
import Navbar from "../navbar"
import Footer from "../footer/footer"
import {getUser} from "../../actions/user"
import axios from "axios"
import UploadCoverPhoto from "../upload/uploadCoverPhoto"
import ModalPremiuim from "../premiuim/modalPremiuim"
import Spinner from "../spinner/spinner"
import {Link} from "react-router-dom"


import "./profile.css"


const ProfileDresseur = (props) => {

  const [id, setId] = useState(props.match.params.id)

  const pic = useSelector(state => state.coverPhoto);

 
const dispatch = useDispatch()
const user = useSelector(state => state.user)
    useEffect( () => {
     
        dispatch(getUser(id))
        },[]);

console.log(user.video)
    const multicolors = event => {
        const el = event.target;
        el.style.color="red"
        let colorhex = [
          "#7AF377",
          "#3498DB",
          "#F1C530",
          "#F29C29",
          "#8E44AD",
          "#4AA086",
          "#E74C3C",
          "#65CC71",
          "#D3541B",
          "#EB4367",
          "#74F7D9",
          "#DDA8FC"
        ];
        el.style.color = colorhex[Math.floor(Math.random() * 12)];
      };
      
      const uploadPhoto=()=>{

        const formData = new FormData()
        formData.append('photo', pic)
       
        axios.post("http://localhost:4000/image", formData, {withCredentials:true
        }).then(res => {
            console.log(res.data)
            if(res.data){
            axios.put(`http://localhost:4000/dogsLovers/users/${id}`,{coverimg:res.data},{withCredentials:true}).then(rep=>{
              console.log(rep.data)
              window.location.reload()
        })
      }
        })
       
       }
       const exist=JSON.parse(localStorage.getItem("userData"))
       

    return (
      <>
      { user ?

        <div>
          
          <div  style={{backgroundImage:`url(http://localhost:4000/${user.coverimg})` ,height:"550px", backgroundPosition: "top",backgroundRepeat: "no-repeat",backgroundSize:"cover", width:"100%" }}>
            <Navbar/>
            </div>
           
          

        

        
        <div>
        <img  className="photoProfil" src={`http://localhost:4000/${user.photo}`}  /> 

        </div>
          


    
        


        <Grid className ="desc" item  sm={12} xs={12}  >
          <h5>{user.desc}</h5>
          </Grid>
          
       
        <Footer/>
        </div>: <Spinner/>
        }
        </>
    );
};

export default ProfileDresseur;