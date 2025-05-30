import { backburnerTrimmed } from "../assets/videos";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const VideoPlayer = ()=>{
    return(
        <div className="h-screen bg-[#1D232A]">
            <div className="padding-x ">
                <Link to='/' className=" text-white absolute cursor-pointer py-5 z-10"><FaArrowLeft size={30} /></Link>

            </div>

        <div className="h-full">
             <video controls  className="h-full w-full">
                <source  src={backburnerTrimmed} type="video/mp4"/>
            
            </video>

        </div>
           

        </div>
    );
}

export default VideoPlayer