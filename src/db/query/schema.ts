import { IEpisode, ILocation, IUser } from "../../type/types"

export interface ISchemaUsers {

  characters: {
    info: {
      next: number
    }
    results: Array<IUser>
  }
}

export interface ISchemaUser {
  character: IUser
}


export interface ISchemaLocations {
  locations: {
    results: Array<ILocation>
  }
}

export interface ISchemaLocation {
  location: ILocation
}


export interface ISchemaEpisodes {
  episodes: {
    results: Array<IEpisode>
}
}

export interface ISchemaEpisode {
  episode: IEpisode

}


// # type Query {
// #   character(id: ID!): Character
// #   characters(page: Int, filter: FilterCharacter): Characters
// #   charactersByIds(ids: [ID!]!): [Character]
// #   location(id: ID!): Location
// #   locations(page: Int, filter: FilterLocation): Locations
// #   locationsByIds(ids: [ID!]!): [Location]
// #   episode(id: ID!): Episode
// #   episodes(page: Int, filter: FilterEpisode): Episodes
// #   episodesByIds(ids: [ID!]!): [Episode]
// # }


// # type Character {
// #   id: ID
// #   name: String
// #   status: String
// #   species: String
// #   type: String
// #   gender: String!
// #   origin: Location
// #   location: Location
// #   image: String
// #   episode: [Episode]!
// #   created: String
// # }

// # input FilterCharacter { 
// #   name: String
// #   status: String
// #   species: String
// #   type: String
// #   gender: String
// # }


// # type Characters {
// #   info: Info
// #   results: [Character]
// # }


// # type Location {
// #   id: ID
// #   name: String
// #   type: String
// #   dimension: String
// #   residents: [Character]!
// #   created: String
// # }

// # input FilterLocation {
// #   name: String
// #   type: String
// #   dimension: String
// # }


// # type Locations {
// #   info: Info
// #   results: [Location]
// # }


// # input FilterEpisode {
// #   name: String
// #   episode: String
// # }


// # type Episode {
// #   id: ID
// #   name: String
// #   air_date: String
// #   episode: String
// #   characters: [Character]!
// #   created: String
// # }

// # type Episodes {
// #   info: Info
// #   results: [Episode]
// # }



// # #
// # type Info {
// #   # The length of the response.
// #   count: Int

// #   # The amount of pages.
// #   pages: Int

// #   # Number of the next page (if it exists)
// #   next: Int

// #   # Number of the previous page (if it exists)
// #   prev: Int
// # }

