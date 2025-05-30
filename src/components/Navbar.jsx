import { nikiLogo } from "../assets/images";

import { NavLink } from "react-router";
const Navbar = ()=>{

    const linkClass = ({isActive})=>{
        return isActive ? 'font-bold text-sm text-white font-inter  hover:text-stone-500 transition ease-in duration-300' : 'text-sm text-white font-inter  hover:text-stone-500 transition ease-in duration-300'
    }

    return(
        <nav className="bg-[#0c0c0c]">
            <div className="padding-x max-container py-3 flex gap-10 items-center justify-between">
                <NavLink to='/'>
                    <img src={nikiLogo} alt="" width={60} className="object-contain cursor-p"/>
                </NavLink>
                <div className="flex gap-5">
                    <NavLink to='/' className={linkClass}>Home</NavLink>
                    <NavLink to='/browse' className={linkClass}>Browse</NavLink>
                </div>
            </div>
       
        </nav>
    );
}

export default Navbar