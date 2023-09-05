import React from "react";
export default function Carousel()
{
  
 
    
    return(
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
              <img src="https://img.peapix.com/67af4fda55a846968bc2f12f52386eba.jpg?attachment&modal"
                                     height={510}
                 className="d-block w-100" alt="transformer"/>
              
              
              </div>
              
              <div className="carousel-item">
              <img src="https://th.bing.com/th/id/R.2bab881ac335e7d29ea4adc2ee59c142?rik=U5UpRgB3COLrZg&riu=http%3a%2f%2fwww.holidify.com%2fblog%2fwp-content%2fuploads%2f2014%2f11%2fGallery1_national_museum_india.jpg&ehk=9U6XhfLONiulp1PVSbbVOG%2bzsTsrREyeDQMU%2fJS%2fZOI%3d&risl=&pid=ImgRaw&r=0"
                     height={510}
                 className="d-block w-100" alt="hwarang" />
                
                
              </div>
              <div className="carousel-item">
                
               
                   <img src="https://gumlet.assettype.com/freepressjournal/2022-05/86cbd419-d1d4-45ac-bac9-1b7e2c1c6586/museum_2054708_960_720.jpg" 
                                     height={510}
                className="d-block w-100" alt="baji rao mastani" />
                
              </div>
              <div className="carousel-item">
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Gallery9_national_museum_india.JPG"  
                                    height={510}
                 className="d-block w-100" alt="ps1" />
                
              </div>
              <div className="carousel-item">
                
                <img src="https://delhitourism.travel/images/places-to-visit/headers/national-museum-of-india-delhi-tourism-entry-fee-timings-holidays-reviews-header.jpg"  
                                    height={510}
                 className="d-block w-100" alt="ps1" />
                
              </div>
              <div className="carousel-item">
                
                <img src="https://www.outlookindia.com/outlooktraveller/public/uploads/articles/travelnews/rsz_shutterstock_1051163576.jpg"  
                                    height={510}
                 className="d-block w-100" alt="ps1" />
                
              </div>
              
              
             
            
              
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>


    )
}