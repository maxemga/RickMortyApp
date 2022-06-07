 import { gql } from '@apollo/client'



export const GET_ALL_USERS = gql`
    query {
        characters{
            results {
            id,
            name,
            image,
            status
            }
        }
    }
`

export const GET_ALL_LOCATIONS = gql`
    query {
        locations {
            results {
            id
            name
            type
            dimension
            residents {
                id
                name
                status     
            }
            created
            }
        }
    }
`

export const GET_ALL_EPISODES = gql`
    query {
        episodes {
            results {
            id
            name
            air_date
            episode
            characters {
                id
                name
                status
            }
            created
            }
        }
    }
`

