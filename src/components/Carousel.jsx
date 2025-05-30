import { sliderImages } from "../assets/images";

const Carousel = () => {

    
  return (
    <div className="carousel carousel-center rounded-box h-[200px] gap-5">

                {sliderImages.map((image, index)=>
                         <div id={`slide${index}`} className="carousel-item" key={index}>
                            <img
                            src={image.imageUrl}
                            alt={`Niki Images`}
                            className="object-contain"
                            />
                      
                        
                           
                        </div>

                    )}

          
    </div>
  );
};

export default Carousel;
