import Navbar from "../components/Navbar";
import Card from "../components/Card";
import {browseImages} from '../assets/images/index'
import Modal from "../components/Modal";
const BrowsePage = ()=>{

    console.log(browseImages);
    
    return(
        <section className="bg-[url('./assets/images/plainbg.png')] min-h-screen bg-cover bg-no-repeat">
            <Navbar/>
            <div className="max-container padding-x">
               
                <h1 className="text-white font-bold font-inter text-xl pt-5">Movies to explore: NIKI</h1>
                <div className="grid place-content-center gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-5 py-5 ">
                    {browseImages.map((image, index) =>

                        <Card key={index} imgUrl={image.imageUrl} />
                    )}

                </div>
             
            </div>
        </section>
    );
}

export default BrowsePage;