import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, Text, TouchableOpacity } from "react-native"
import { useQuery } from '@apollo/client'
import { GET_ALL_LOCATIONS, GET_ALL_USERS } from '../../db/query/requests'
import { ILocation, IUsers } from '../../type/types'
import { ISchemaLocation, ISchemaUsers } from '../../db/query/schema'
import LocationsContainer from './LocationsContainer'
import { ActivityIndicator } from 'react-native-paper'
import { colors } from '../../theme/config'



const LocationsComponent: React.FC = () => {
    const { data, loading, error } = useQuery<ISchemaLocation>(GET_ALL_LOCATIONS);
    const [locations, setLocations] = useState<ILocation[]>([]);

    useEffect(() => {
        setLocations(data?.locations.results || [])
    }, [data])

    return(

        <Wrapper>                     
            {loading || error ?  <ActivityIndicator style={{height: '100%'}} color={colors.violet} size='large'/> :
            <FlatList
                showsVerticalScrollIndicator={false}
                data={locations}
                renderItem={(el) => <LocationsContainer {...el.item}/>}
                keyExtractor={(el) => String(el.id)}
                numColumns={2}
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