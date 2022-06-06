import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, Text, TouchableOpacity } from "react-native"
import { useQuery } from '@apollo/client'
import { GET_ALL_USERS } from '../../db/query/requests'
import { IUsers } from '../../type/types'
import { ISchemaUsers } from '../../db/query/schema'
import CharatersContainer from './CharatersCotainer'


const CharatersComponent: React.FC = () => {
    const { data } = useQuery<ISchemaUsers>(GET_ALL_USERS);
    const [users, setUsers] = useState<IUsers[]>([]);

    useEffect(() => {
        setUsers(data?.characters.results)
    }, [])

    return(

        <Wrapper>                     
            <FlatList
                showsVerticalScrollIndicator={false}
                data={users}
                renderItem={(el) => <CharatersContainer {...el.item}/>}
                keyExtractor={(el) => el.id}
                numColumns={2}
       
            />
        </Wrapper>
         
    )
}

const Wrapper = styled.View`
    flex:1;
    margin: 0 auto;
    width: 90%;
`

export default CharatersComponent;