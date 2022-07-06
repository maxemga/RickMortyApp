import React, { createContext, useState } from "react";



export const ActiveDataContext = createContext({});

export const ActiveDataProvider = ({ children }: { children: any }) => {
    const [charatersCardActiveName, setCharatersCardActiveName] = useState<string>('');
    const [locationsCardActiveName, setLocationsCardActiveName] = useState<string>('');
    const [episodesCardActiveName, setEpisodesCardActiveName] = useState<string>('');

    return <ActiveDataContext.Provider value={{charatersCardActiveName, setCharatersCardActiveName, locationsCardActiveName,
     setLocationsCardActiveName, episodesCardActiveName, setEpisodesCardActiveName}}>
            {children}
        </ActiveDataContext.Provider>
}