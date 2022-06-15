import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { FlatList } from "react-native"
import { useQuery } from '@apollo/client'
import { GET_ALL_LOCATIONS } from '../../db/query/requests'
import {  IAllLocation } from '../../type/types'
import { ISchemaLocation, ISchemaLocations, ISchemaUsers } from '../../db/query/schema'
import {LocationsContainer} from './LocationsContainer'
import { ActivityIndicator } from 'react-native-paper'
import { colors } from '../../theme/config'



const LocationsComponent: React.FC = () => {

    const { data, loading, error, fetchMore, client } = useQuery<ISchemaLocations>(GET_ALL_LOCATIONS);

  
    const FetchData = () => {
        if(data?.locations.info.next == null) {
            client.stop();                
            }
            else {
            fetchMore({
                variables: {
                    page: data?.locations.info.next
                },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                    fetchMoreResult.locations.results = [
                        ...prevResult.locations.results,
                        ...fetchMoreResult.locations.results
                    ];
                    
                    return fetchMoreResult;
                }
            })
            }
        
        console.log(data?.locations.info.next);
        console.log(data?.locations.results.length)
    }

    return(

        <Wrapper>                     
            {loading || error ?  <ActivityIndicator style={{height: '100%'}} color={colors.violet} size='large'/> :
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data?.locations.results}
                renderItem={(el) => <LocationsContainer {...el.item}/>}
                keyExtractor={(el) => String(el.id)}
                numColumns={2}
                onEndReachedThreshold={0}
                onEndReached={() => FetchData()}
            />}
        </Wrapper>
         
    )
}

const Wrapper = styled.View`
    flex:1;
    margin: 0 auto;
    width: 90%;
`

export default LocationsComponent;