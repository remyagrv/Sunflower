import React, { useState } from "react";
import "./style.css";
import TrackGenSplash from "../../components/TGSplash/TrackGenSplash";
import { useNavigate } from "react-router-dom";

function Mainpage(props) {
 
const [loading, setLoading] = useState(true);
const navigate = useNavigate();

setTimeout(() => {
  setLoading(false)
},1400)

  return (
    <div>
       {loading ? (
        <TrackGenSplash/>        
      ) : (
        navigate("/home",{replace:true})
      )} 
     
    </div>
  );
}

export default Mainpage;
