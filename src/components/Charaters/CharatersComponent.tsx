import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { FlatList, View } from "react-native"
import { useQuery } from '@apollo/client'
import { GET_ALL_USERS } from '../../db/query/requests'
import { CharatersContainer }  from './CharatersCotainer'
import { ActivityIndicator, RadioButton } from 'react-native-paper'
import { colors } from '../../theme/config'
import { ISchemaUsers } from '../../db/query/schema'


const CharatersComponent: React.FC = () => {
    const { data, loading, error, fetchMore, client } = useQuery<ISchemaUsers>(GET_ALL_USERS);

    const FetchData = () => {
        if(data?.characters.info.next == null) {
            client.stop();
            return null;
        }
        else {
            fetchMore({
                variables: {
                    page: data?.characters.info.next
                },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                    fetchMoreResult.characters.results = [
                        ...prevResult.characters.results,
                        ...fetchMoreResult.characters.results
                    ];
                
                    return fetchMoreResult;
                }
            })
        }
    }

        useEffect(() => {
            console.log('1')
        }, [error, loading])
    return(

        <Wrapper> 
            {loading || error ? <ActivityIndicator style={{height: '100%'}} color={colors.violet} size='large'/> :
            <FlatList               
              
                data={data?.characters.results}
                renderItem={(el) => <CharatersContainer {...el.item}/>}
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

export default CharatersComponent;











