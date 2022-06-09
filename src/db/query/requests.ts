 import { gql } from '@apollo/client'
import { IEpisode } from '../../type/types'



export const GET_ALL_USERS = gql`
    query {
        characters{
            results {
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
                    created
                }
                image
                episode {
                    id
                    name
                    air_date
                    episode
                    created
                } 
                created    
            }
        }
    }
`

export const GET_SINGLE_USER = gql`
   query GetSingleUser($id: ID!){
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
                    created
                }
                image
                episode {
                    id
                    name
                    air_date
                    episode
                    created
                } 
                created   
            
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
                    species
                    type
                    gender    
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
                    species
                    type
                    gender 
                }
                created
            }
        }
    }
`





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

