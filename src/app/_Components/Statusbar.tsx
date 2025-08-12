export default function Statusbar({length}: {length : number}){
    return(
    <div className="px-[24] pt-[15] pb-[14]">
       <span className="text-[16px] text-(--paragraph) font-medium">
        {`${length} result${length>1 ? 's' : ''}`}
       </span>
    </div>
    )
}