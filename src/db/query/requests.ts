import {gql} from '@apollo/client';

export const GET_ALL_USERS = gql`
  query GetAllUsers(
    $page: Int
    $name: String
    $status: String
    $gender: String
    $species: String
  ) {
    characters(
      page: $page
      filter: {name: $name, status: $status, gender: $gender, species: $species}
    ) {
      info {
        next
      }
      results {
        id
        name
        status
        image
      }
    }
  }
`;

// FIXME: дублирующие поля можно вынести во фрагменты
// https://www.apollographql.com/docs/react/data/fragments/

export const GET_SINGLE_USER = gql`
  query GetSingleUser($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
        type
        dimension
        created
      }
      location {
        id
        name
        type
        dimension
      }
      image
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export const GET_ALL_LOCATIONS = gql`
  query GetAllLocations(
    $page: Int
    $type: String
    $name: String
    $dimension: String
  ) {
    locations(
      page: $page
      filter: {name: $name, dimension: $dimension, type: $type}
    ) {
      info {
        next
      }
      results {
        id
        name
        type
      }
    }
  }
`;

export const GET_SINGLE_LOCATION = gql`
  query GetSingleLocation($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        status
        image
      }
    }
  }
`;

export const GET_ALL_EPISODES = gql`
  query GetAllEpisodes($page: Int, $name: String, $episode: String) {
    episodes(page: $page, filter: {name: $name, episode: $episode}) {
      info {
        next
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export const GET_SINGLE_EPISODE = gql`
  query GetSingleEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        status
        image
      }
    }
  }
`;

// # query GET_ALL_USERS {
// #     characters{
// #         results {
// #         id,
// #         name,
// #         image,
// #         status
// #         }
// #     }
// # }

// #     query GET_ALL_LOCATIONS{
// #         locations {
// #             results {
// #             id
// #             name
// #             type
// #             dimension
// #             residents {
// #                 id
// #                 name
// #                 status
// #             }
// #             created
// #             }
// #         }
// #     }

// #     query GET_ALL_USERS {
// #         characters{
// #             results {
// #             id,
// #             name,
// #             image,
// #             status
// #             }
// #         }
// #     }
