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
       const premiuim=[
        {
          logo:"https://cdn2.cloud1.cemah.net/wp-content/themes/anderson-k9-training/assets/images/icon-board-train.png",
          title:"Conseil et formation "
          ,desc:"Parfait pour le propriétaire occupé ou les chiens difficiles."
      },
      {
        logo:"https://cdn2.cloud1.cemah.net/wp-content/themes/anderson-k9-training/assets/images/icon-obedience.png"
        ,title:"Obéissance"
        ,desc:"Différents niveaux pour que votre chien apprenne les commandes."
           }
           ,{
        logo:"https://cdn2.cloud1.cemah.net/wp-content/themes/anderson-k9-training/assets/images/icon-puppy.png"
        ,title:"Puppy Class"
        ,desc:"Temps de jeu structuré pour rencontrer et saluer et obéissance de base."
      },
    {
      logo:"https://cdn2.cloud1.cemah.net/wp-content/themes/anderson-k9-training/assets/images/icon-police-service.png"
      ,title:"Services de police"
      ,desc:"des cours K9 pour les chiens policiers et les maîtres-chiens."
    },
  {
    logo:"https://cdn2.cloud1.cemah.net/wp-content/themes/anderson-k9-training/assets/images/icon-specialty-training.png"
    ,title:"Formation spécialisée"
    ,desc:"Protection, agilité, recherche et sauvetage, stupéfiants, etc."
  },
  {
    logo:"https://cdn2.cloud1.cemah.net/wp-content/themes/anderson-k9-training/assets/images/icon-more.png",title:"et plus.."
    ,desc:"cliquer ici pour savoir plus de détails"
    
  }

    
      ]

    return (
      <>
      { user ?

        <div>
          {exist && user._id==exist._id ?
          
          <div  className="profil" style={{backgroundImage:`url(http://localhost:4000/${user.coverimg})` ,height:"550px", backgroundPosition: "50% 20%",backgroundRepeat: "no-repeat",backgroundSize:"cover", width:"100%"}}>
                             

            <Navbar/>
            < ModalPremiuim />

            <UploadCoverPhoto/>
            <button className="cover_image" onClick={uploadPhoto}>Confirmer</button>
            </div>:
          <div  style={{backgroundImage:`url(http://localhost:4000/${user.coverimg})` ,height:"550px", backgroundPosition: "top",backgroundRepeat: "no-repeat",backgroundSize:"cover", width:"100%" }}>
            <Navbar/>
            </div>}
           
            <Grid container >
        <Grid item xs={12}>
        <div  className="profilDresseur">
        <Grid item xs={12}  onMouseOver={e=>multicolors(e)} onMouseOut={e=> e.target.style.color="#013a61"} >
        <h1>{user.ecole}</h1>
        
        </Grid>
        <div className="introprofilDresseur">

        
        <div>
        <img  className="photoProfil" src={`http://localhost:4000/${user.photo}`}  /> 

        </div>
           &nbsp;&nbsp;&nbsp;&nbsp;           &nbsp;&nbsp;&nbsp;&nbsp;


        <div>
        <i class="fa fa-quote-left" aria-hidden="true"></i>

          <h4> <PhoneIcon/>:{user.tel} </h4>
          <h4> <RoomIcon/>:{user.region} </h4>
          <h4><EmojiEmotionsIcon/>:{user.name} {user.lastname}</h4>
          <Button
        variant="link"
        color="default"
        startIcon={<YouTubeIcon       onMouseOver={e=>e.target.style.color="#FF0000"}
        style={{ fontSize: 40 }} />}
        href={user.youtube}
      />
        <Button
        variant="link"
        color="default"
        startIcon={<FacebookIcon  onMouseOver={e=>e.target.style.color="blue"} onMouseOut={e=>e.target.style.color="#013a61"} style={{ fontSize: 40 }}/>}
        href={user.fb}
      />
      

        </div>
          </div>

          {user.role=="premiuim" ?
          <div style={{marginTop:"30px",textAlign:"center", backgroundColor:"#000000cf",color:"white",padding:"50px 40px 80px 70px" ,width:"100%"}}>
            <Grid   container spacing={10} >
   
  {premiuim.map(el =>  
   <Grid  sm={4} xs={12}  >
    <Link style={{cursor:"pointer"}} to={`/PagecardsPremiuim/${user._id}`}> <img style={{width:'130px',height:'auto'}} src={el.logo}/>
     <h4 style={{fontWeight:400 ,color:"white"}} onMouseOver={e=>multicolors(e)} onMouseOut={e=> e.target.style.color="white"}>{el.title}</h4>
     <h6 style={{fontSize:"13px,",padding:"0 30px",color:"rgba(255, 255, 255, 0.5)"}}>{el.desc}</h6> 
     </Link> 
     </Grid> 
     )}

            </Grid></div>:""}
          
            

{user.video?
          <video  controls  >
      <source src={`http://localhost:4000/${user.video}`}  type="video/mp4"/>
     </video>
    :<p>loading video</p>
}
</div>
        {/* <video autoPlay playInline muted src = "https://www.youtube.com/watch?v=JwQZQygg3Lk&list=RDT3um72hrtrk&index=11"  />  */}


</Grid>
        <Grid className ="desc" item  sm={12} xs={12}  >
          <h5>{user.desc}</h5>
          </Grid>
        <Grid item  className="listDresseurs" style={{margin:"20px 30px"}} xs={12} sm={4} >
    <Table />
        </Grid>

      <Grid item style={{margin:"20px"}} xs={12} sm={7} >

        <Map lat={user.lat} lon={user.lon}/>

        </Grid>      </Grid>
        <Footer/>
        </div>: <Spinner/>
        }
        </>
    );
};

export default ProfileDresseur;