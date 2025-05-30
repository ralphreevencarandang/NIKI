import { nikiLogo } from "../assets/images";
const Navbar = ()=>{

    return(
        <nav className="bg-[#0c0c0c]">
            <div className="padding-x max-container py-3 flex gap-10 items-center justify-between">
                <div>
                    <img src={nikiLogo} alt="" width={60} className="object-contain"/>
                </div>
                <div className="flex gap-5">
                    <a href="" className="text-white font-martel-sans text-sm hover:text-stone-500 transition ease-in duration-300">Home</a>
                    <a href="" className="text-white font-martel-sans text-sm hover:text-stone-500 transition ease-in duration-300">Browse</a>
                </div>
            </div>
       
        </nav>
    );
}

export default Navbar