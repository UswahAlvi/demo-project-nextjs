import { useData } from "../_Context/context";
import TagItem from "./TagItem";
const MENU: string[] = [
  'Languages',
  'Build',
  'Design',
  'Cloud',
]
export default function Tagbar(){
    return(
        <div className="flex gap-[16px]">
            {MENU.map((el,_i)=><TagItem key={_i} name={el}/>)}
        </div>
    )
}