import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { FlatList } from "react-native"
import { ObservableQuery, useQuery } from '@apollo/client'
import { GET_ALL_USERS } from '../../db/query/requests'
import { IAllUser } from '../../type/types'
import CharatersContainer from './CharatersCotainer'
import { ActivityIndicator, Checkbox } from 'react-native-paper'
import { colors } from '../../theme/config'
import { ISchemaUsers } from '../../db/query/schema'


const CharatersComponent: React.FC = () => {
    const { data, loading, error, fetchMore, client } = useQuery<ISchemaUsers>(GET_ALL_USERS);

    const fun = () => {
        if(data?.characters.info.next == null) {
            client.stop();
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
       
        console.log(data?.characters.info.next)
        console.log(data?.characters.results.length)
    }


    return(

        <Wrapper>         
            {loading || error ? <ActivityIndicator style={{height: '100%'}} color={colors.violet} size='large'/> :
            <FlatList               
              
                data={data?.characters.results}
                renderItem={(el) => <CharatersContainer {...el.item}/>}
                keyExtractor={(el) => String(el.id)}
              
                numColumns={2}
                onEndReachedThreshold={3}
                onEndReached={() => fun()}
            />}
            {loading || error ? <ActivityIndicator style={{height: '100%'}} color={colors.violet} size='large'/> : null}
        </Wrapper>
      
    )
}

const Wrapper = styled.View`
    flex:1;
    margin: 0 auto;
    width: 90%;
`

export default CharatersComponent;











