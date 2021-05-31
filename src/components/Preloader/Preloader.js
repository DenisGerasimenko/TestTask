import React from "react";
import preloader from "../../assets/23.gif"
import "../../styles/preloader"

const Preloader = () =>{
    return(
        <div class = "preloader">
            <img src = {preloader} alt="preloader"/>
        </div>
    )
}

export default Preloader;