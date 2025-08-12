'use client'
import { useState } from "react";
import { FetchData } from "../types";
import Searchbar from "./Searchbar";
import Tagbar from "./Tagbar";

export default function Topbar ({fetchData}: {fetchData: FetchData}){
    const [query, setQuery] = useState<string>('')
    const handleQueryUpdate = (value: string) => {
        setQuery(value)
        fetchData(value)
    }
    return (
    <>
     <Searchbar query={query} onQueryUpdate={handleQueryUpdate}/>
     <Tagbar query={query} onQueryUpdate={handleQueryUpdate}/>
     </>
    )
}