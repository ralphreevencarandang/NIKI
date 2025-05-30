import { sliderImages } from "../assets/images";
import { motion } from "motion/react";
const Carousel = () => {

    
  return (
    <motion.div className="carousel carousel-center rounded-box h-[200px] gap-5 w-full"
    
    initial={{
                    opacity:0,
                    y:50
               
                }}
                animate={{
                    opacity:1,
                    y:0

                 
                }}
                transition={{
                    ease:"linear",
                    duration: 1
                }}
    >

                {sliderImages.map((image, index)=>
                         <div id={`slide${index}`} className="carousel-item" key={index}>
                            <img
                            src={image.imageUrl}
                            alt={`Niki Images`}
                            // className="object-contain"
                            />
                      
                        
                           
                        </div>

                    )}

          
    </motion.div>
  );
};

export default Carousel;
