import styled from 'styled-components'
import { FlatList, ScrollView, Text, View } from "react-native"
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../db/query/requests';
import { IUsers } from '../../type/users';
import { ActivityIndicator } from 'react-native-paper';
import CharatersContainer from './CharatersCotainer';

const CharatersComponent: React.FC = () => {
  
    return(
        <Wrapper>
            <ScrollView>

          
            </ScrollView>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    display: flex;
    margin: 0 auto;
    width: 90%;
`

export default CharatersComponent;