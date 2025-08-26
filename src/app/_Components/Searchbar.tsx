import Image from "next/image";
import { useRef } from "react";
import { useData } from "../_Context/context";
import { Status } from "../types";

export default function Searchbar(){ 
    const {query, status, dispatch} = useData()
   const inputRef = useRef<HTMLInputElement>(null);
   const focusInput = () =>{
    if(inputRef.current!== null)
        inputRef.current?.focus()
   }
   const onQueryUpdate = (value: string) => {
    dispatch({type:"queryUpdated", payload: value})
   }
    return (
       <div className={`inline-flex w-full p-[12px] sm:p-[24px] bg-(--color-gray) rounded-xs 
         cursor-text  border-3  
        ${status===Status.error || status === Status.timedOut ? 'border-(--error)': 'border-transparent focus-within:border-(--primary-menu)'}`}
       onClick={focusInput}
       >
        <Image className="w-auto h-auto" src='/search-icon.svg' width={24} height={24} alt='search icon' />
        <div className="relative w-full ]">
            <input
                className="w-full p-[1px] pl-[12px] text-[14px] sm:text-[20px] font-normal overflow-hidden focus:outline-none whitespace-nowrap"
                ref={inputRef}
                type="text"
                name="search"
                value={query}
                onChange={(e) => onQueryUpdate(e.target.value)}
            />
            {!query && (
                <span className="absolute top-0 left-[12px] w-full h-full text-[14px] sm:text-[20px] text-base text-gray-400 pointer-events-none whitespace-nowrap overflow-hidden text-ellipsis z-0">
                Search what technologies we are using at DC...
                </span>
            )}
            </div>

        </div>
    )
}