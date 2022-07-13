import React, { createContext, useMemo, useState } from 'react';
// FIXME: затипизировать initialState
export const ActiveDataContext = createContext({});
// Обычно здесь же пишут хук useActiveData, useContext(yourContext)
export const ActiveDataProvider = ({ children }: { children: Element }) => {
    const [charatersCardActiveName, setCharatersCardActiveName] = useState<string>('');
    const [locationsCardActiveName, setLocationsCardActiveName] = useState<string>('');
    const [episodesCardActiveName, setEpisodesCardActiveName] = useState<string>('');

    const value = useMemo(
        () => ({
            charatersCardActiveName,
            setCharatersCardActiveName,
            locationsCardActiveName,
            setLocationsCardActiveName,
            episodesCardActiveName,
            setEpisodesCardActiveName,
        }),
        [charatersCardActiveName, locationsCardActiveName, episodesCardActiveName],
    );

    return <ActiveDataContext.Provider value={value}>{children}</ActiveDataContext.Provider>;
};
