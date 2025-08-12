'use client'
import ResultsList from "./_Components/ResultsList";
import Statusbar from "./_Components/Statusbar";
import { Suspense, useState } from "react";
import { Item, Status } from "./types";
import Topbar from "./_Components/Topbar";
import FallbackComponent from "./_Components/FallbackComponent";

export default function Page(){
  const [data, setData] = useState<Item[]>([])
  const [status, setStatus] = useState<Status>(Status.idle)
  const [errors, setErrors] = useState<string[]>([''])
  async function fetchData(query : string){
    try{
      setStatus(Status.pending)
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
     <Suspense fallback={<FallbackComponent status={status} />}>
      <ResultsList results={data}/>
     </Suspense>
     </div>
    <hr className="text-(--color-gray)"/>
   <Statusbar length={data.length}/>
  </>
  );
}