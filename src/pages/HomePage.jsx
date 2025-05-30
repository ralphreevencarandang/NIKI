import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Carousel from "../components/Carousel"
const HomePage = ()=>{
    return(
        <>
     
            <section className="bg-[url('./assets/images/nikibg4.png')] bg-cover bg-center bg-no-repeat min-h-screen">
                <Navbar />
                <div className="padding-x max-container  h-[90vh]  flex flex-col justify-between">
                    <div className="my-10 relative top-10  lg:top-25">
                        <Header />
                    </div>
                    <div className="mb-10">
                        <Carousel/>
                    </div>
                </div>

            </section>

        </>
     
    )
}

export default HomePage