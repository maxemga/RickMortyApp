export interface IUsers {
    id: number
    name : string
    image: string
    status: string
}

export interface ILocation {
    id: number
    name: string
    type: string
    dimension: string
    residents: Array<IUsers>
    created: string
}

export interface IEpisode {
    id: number
    name: string
    air_date: string
    episode: string
    characters: Array<IUsers>
    created: string
}
