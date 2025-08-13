import Image from "next/image";

export default function Spinner(){
    return(
    <div className="flex justify-center align-center">
     <Image className='animate-spin' src='/Loader.svg' width={40} height={40} alt='spinner'/>
    </div>
    )
}