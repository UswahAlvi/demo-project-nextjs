'use client'
import { useState } from "react";
import { FetchData } from "../types";
import Searchbar from "./Searchbar";
import Tagbar from "./Tagbar";

export default function Topbar (){
    return (
    <>
     <Searchbar/>
     <Tagbar />
     </>
    )
}