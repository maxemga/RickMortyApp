import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { FlatList } from "react-native"
import { useQuery } from '@apollo/client'
import { GET_ALL_USERS } from '../../db/query/requests'
import { IAllUser } from '../../type/types'
import CharatersContainer from './CharatersCotainer'
import { ActivityIndicator, Checkbox } from 'react-native-paper'
import { colors } from '../../theme/config'
import { ISchemaUsers } from '../../db/query/schema'


const CharatersComponent: React.FC = () => {
    const [users, setUsers] = useState<IAllUser[]>([]);

    const { data, loading, error, fetchMore } = useQuery<ISchemaUsers>(GET_ALL_USERS, {
        variables: {
            page: 1
        }
    });

    // const fun = () => {
    //     setUsers(prevCharater => [...prevCharater, ...data?.characters.results || []])
    //     console.log(users.length)
    // }

    return(

        <Wrapper>         
            {loading || error ? <ActivityIndicator style={{height: '100%'}} color={colors.violet} size='large'/> :
            <FlatList               
              
                data={data?.characters.results}
                renderItem={(el) => <CharatersContainer {...el.item}/>}
                // keyExtractor={(el) => String(el.id)}
                keyExtractor={() => String(Math.random())}
                numColumns={2}
                // onEndReachedThreshold={2000}
                // onEndReached={() => fetchMore({
                //     variables: {
                //         page: data?.characters.info.next
                //     },
                //     updateQuery: (prevResult, { fetchMoreResult }) => {
                //         fetchMoreResult.characters.results = [
                //             ...prevResult.characters.results,
                //             ...fetchMoreResult.characters.results
                //         ];
                  
                //         return fetchMoreResult;
                //     }
                // })}
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