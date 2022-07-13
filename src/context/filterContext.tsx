import React, { createContext, useMemo, useState } from 'react';

export const FilterContext = createContext({});

export const FilterProvider = ({ children }: { children: Element }) => {
    const [charatersActiveName, setCharatersActiveName] = useState<string>('');
    const [charatersActiveGender, setCharatersActiveGender] = useState<string>('');
    const [charatersActiveStatus, setCharatersActiveStatus] = useState<string>('');
    const [charatersActiveSpecies, setCharatersActiveSpecies] = useState<string>('');

    const [locationsActiveName, setLocationsActiveName] = useState<string>('');
    const [locationsActiveType, setLocationsActiveType] = useState<string>('');
    const [locationsActiveDimension, setLocationsActiveDimension] = useState<string>('');

    const [episodesActiveName, setEpisodesActiveName] = useState<string>('');
    const [episodesActiveEpisode, setEpisodesActiveEpisode] = useState<string>('');

    const clearFilter = (type: string) => {
        if (type == 'Charaters') {
            setCharatersActiveGender('');
            setCharatersActiveName('');
            setCharatersActiveSpecies('');
            setCharatersActiveStatus('');
        } else if (type == 'Locations') {
            setLocationsActiveName('');
            setLocationsActiveType('');
            setLocationsActiveDimension('');
        } else if (type == 'Episodes') {
            setEpisodesActiveName('');
            setEpisodesActiveEpisode('');
        }
    };

    const value = useMemo(
        () => ({
            charatersActiveName,
            setCharatersActiveName,
            charatersActiveStatus,
            setCharatersActiveStatus,
            charatersActiveGender,
            setCharatersActiveGender,
            charatersActiveSpecies,
            setCharatersActiveSpecies,
            locationsActiveName,
            setLocationsActiveName,
            locationsActiveType,
            setLocationsActiveType,
            setLocationsActiveDimension,
            locationsActiveDimension,
            episodesActiveName,
            setEpisodesActiveName,
            episodesActiveEpisode,
            setEpisodesActiveEpisode,
            clearFilter,
        }),
        [
            charatersActiveName,
            charatersActiveStatus,
            charatersActiveGender,
            charatersActiveSpecies,
            locationsActiveName,
            locationsActiveType,
            locationsActiveDimension,
            episodesActiveName,
            episodesActiveEpisode,
        ],
    );

    return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
};
