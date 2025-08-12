import Image from "next/image";

export default function Spinner(){
    return(
    <div className="flex justify-center align-center h-100">
     <Image className='animate-spin' src='/Loader.svg' width={40} height={40} alt='spinner'/>
    </div>
    )
}