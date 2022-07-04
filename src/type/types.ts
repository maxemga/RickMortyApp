import { Dispatch, SetStateAction } from "react"

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
    
}

export interface ILocation {
    id: number
    name: string
    type: string
    dimension: string
    residents: Array<IAllUser>
}

export interface IEpisode {
    id: number
    name: string
    air_date: string
    episode: string
    characters: Array<IUser>
}




export interface IAllUser {
    id: number
    name : string
    status: string
    image: string   
}

export interface IAllLocation {
    id: number
    name: string
    type: string
}

export interface IAllEpisode {
    id: number
    name: string
    air_date: string
    episode: string
}




export interface IFilterContext {
    activeName?: string,
    setActiveName?: Dispatch<SetStateAction<string>>;
    activeStatus?: string,
    setActiveStatus?: Dispatch<SetStateAction<string>>,
    activeGender?: string,
    setActiveGender?: Dispatch<SetStateAction<string>>,
    activeSpecies?: string,
    setActiveSpecies?: Dispatch<SetStateAction<string>>
}
