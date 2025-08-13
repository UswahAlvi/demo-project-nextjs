import { useData } from "../_Context/context";
import { Status } from "../types";

export default function Statusbar(){
    const {status, length} = useData()
    return(
    <>
    <div className="px-[24] pt-[15] pb-[14]">
       <span className={`text-[16px] font-medium ${status===Status.error || status === Status.timedOut ? 'text-(--error)':'text-(--paragraph) '}`}>
        {status ===Status.error || status === Status.timedOut? 'Something wrong happened but this is not your fault : )':
        status === Status.pending ? 'Searching ...' : `${length ? length : 'No'} result${length>1 ? 's' : ''}`}
       </span>
    </div>
    </>
    )
}