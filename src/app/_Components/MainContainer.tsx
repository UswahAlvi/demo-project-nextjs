'use client'
import { DataProvider, useData } from "../_Context/context";
import Statusbar from "./Statusbar";
import Topbar from "./Topbar";;
import ResultsContainer from "./ResultsContainer";

export default function MainContainer(){
   
    return(
        <DataProvider>
            <div className="flex flex-col gap-[10px] sm:gap-[20px] p-[12px] pb-[0px] sm:p-[24px] sm:pb-[0px] max-h-[500px] w-full h-full">
                <Topbar />
                <ResultsContainer />
            </div>
            <hr className="text-(--color-gray)"/>
            <Statusbar/>
        </DataProvider>
    )
}