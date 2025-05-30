import { IoIosInformationCircleOutline } from "react-icons/io";
import { niki2 } from "../assets/images";
const Modal = ()=>{
        return(
              <>
                <button className="sm:px-6 px-4 sm:text-lg py-2 rounded font-sans font-semibold flex items-center justify-center gap-2  text-white cursor-pointer bg-gray-500 hover:bg-gray-400 transition duration-200 ease-in" onClick={()=>document.getElementById('my_modal_3').showModal()}>
                    <IoIosInformationCircleOutline size={30}/>More Info
                </button>
                    <dialog id="my_modal_3" className="modal ">
                    <div className="modal-box p-0 bg-[#1D232A]" >
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  bg-gray-700 text-white">✕</button>
                        </form>
                        <div className="">
                            <img src={niki2} alt="Niki 2" className="w-full" />
                            
                        </div>
                        <div className="p-4">
                            <p className="py-4 font-inter text-center text-white">All you do is blindside me, it's hard to be brave <br />
                            But when the night cuts into the day, it's your love I crave <br />
                            I must've thanked my lucky stars too much <br />
                            They left me sitting in too much dust, mmm, oh <br /> <br />
                            You know all my dreams <br />
                            You were one, so it seemed <br />
                            And I love you but with you <br />
                            It's heartache I breathe<br />
                            You gave it your all<br />
                            Just with everything you took from me</p>

                            <p className="text-center font-inter font-bold text-white">Autumn - NIKI</p>

                        </div>
                    </div>
                </dialog>
              </>
    );
}

export default Modal