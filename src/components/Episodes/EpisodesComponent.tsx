import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { FlatList } from "react-native"
import { useQuery } from '@apollo/client'
import { GET_ALL_EPISODES } from '../../db/query/requests'
import { IAllEpisode, IEpisode, ILocation, IUsers } from '../../type/types'
import { ISchemaEpisodes, ISchemaLocation, ISchemaUsers } from '../../db/query/schema'
import EpisodesContainer from './EpisodesContainer'
import { ActivityIndicator } from 'react-native-paper'
import { colors } from '../../theme/config'



const EpisodesComponent: React.FC = () => {
    const { data, loading, error, fetchMore, client } = useQuery<ISchemaEpisodes>(GET_ALL_EPISODES, {
        variables: {
            page: 1
        }
    });
    // const [episodes, setEpisodes] = useState<IAllEpisode[]>([]);

    // useEffect(() => {
    //     setEpisodes(data?.episodes.results || [])
    // }, [data])

    const fun = () => {
        if(data?.episodes.info.next == null) {
            client.stop();      
        }
        else {
            fetchMore({
                variables: {
                    page: data?.episodes.info.next
                },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                    fetchMoreResult.episodes.results = [
                        ...prevResult.episodes.results,
                        ...fetchMoreResult.episodes.results
                    ];
                
                    return fetchMoreResult;
                }
            })
            console.log(data?.episodes.info.next)
            console.log(data?.episodes.results.length)
        }
    }
  


    return(

        <Wrapper>                     
            {loading || error ? <ActivityIndicator style={{height: '100%'}} color={colors.violet} size='large'/> :
             <FlatList
             showsVerticalScrollIndicator={false}
             data={data?.episodes.results}
             renderItem={(el) => <EpisodesContainer {...el.item}/>}
             keyExtractor={(el) => String(el.id)}
             numColumns={1}
            onEndReachedThreshold={0.5}
            onEndReached={() => fun()}
          
            />}
        </Wrapper>
         
    )
}

const Wrapper = styled.View`
    flex:1;
    margin: 0 auto;
    width: 90%;
`

export default EpisodesComponent;