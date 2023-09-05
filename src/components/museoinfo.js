import React from "react";
import Carousel from "../uicomponents/carousel";
export default function Museoinfo(){
    return(
        <div className="museo-container" style={{fontFamily:`Georgia, 'Times New Roman', Times, serif`,fontSize:'25px'}}>
          <div className="carousel">
            <Carousel/>
          </div>
         
        </div>
    )
}