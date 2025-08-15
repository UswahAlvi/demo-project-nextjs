import { useEffect } from "react";
import { useData } from "../_Context/context";
import FallbackComponent from "./FallbackComponent";
import ResultsList from "./ResultsList";

export default function ResultsContainer(){
    const {length, dispatch} = useData()
    useEffect(()=>{
        dispatch({type: 'reset'})
    },[])
    return(<div className="relative">
        <ResultsList />
        <FallbackComponent />
    </div>
    )
}