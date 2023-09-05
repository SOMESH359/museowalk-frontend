import React from "react";
import Aboutpic from "../mediafolder/aboutpic.png"
import Queue from '../mediafolder/Queue-pana.png'
import Booking from '../mediafolder/bookmus.png'
export default function AboutContent()
{
    return(
       <div className="about-content">
        <div className="about1">
        <div className="aboutpara">
        <h6><i>
        Our new museum booking system combines convenience with a touch of personalization. Visitors can now book their visits online and receive unique, randomly generated tokens that offer a customized experience, ensuring every visit is truly special.
        </i>
       
        </h6>
        </div>
        <div className="abtpic">
        <img src={Booking} alt="sample" width={300} height={300} />
        </div>
        
        </div>
        <div className="about1">
        <div className="abtpic">
        <img src={Queue} alt="sample" width={300} height={300}/>
        </div>
        <div className="aboutpara">
        <h6><i>
        Book your reservations with us and enjoy the freedom to customize your entry, even when there's a delay. We understand that plans can change, so we've made it easy for you to adapt.

Simply make your reservation, and if you encounter any delays or need to adjust your plans, you can do so seamlessly. We're here to make your visit as comfortable as possible.

        </i>
        
        </h6>
        </div>
        </div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div className="about1">
        <div className="aboutpara">
        <h6><i>
        We're excited to bring you an enhanced museum visiting experience through our online booking platform. When you choose to book with us, you unlock a world of convenience and special features that will make your visit truly unforgettable.

Skip the Lines: Say goodbye to long queues. With our online booking system, you can breeze past the ticket counter and head straight to the exhibits you're eager to explore.  

        </i>
      
        </h6>
        </div>
        <div className="abtpic">
        <img src={Aboutpic} alt="sample" width={300} height={300} />
        </div>
        </div>
       </div>
    )
}