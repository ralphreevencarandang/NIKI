import Button from "./Button";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { motion } from "motion/react";
import Modal from './Modal'
const Header = ()=>{

    return(
   
            <motion.div className="max-w-[800px]  py-5"
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
             
                      <h1 className="text-white font-inter text-3xl sm:text-5xl font-bold text-left py-2 subpixel-antialiased">
                        Don't settle for the backburner
                        </h1>
                        <p className="text-white font-inter pb-3 text-sm md:text-lg max-sm:max-w-[300px] antialiased">

                            When destiny calls you, you must be strong  <br />
                            I may not be with you, but you got to hold on <br />
                            They′ll see in time, I know <br />
                            
                        </p>
             
              
                <div className="flex gap-3"
                >
                    <Button label='Play' textColor="text-black" icon={<FaPlay/>}/>
                   
                    <Modal/>
                </div>

            </motion.div>
    
    );
}

export default Header