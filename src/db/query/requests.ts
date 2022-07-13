import {gql} from '@apollo/client';

export const USER_FRAGMENT = gql`
  fragment UserFragment on Character {
    id
    name
    status
    image
  }
`;

export const LOCATION_FRAGMENT = gql`
  fragment LocationFragment on Location {
    id
    name
    type
  }
`;

export const EPISODE_FRAGMENT = gql`
  fragment EpisodeFragment on Episode {
    id
    name
    air_date
    episode
  }
`;

export const GET_ALL_USERS = gql`
  ${USER_FRAGMENT}
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
        ...UserFragment
      }
    }
  }
`;

export const GET_SINGLE_USER = gql`
  ${USER_FRAGMENT}
  ${EPISODE_FRAGMENT}
  ${LOCATION_FRAGMENT}
  query GetSingleUser($id: ID!) {
    character(id: $id) {
      ...UserFragment
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
        ...LocationFragment
        dimension
      }
      episode {
        ...EpisodeFragment
      }
    }
  }
`;


export const GET_ALL_LOCATIONS = gql`
  ${LOCATION_FRAGMENT}
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
        ...LocationFragment
      }
    }
  }
`;

export const GET_SINGLE_LOCATION = gql`
  ${USER_FRAGMENT}
  ${LOCATION_FRAGMENT}
  query GetSingleLocation($id: ID!) {
    location(id: $id) {
      ...LocationFragment
      dimension
      residents {
        ...UserFragment
      }
    }
  }
`;


export const GET_ALL_EPISODES = gql`
  ${EPISODE_FRAGMENT}
  query GetAllEpisodes($page: Int, $name: String, $episode: String) {
    episodes(page: $page, filter: {name: $name, episode: $episode}) {
      info {
        next
      }
      results {
        ...EpisodeFragment
      }
    }
  }
`;

export const GET_SINGLE_EPISODE = gql`
  ${USER_FRAGMENT}
  ${EPISODE_FRAGMENT}
  query GetSingleEpisode($id: ID!) {
    episode(id: $id) {
      ...EpisodeFragment
      characters {
        ...UserFragment
      }
    }
  }
`;