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
    created: string
    
}

export interface ILocation {
    id: number
    name: string
    type: string
    dimension: string
    residents: Array<IUser>
    created: string
}

export interface IEpisode {
    id: number
    name: string
    air_date: string
    episode: string
    characters: Array<IUser>
    created: string
}
