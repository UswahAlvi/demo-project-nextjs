import Image from "next/image";
import { useData } from "../_Context/context";

export default function TagItem({name, dropdown}:{name: string, dropdown: boolean}){
    const {query, dispatch} = useData()
    const active = name.toLowerCase() === query.toLowerCase()
    const handleClick = (name : string) =>{
        dispatch({type: 'queryUpdated', payload: name})
    }
    return(
        <div className={`group/tag flex gap-[8px] bg-(--color-gray) hover:bg-(--secondary-menu) ${dropdown? 'w-[150px]': ''} ${active ? 'bg-(--primary-menu)': ''} px-[16px] py-[6px] rounded-[40px] cursor-pointer`}
        onClick={()=>handleClick(name)}>
            <Image className={`${active? 'hidden': ''} group-hover/tag:hidden `} 
                   src='/menu-icon-primary.svg' 
                   width={20} height={20} alt='primary menu icon'
            />
            <Image className={`${active? 'flex': 'hidden'}  group-hover/tag:flex }`} 
                   src='/menu-icon-secondary.svg' 
                   width={20} height={20} alt='secondary menu icon'
            />
            <span className={`text-[14px] font-medium capitilize text-(--primary-menu) group-hover/tag:text-(--white) ${active? 'text-(--white)': ''}`}>{name}</span>
        </div>
    )
}