import Image from "next/image";
import { Status } from "../types";
import Spinner from "./Spinner";
import { useData } from "../_Context/context";

export default function FallbackComponent(){
    const {status, length} = useData()
    if(length) return<></>;
    return(
        <div className="flex justify-center align-center w-full h-[300px] grow-1">
        {
        status === Status.idle ? <Image src='/searching-icon.svg' width={247} height={192} alt='no result'/> :
        status === Status.pending ? <Spinner /> : 
        status === Status.timedOut || status === Status.error || !length? <Image src='/error.svg' width={247} height={200} alt='error image'/> : <></>}
        </div>
    )
}