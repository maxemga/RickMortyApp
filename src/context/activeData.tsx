import React, {createContext, useState} from 'react';
// FIXME: затипизировать initialState
export const ActiveDataContext = createContext({});
// Обычно здесь же пишут хук useActiveData, useContext(yourContext)
// FIXME: убрать any
export const ActiveDataProvider = ({children}: {children: any}) => {
  const [charatersCardActiveName, setCharatersCardActiveName] =
    // FIXME: можно не писать дженерик и оставить пустую строку ts сам подтянет тип
    useState<string>('');
  const [locationsCardActiveName, setLocationsCardActiveName] =
    useState<string>('');
  const [episodesCardActiveName, setEpisodesCardActiveName] =
    useState<string>('');

  return (
    <ActiveDataContext.Provider
      // FIXME: все value оборачивается в useMemo
      value={{
        charatersCardActiveName,
        setCharatersCardActiveName,
        locationsCardActiveName,
        setLocationsCardActiveName,
        episodesCardActiveName,
        setEpisodesCardActiveName,
      }}>
      {children}
    </ActiveDataContext.Provider>
  );
};
