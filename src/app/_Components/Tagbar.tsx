import TagItem from "./TagItem";
const MENU: string[] = [
  'Languages',
  'Build',
  'Design',
  'Cloud',
]
export default function Tagbar({query, onQueryUpdate}: {query: string, onQueryUpdate: any}){
    return(
        <div className="flex gap-[16px]">
            {MENU.map(
                (el,_i)=>
                {
                    const active : boolean = query.toLowerCase() === el.toLowerCase()
                    return<TagItem key={_i} name={el} active ={active} handleClick={onQueryUpdate}/>
                }
            )}
        </div>
    )
}