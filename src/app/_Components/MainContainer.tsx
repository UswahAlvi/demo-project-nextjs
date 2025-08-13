'use client'
import { DataProvider, useData } from "../_Context/context";
import Statusbar from "./Statusbar";
import Topbar from "./Topbar";;
import ResultsContainer from "./ResultsContainer";

export default function MainContainer(){
   
    return(
        <DataProvider>
            <div className="flex flex-col gap-[20px] p-[24px] pb-[0px] max-h-[480px] min-h-[490px] w-full h-full">
                <Topbar />
                    <ResultsContainer />
            </div>
            <hr className="text-(--color-gray)"/>
            <Statusbar/>
        </DataProvider>
    )
}