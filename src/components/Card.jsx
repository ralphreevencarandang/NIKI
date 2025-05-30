import { motion } from "motion/react";

const Card = ({imgUrl })=>{
    return(

        <motion.div
        initial={{
            opacity:0,
            scale:0

        }}

        animate={{
            opacity: 1,
            scale:1
        }}

        transition={{
            duration: 2,
            ease:"backInOut",
            type:"spring"
            
        }}
        
        whileHover={{
            scale:1.05,
        }}
        
        >
            <img src={imgUrl}  alt="Card Image" className="w-full h-full rounded-lg cursor-pointer hover:shadow-lg shadow-red-500" />
        </motion.div>
    );

}

export default Card