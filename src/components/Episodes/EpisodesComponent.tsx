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
    const { data, loading, error } = useQuery<ISchemaEpisodes>(GET_ALL_EPISODES);
    const [episodes, setEpisodes] = useState<IAllEpisode[]>([]);

    useEffect(() => {
        setEpisodes(data?.episodes.results || [])
    }, [data])

    return(

        <Wrapper>                     
            {loading || error ? <ActivityIndicator style={{height: '100%'}} color={colors.violet} size='large'/> :
             <FlatList
             showsVerticalScrollIndicator={false}
             data={episodes}
             renderItem={(el) => <EpisodesContainer {...el.item}/>}
             keyExtractor={(el) => String(el.id)}
             numColumns={1}
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