import Image from "next/image";
import { useData } from "../_Context/context";

export default function TagItem({name}:{name: string}){
    const {query, dispatch} = useData()
    const active = name.toLowerCase() === query.toLowerCase()
    const handleClick = (name : string) =>{
        dispatch({type: 'queryUpdated', payload: name})
    }
    return(
        <div className={`group flex gap-[8px] bg-(--color-gray) hover:bg-(--secondary-menu) ${active ? 'bg-(--primary-menu)': ''} px-[16px] py-[6px] rounded-[40px] cursor-pointer`}
        onClick={()=>handleClick(name)}>
            <Image className={`${active? 'hidden': ''} group-hover:hidden `} 
                   src='/menu-icon-primary.svg' 
                   width={20} height={20} alt='primary menu icon'
            />
            <Image className={`${active? 'flex': 'hidden'}  group-hover:flex }`} 
                   src='/menu-icon-secondary.svg' 
                   width={20} height={20} alt='primary menu icon'
            />
            <span className={`text-[14px] font-medium capitilize text-(--primary-menu) group-hover:text-(--white) ${active? 'text-(--white)': ''}`}>{name}</span>
        </div>
    )
}