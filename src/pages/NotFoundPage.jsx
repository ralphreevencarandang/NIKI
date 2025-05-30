
import { Link } from "react-router";
const NotFoundPage = ()=>{

    return(
        <section className="max-container padding-x flex flex-col items-center justify-center h-screen text-center">
            
            <h1 className="text-9xl font-bold font-inter text-red-500">404</h1>
            <p className="text-3xl sm:text-5xl">Oops, This Page Not Found!</p>
            <div className="my-10">
                
            <Link to='/' className=" px-4 py-2 rounded text-xl text-center  bg-red-500 text-white">Return to home page</Link>
            </div>
            
        </section>
    );
}

export default NotFoundPage