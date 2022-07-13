import { Dispatch, SetStateAction } from "react";

export interface IUser {
    id: number
    name : string
    status: string
    species: string
    type: string
    gender: string
    origin: ILocation
    location: ILocation
    image: string
    episode: Array<IEpisode>
};

export interface ILocation {
    id: number
    name: string
    type: string
    dimension: string
    residents: Array<IAllUser>
};

export interface IEpisode {
    id: number
    name: string
    air_date: string
    episode: string
    characters: Array<IUser>
};

export interface IAllUser {
    id: number
    name : string
    status: string
    image: string   
};

export interface IAllLocation {
    id: number
    name: string
    type: string
};

export interface IAllEpisode {
    id: number
    name: string
    air_date: string
    episode: string
};

export interface IFilterContext {
    charatersActiveName?: string,
    setCharatersActiveName?: Dispatch<SetStateAction<string>>;
    charatersActiveStatus?: string,
    setCharatersActiveStatus?: Dispatch<SetStateAction<string>>,
    charatersActiveGender?: string,
    setCharatersActiveGender?: Dispatch<SetStateAction<string>>,
    charatersActiveSpecies?: string,
    setCharatersActiveSpecies?: Dispatch<SetStateAction<string>>

    locationsActiveName?: string,
    setLocationsActiveName?: Dispatch<SetStateAction<string>>;
    locationsActiveType?: string,
    setLocationsActiveType?: Dispatch<SetStateAction<string>>,
    locationsActiveDimension?: string,
    setLocationsActiveDimension?: Dispatch<SetStateAction<string>>,

    episodesActiveName?: string,
    setEpisodesActiveName?: Dispatch<SetStateAction<string>>;
    episodesActiveEpisode?: string,
    setEpisodesActiveEpisode?: Dispatch<SetStateAction<string>>,

    clearFilter?: () => void
};

export interface ITypeModalContext {
    activeTypeModal?: string,
    setActiveTypeModal?: Dispatch<SetStateAction<string>>;
};

export interface IActiveDataContext {
    charatersCardActiveName?: string,
    setCharatersCardActiveName?: Dispatch<SetStateAction<string>>;
    locationsCardActiveName?: string,
    setLocationsCardActiveName?: Dispatch<SetStateAction<string>>,
    episodesCardActiveName?: string,
    setEpisodesCardActiveName?: Dispatch<SetStateAction<string>>,
};
