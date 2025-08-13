import Image from "next/image";
import { useRef, useState } from "react";
import { FetchData } from "../types";
import { useData } from "../_Context/context";

export default function Searchbar(){ 
    const {query, dispatch} = useData()
   const inputRef = useRef<HTMLInputElement>(null);
   const focusInput = () =>{
    if(inputRef.current!== null)
        inputRef.current?.focus()
   }
   const onQueryUpdate = (value: string) => {
    dispatch({type:"queryUpdated", payload: value})
   }
    return (
       <div className="inline-flex w-full p-[24px] bg-(--color-gray) rounded-xs border-3 border-transparent focus-within:border-(--primary-menu) cursor-text"
       onClick={focusInput}
       >
        <Image className="w-auto h-auto" src='/search-icon.svg' width={24} height={24} alt='search icon' />
        <input 
            className="w-full p-[1px] pl-[12px] text-[20px] font-normal  focus:outline-none"
            ref={inputRef}     
            type='text' 
            name='search'
            value={query}
            onChange={(e)=>onQueryUpdate(e.target.value)}
            placeholder="Search what technologies we are using at DC..."
        />
        </div>
    )
}