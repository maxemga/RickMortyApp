import styled from 'styled-components/native';
import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { ActivityIndicator } from 'react-native-paper';
import { FilterContext } from 'src/context/filterContext';
import { GET_ALL_EPISODES } from 'src/db/query/requests';
import { ISchemaEpisodes } from 'src/db/query/schema';
import { colors } from 'src/theme/config';
import { IFilterContext } from 'src/type/types';
import { EpisodesContainer } from 'src/components/Episodes/EpisodesContainer';

export const EpisodesComponent: React.FC = () => {
    const { episodesActiveEpisode, episodesActiveName } = useContext<IFilterContext>(FilterContext);
    const { data, loading, error, fetchMore, client } = useQuery<ISchemaEpisodes>(
        GET_ALL_EPISODES,
        {
            variables: {
                name: episodesActiveName,
                episode: episodesActiveEpisode,
            },
        },
    );

    const FetchData = () => {
        if (data?.episodes.info.next == null) {
            client.stop();
        } else {
            fetchMore({
                variables: {
                    page: data?.episodes.info.next,
                },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                    fetchMoreResult.episodes.results = [
                        ...prevResult.episodes.results,
                        ...fetchMoreResult.episodes.results,
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
            ) : data?.episodes.results.length !== 0 ? (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data?.episodes.results}
                    renderItem={(el) => <EpisodesContainer {...el.item} />}
                    keyExtractor={(el) => String(el.id)}
                    numColumns={1}
                    onEndReachedThreshold={0}
                    onEndReached={data?.episodes.info.next ? FetchData : null}
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
