import { IEpisode, ILocation, IUsers } from "../../type/types"

export interface ISchemaUsers {
  characters: {
    results: Array<IUsers>
  }
}

export interface ISchemaLocation {
  locations: {
    results: Array<ILocation>
  }
}

export interface ISchemaEpisodes {
  episodes: {
    results: Array<IEpisode>
}
}
