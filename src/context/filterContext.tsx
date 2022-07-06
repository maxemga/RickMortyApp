import React, { createContext, useState } from "react";



export const FilterContext = createContext({});

export const FilterProvider = ({ children }: { children: any }) => {
    const [charatersActiveName, setCharatersActiveName]= useState<string>('');
    const [charatersActiveStatus, setCharatersActiveStatus] = useState<string>('');
    const [charatersActiveGender, setCharatersActiveGender] = useState<string>('');
    const [charatersActiveSpecies, setCharatersActiveSpecies] = useState<string>('');

    const [locationsActiveName, setLocationsActiveName]= useState<string>('');
    const [locationsActiveType, setLocationsActiveType] = useState<string>('');
    const [locationsActiveDimension, setLocationsActiveDimension] = useState<string>('');

    const [episodesActiveName, setEpisodesActiveName]= useState<string>('');
    const [episodesActiveEpisode, setEpisodesActiveEpisode] = useState<string>('');


    return <FilterContext.Provider value={{charatersActiveName, setCharatersActiveName, charatersActiveStatus,
        setCharatersActiveStatus, charatersActiveGender, setCharatersActiveGender, charatersActiveSpecies, setCharatersActiveSpecies,
        locationsActiveName, setLocationsActiveName, locationsActiveType, setLocationsActiveType, setLocationsActiveDimension,
        locationsActiveDimension, episodesActiveName, setEpisodesActiveName, episodesActiveEpisode, setEpisodesActiveEpisode}}>
            {children}
        </FilterContext.Provider>
}