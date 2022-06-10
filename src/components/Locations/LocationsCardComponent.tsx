
import { useQuery } from '@apollo/client'
import { useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import styled from 'styled-components'
import { GET_ALL_USERS, GET_SINGLE_EPISODE, GET_SINGLE_LOCATION } from '../../db/query/requests'
import { ISchemaEpisode, ISchemaLocation, ISchemaUsers } from '../../db/query/schema'
import { colors } from '../../theme/config'
import CharatersContainer from '../Charaters/CharatersCotainer'



const LocaionsCardComponent = () => {
    const route = useRoute()
    const { data, loading, error } = useQuery<ISchemaLocation>(GET_SINGLE_LOCATION, {
        variables: {
            id: route.params.locationId
        }
    });

    return(
        <LocationsCardBlock>
            <LocationCardHeader>
                <Wrapper>

                    <LocationCardHeaderContent>
                        { loading || error ? <ErrorBlock style={{ width: '50%'}}/> : <LocationCardDate>{data?.location.type}</LocationCardDate>}
                        { loading || error ? <ErrorBlock style={{ width: '80%', height: 20}}/> : <LocationCardName>{data?.location.name}</LocationCardName>}
                        { loading || error ? <ErrorBlock style={{ width: '50%'}}/> : <LocationCardNumber>{data?.location.dimension}</LocationCardNumber>}
                    </LocationCardHeaderContent>
                    
                </Wrapper>
            </LocationCardHeader>
            <LocationCardContent>
                <Wrapper>
                    <View>
                    <LocationCardContentTitle>Residents</LocationCardContentTitle>
                    {loading || error ? <ActivityIndicator style={{height: '100%'}} color={colors.violet} size='large'/> :
                        <FlatList
                        scrollEnabled={false}
                        showsVerticalScrollIndicator={false}
                        data={data?.location.residents}
                        renderItem={(el) => <CharatersContainer {...el.item}/>}
                        keyExtractor={(el) => String(el.id)}
                        numColumns={2}
                        />
                    }
                     </View>
                </Wrapper>
            </LocationCardContent>
        </LocationsCardBlock>
    )
}

const LocationsCardBlock = styled.ScrollView`

`

const LocationCardHeaderContent = styled.View`
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LocationCardHeader = styled.View`

`

const LocationCardDate = styled.Text`
    color: ${colors.textDiscription};
    font-size: 11px;
`

const LocationCardName = styled.Text`
    color: ${colors.textTitle};
    font-weight: bold;
    font-size: 28px;
    margin-top: 5px;
    text-align: center;
`

const LocationCardNumber = styled.Text`
    color: ${colors.textNavigaion};
    font-weight: bold;
    font-size: 13px;
    margin-top: 5px;
`
const LocationCardContentTitle = styled.Text`
    padding-top: 20px;
    color: ${colors.textNavigaion};
    font-size: 22px;
    font-weight: bold;
    
`

const LocationCardContent = styled.View`
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





export default LocaionsCardComponent;