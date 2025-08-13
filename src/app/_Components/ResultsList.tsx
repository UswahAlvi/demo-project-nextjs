'use client';

import { useEffect } from 'react';
import { useData } from '../_Context/context';
import ResultItemComponent from './ResultItem';
import { ActionType, Item } from '../types';
const TIMEOUT = 5000

export default function ResultsList() {

  const { query, results, dispatch, length } = useData();
  let controller : AbortController | undefined
  useEffect(() => {
    
    if (query === ''){
      dispatch({type:'reset'})
      return
    }
    const fetchData = async () => {
      if(controller) controller.abort()
      controller = new AbortController()
      const timeoutId = setTimeout(()=>controller?.abort(), TIMEOUT)
      try {
        const res = await fetch(`https://frontend-test-api.digitalcreative.cn/?no-throttling=true&search=${query}`, {signal: controller.signal});
        if (!res.ok) throw new Error();
        const data: Item[] = await res.json();
        dispatch({ type: ActionType.dataReceived, payload: data });
      } 
      catch (err : any) {
        if(err?.name === 'AbortError'){
          dispatch({type: ActionType.requestTimedOut})
        }
        else{
          dispatch({type: ActionType.requestFailed})
        }
      }finally{
        clearTimeout(timeoutId)
      }
    };
    const timer = setTimeout(()=>{
      fetchData()
    }, 3000)

    return ()=> clearTimeout(timer)
  }, [query, dispatch]);

  if(!length) return<></>
  
  return (
    <div className="flex flex-col gap-[10px] overflow-scroll">
      {results.map((el: Item, _i: number) => (
        <ResultItemComponent key={_i} item={el} />
      ))}
    </div>
  );
}
