
import { useQuery } from '@apollo/client'
import { useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import styled from 'styled-components'
import { GET_ALL_USERS, GET_SINGLE_EPISODE } from '../../db/query/requests'
import { ISchemaEpisode, ISchemaUsers } from '../../db/query/schema'
import { colors } from '../../theme/config'
import CharatersContainer from '../Charaters/CharatersCotainer'



const EpisodesCardComponent = () => {
    const route = useRoute()
    const { data, loading, error } = useQuery<ISchemaEpisode>(GET_SINGLE_EPISODE, {
        variables: {
            id: route.params.episodeId
        }
    });

    return(
        <EpisodeCardBlock>
            <EpisodeCardHeader>
                <Wrapper>

                    <EpisodeCardHeaderContent>
                        { loading || error ? <ErrorBlock style={{width: '50%'}}/> : <EpisodeCardDate>{data?.episode.air_date}</EpisodeCardDate>}
                        { loading || error ? <ErrorBlock style={{width: '80%', height: 20}}/> : <EpisodeCardName>{data?.episode.name}</EpisodeCardName>}
                        { loading || error ? <ErrorBlock style={{width: '50%'}}/> : <EpisodeCardNumber>{data?.episode.episode}</EpisodeCardNumber>}
                    </EpisodeCardHeaderContent>
                    
                </Wrapper>
            </EpisodeCardHeader>
            <EpisodeCardContent>
                <Wrapper>
                    <View>
                    <EpisodeCardContentTitle>Characters</EpisodeCardContentTitle>
                    {loading || error ? <ActivityIndicator style={{height: '100%'}} color={colors.violet} size='large'/> :
                        <FlatList
                            scrollEnabled={false}
                            showsVerticalScrollIndicator={false}
                            data={data?.episode.characters}
                            renderItem={(el) => <CharatersContainer {...el.item}/>}
                            keyExtractor={(el) => String(el.id)}
                            numColumns={2}
                        />
                    }
                     </View>
                </Wrapper>
            </EpisodeCardContent>
        </EpisodeCardBlock>
    )
}

const EpisodeCardBlock = styled.ScrollView`
`

const EpisodeCardHeaderContent = styled.View`
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EpisodeCardHeader = styled.View`

`

const EpisodeCardDate = styled.Text`
    color: ${colors.textDiscription};
    font-size: 11px;
`

const EpisodeCardName = styled.Text`
    color: ${colors.textTitle};
    font-weight: bold;
    font-size: 28px;
    margin-top: 5px;
    text-align: center;
`

const EpisodeCardNumber = styled.Text`
    color: ${colors.textNavigaion};
    font-weight: bold;
    font-size: 13px;
    margin-top: 5px;
`
const EpisodeCardContentTitle = styled.Text`
    padding-top: 20px;
    color: ${colors.textNavigaion};
    font-size: 22px;
    font-weight: bold;
`

const EpisodeCardContent = styled.View`
    padding-bottom: 50px;
    background-color: white;
`

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`

const ErrorBlock = styled.View`
    background-color: #CFCFCF;
    border-radius: 15px;
    width: 100%;
    height: 15px;
    margin-top: 3px;
`




export default EpisodesCardComponent;