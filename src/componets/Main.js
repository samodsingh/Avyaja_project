import React from "react";
import videoBg from  '../assets/back_video1.mp4';
import './Main.css';

const Main = ()=>{
    return (
        <div className="main" id="section1">        
            <video src={videoBg} autoPlay loop muted />   
            <div className="content_style">
                <div className="content_text_style">                                  
                <h1>"ONE CANNOT HELP EVERYONE, BUT EVERYONE CAN HELP SOMEONE"</h1>
                <a type="button" href="/" className="btn_style">Join Avyaja</a>           
                </div>

            </div>
        </div>
    )
}
export default Main;