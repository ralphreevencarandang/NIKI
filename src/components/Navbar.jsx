import { nikiLogo } from "../assets/images";
import { Link } from "react-router";
const Navbar = ()=>{

    

    return(
        <nav className="bg-[#0c0c0c]">
            <div className="padding-x max-container py-3 flex gap-10 items-center justify-between">
                <Link to='/'>
                    <img src={nikiLogo} alt="" width={60} className="object-contain cursor-p"/>
                </Link>
                <div className="flex gap-5">
                    <Link to='/' className="text-white font-martel-sans text-sm hover:text-stone-500 transition ease-in duration-300">Home</Link>
                    <Link to='/browse' className="text-white font-martel-sans text-sm hover:text-stone-500 transition ease-in duration-300">Browse</Link>
                </div>
            </div>
       
        </nav>
    );
}

export default Navbar