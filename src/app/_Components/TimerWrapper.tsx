'use client'
import dynamic from "next/dynamic"
const Timer = dynamic(()=>import('./TimeContainer'),{
    ssr: false,
})

export default function TimerWrapper(){
    return (
        <Timer />
    )
}