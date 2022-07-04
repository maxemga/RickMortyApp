import React, { createContext, useState } from "react";
import { IFilterContext } from "../type/types";



export const FilterContext = createContext({});

export const FilterProvider = ({ children }: { children: any }) => {
    const [activeName, setActiveName]= useState<string>('');
    const [activeStatus, setActiveStatus] = useState<string>('');
    const [activeGender, setActiveGender] = useState<string>('');
    const [activeSpecies, setActiveSpecies] = useState<string>('');

    return <FilterContext.Provider value={{activeName, setActiveName, activeStatus,
        setActiveStatus, activeGender, setActiveGender, activeSpecies, setActiveSpecies}}>
            {children}
        </FilterContext.Provider>
}