import {Item} from '../types'
import ResultItemComponent from './ResultItem'

export default function ResultsList({results}: {results : Item[]}){
    return (
    <div className="flex flex-col gap-[10px] overflow-scroll min-h-[200px]">
      {results?.map((el : Item,_i)=><ResultItemComponent key={_i} item={el}/>)}
    </div>
    )
}