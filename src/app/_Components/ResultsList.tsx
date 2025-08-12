import { Suspense } from 'react'
import {Item, Status} from '../types'
import FallbackComponent from './FallbackComponent'
import ResultItemComponent from './ResultItem'

export default function ResultsList({results, status}: {results : Item[], status: Status}){
    return (
    <div className="flex flex-col gap-[10px] overflow-scroll min-h-[200px]">
      <Suspense fallback={<FallbackComponent status={status}/>}>
      {results?.map((el : Item,_i)=><ResultItemComponent key={_i} item={el}/>)}
      </Suspense>
    </div>
    )
}