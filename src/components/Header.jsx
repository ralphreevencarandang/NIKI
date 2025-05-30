import Button from "./Button";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
const Header = ()=>{

    return(
   
            <div className="max-w-[800px]  py-5">
                <h1 className="text-white font-inter text-3xl sm:text-5xl font-bold text-left py-2">
                  Don't settle for the backburner
                </h1>
                <p className="text-white font-inter pb-3 text-xs md:text-lg max-sm:max-w-[300px]">

                      All you do is blindside me, it's hard to be brave <br />
                    But when the night cuts into the day, it's your love I crave  <br />
                    I must've thanked my lucky stars too much <br />
                    They left me sitting in too much dust <br />
                </p>
                <div className="flex gap-3">
                    <Button label='Play' textColor="text-black" icon={<FaPlay/>}/>
                    <Button label='More Info' background="bg-gray-500" icon={<IoIosInformationCircleOutline size={30}/>}/>
                </div>

            </div>
    
    );
}

export default Header