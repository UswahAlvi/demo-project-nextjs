import { useData } from "../_Context/context";
import { Status } from "../types";

export default function Statusbar(){
    const {status, length} = useData()
    return(
    <>
    <div className="px-[24] pt-[15] pb-[14]">
       <span className="text-[16px] text-(--paragraph) font-medium">
        {status === Status.pending ? 'Searching ...' : `${length ? length : 'No'} result${length>1 ? 's' : ''}`}
       </span>
    </div>
    </>
    )
}