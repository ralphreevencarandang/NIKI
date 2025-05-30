const Button = ({label, background='bg-white', textColor='text-white', icon})=>{
    return(
        <>
            <button className={`sm:px-6 px-4 sm:text-lg py-2 rounded font-sans font-semibold flex items-center justify-center gap-2  ${background } ${textColor} cursor-pointer hover:bg-gray-400` }>{icon}{label}</button>
        </>
    );
}

export default Button