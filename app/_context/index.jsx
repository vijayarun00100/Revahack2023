"use client";
import React,{useContext,createContext} from "react";

import { useAddress,useContract,useMetamask,useContractWrite } from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext=createContext();

export const StateContextProvider=({children}) => {
    const {contract}=useContract('0x0E60D8c55aDc862555610B7F84F937b40E4fBc30');
    const {mutateAsync:createCourse} = useContractWrite(contract,'createCourse');

    const address=useAddress();
    const connect=useMetamask();

    const publishCourse=async (form) => {
        
        try {
            const data=await createCourse([
                address,
                form.title,
                form.description,
                form.target,
            ])
            console.log("contract call success",data);
        } catch (error) {
            console.log("contract call failure",error);
        }
    }

    return (
        <StateContext.Provider
            value={{
                address,
                contract,
                createCourse:publishCourse,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext=()=> useContext(StateContext);