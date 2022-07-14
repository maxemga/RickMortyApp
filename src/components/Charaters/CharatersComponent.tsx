import styled from 'styled-components/native';
import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useQuery } from '@apollo/client';
import { FilterContext } from 'src/context/filterContext';
import { GET_ALL_USERS } from 'src/db/query/requests';
import { ISchemaUsers } from 'src/db/query/schema';
import { colors } from 'src/theme/config';
import { IFilterContext } from 'src/type/types';
import { CharatersContainer } from 'src/components/Charaters/CharatersCotainer';

export const CharatersComponent: React.FC = () => {
    const {
        charatersActiveGender,
        charatersActiveName,
        charatersActiveSpecies,
        charatersActiveStatus,
    } = useContext<IFilterContext>(FilterContext);
    const { data, loading, error, fetchMore, client } = useQuery<ISchemaUsers>(GET_ALL_USERS, {
        variables: {
            name: charatersActiveName,
            gender: charatersActiveGender,
            status: charatersActiveStatus,
            species: charatersActiveSpecies,
        },
    });

    const FetchData = () => {
        if (data?.characters.info.next == null) {
            client.stop();
            return null;
        } else {
            fetchMore({
                variables: {
                    page: data?.characters.info.next,
                },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                    fetchMoreResult.characters.results = [
                        ...prevResult.characters.results,
                        ...fetchMoreResult.characters.results,
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
            ) : data?.characters.results.length !== 0 ? (
                <FlatList
                    data={data?.characters.results}
                    renderItem={(el) => <CharatersContainer {...el.item} />}
                    keyExtractor={(el) => String(el.id)}
                    numColumns={2}
                    onEndReachedThreshold={0}
                    onEndReached={data?.characters.info.next ? FetchData : null}
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
