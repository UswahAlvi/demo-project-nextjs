import Image from "next/image"
import { Item } from "../types"
import Link from "next/link"

export default function ResultItemComponent({item}:{item: Item}){
   
    return(
        <div className="group flex p-[6px] sm:p-[12px] justify-between gap-[10px] sm:gap-[20px] rounded-xs hover:bg-(--color-gray)">
            <div className="bg-(--white) p-[10] rounded-[10px]">
                <Image className='bg-(--white) w-auto' src={item.image} width={56} height={56} alt='result item image'/>
            </div>
            <div className="flex flex-col w-50 sm:w-87 ">
                <span className="text-[16px] sm:text-[20px] font-medium pt-[12px]"> {item.title} </span>
                <span className="text-[12px] sm:text-[16px] font-normal text-(--paragraph) whitespace-nowrap overflow-hidden text-ellipsis"> {item.description} </span>
            </div>
            <div className={`flex justify-center items-center invisible group-hover:visible`}>
                <Link href={item.url}>
                <Image className="h-auto cursor-pointer" src='/arrow.svg' width={26} height={26} alt='url arrow'/>
                </Link>
            </div>
        </div>
    )
}
