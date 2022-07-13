import { useQuery } from '@apollo/client';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';
import { GET_SINGLE_LOCATION } from '../../db/query/requests';
import { ISchemaLocation } from '../../db/query/schema';
import { colors } from '../../theme/config';
import {CharatersContainer} from '../Charaters/CharatersCotainer';

export const LocaionsCardComponent = () => {
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
                         <View style={{flexDirection: 'row', flexWrap: 'wrap', width: '100%', marginTop: 10}}>
                         {data?.location.residents.map((el) => {
                             return <CharatersContainer key={el.id} {...el} />
                         })}
                      </View>
                    }  
                     </View>
                </Wrapper>
            </LocationCardContent>
        </LocationsCardBlock>
    );
};

const LocationsCardBlock = styled.ScrollView``;

const LocationCardHeaderContent = styled.View`
    padding: 30px 0;
    justify-content: center;
    align-items: center;
`;

const LocationCardHeader = styled.View``;

const LocationCardDate = styled.Text`
    color: ${colors.blue.dim};
    font-size: 11px;
`;

const LocationCardName = styled.Text`
    color: ${colors.blue.dark};
    font-weight: bold;
    font-size: 28px;
    margin-top: 5px;
    text-align: center;
`;

const LocationCardNumber = styled.Text`
    color: ${colors.silver.bright};
    font-weight: bold;
    font-size: 13px;
    margin-top: 5px;
`;

const LocationCardContentTitle = styled.Text`
    padding-top: 20px;
    color: ${colors.silver.bright};
    font-size: 22px;
    font-weight: bold;
`;

const LocationCardContent = styled.View`
    padding-bottom: 50px;
    background-color: ${colors.white.default};
`;

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;

const ErrorBlock = styled.View`
    background-color: ${colors.silver.lunar};
    border-radius: 15px;
    width: 100%;
    height: 15px;
    margin-top: 3px;
`;