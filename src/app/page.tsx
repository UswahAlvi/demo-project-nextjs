'use client'
import ResultsList from "./_Components/ResultsList";
import Statusbar from "./_Components/Statusbar";
import {useState } from "react";
import { Item, Status } from "./types";
import Topbar from "./_Components/Topbar";

export default function Page(){
  const [data, setData] = useState<Item[]>([])
  const [status, setStatus] = useState<Status>(Status.idle)
  const [errors, setErrors] = useState<string[]>([''])
  async function fetchData(query : string){
    try{
      setStatus(Status.pending)
      setData([])
      const data = await fetch(`https://frontend-test-api.digitalcreative.cn/?no-throttling=true&search=${query}`)
      const res = await data.json()
      setData(res)
      setStatus(Status.successful)
    }catch(e){
      console.log(e)
      setStatus(Status.unsuccessful)
    }
  }
  return (
  <>  
    <div className="flex flex-col gap-[20px] p-[24px] pb-[0px] max-h-[480px]">
     <Topbar fetchData={fetchData}/>
     <ResultsList results={data} status={status}/>
     </div>
    <hr className="text-(--color-gray)"/>
   <Statusbar length={data.length} status={status}/>
  </>
  );
}