import Image from "next/image";
import { Status } from "../types";
import Spinner from "./Spinner";

export default function FallbackComponent({status}: {status: Status}){
    return(
        <>
        {status === Status.pending ? <Spinner /> : <></>}
        </>
    )
}