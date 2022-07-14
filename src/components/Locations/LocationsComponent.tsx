import styled from 'styled-components/native';
import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { ActivityIndicator } from 'react-native-paper';
import { FilterContext } from 'src/context/filterContext';
import { GET_ALL_LOCATIONS } from 'src/db/query/requests';
import { ISchemaLocations } from 'src/db/query/schema';
import { colors } from 'src/theme/config';
import { IFilterContext } from 'src/type/types';
import { LocationsContainer } from 'src/components/Locations/LocationsContainer';

export const LocationsComponent: React.FC = () => {
    const { locationsActiveDimension, locationsActiveName, locationsActiveType } =
        useContext<IFilterContext>(FilterContext);
    const { data, loading, error, fetchMore, client } = useQuery<ISchemaLocations>(
        GET_ALL_LOCATIONS,
        {
            variables: {
                name: locationsActiveName,
                type: locationsActiveType,
                dimension: locationsActiveDimension,
            },
        },
    );

    const FetchData = () => {
        if (data?.locations.info.next == null) {
            client.stop();
        } else {
            fetchMore({
                variables: {
                    page: data?.locations.info.next,
                },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                    fetchMoreResult.locations.results = [
                        ...prevResult.locations.results,
                        ...fetchMoreResult.locations.results,
                    ];

                    return fetchMoreResult;
                },
            });
        }
    };

    return (
        <Wrapper>
            {loading || error ? (
                <ActivityIndicator style={{ height: '100%' }} color={colors.violet} size="large" />
            ) : data?.locations.results.length !== 0 ? (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data?.locations.results}
                    renderItem={(el) => <LocationsContainer {...el.item} />}
                    keyExtractor={(el) => String(el.id)}
                    numColumns={2}
                    onEndReachedThreshold={0}
                    onEndReached={() => FetchData()}
                />
            ) : (
                <WarningBlock>
                    <WarningText>Empty</WarningText>
                </WarningBlock>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.View`
    flex: 1;
    margin: 0 auto;
    width: 90%;
`;

const WarningBlock = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const WarningText = styled.Text`
    color: ${colors.blue.dim};
    font-size: 30px;
    opacity: 0.5;
    font-weight: bold;
`;
