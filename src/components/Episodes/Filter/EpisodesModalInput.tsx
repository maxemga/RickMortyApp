import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useQuery } from '@apollo/client';
import Voice from '@react-native-community/voice';
import { IconDictation } from 'src/components/icons/ModalIcons/Dictation';
import { IconSearch } from 'src/components/icons/ModalIcons/Search';
import { FilterContext } from 'src/context/filterContext';
import { TypeModalContext } from 'src/context/typeModalContext';
import { GET_ALL_EPISODES } from 'src/db/query/requests';
import { ISchemaEpisodes } from 'src/db/query/schema';
import { colors } from 'src/theme/config';
import { IFilterContext, ITypeModalContext } from 'src/type/types';
import { EpisodesContainer } from 'src/components/Episodes/EpisodesContainer';

export const EpisodesModalInput = () => {
    const {
        episodesActiveEpisode,
        episodesActiveName,
        setEpisodesActiveEpisode,
        setEpisodesActiveName,
    } = useContext<IFilterContext>(FilterContext);
    const { activeTypeModal } = useContext<ITypeModalContext>(TypeModalContext);
    const [isRecord, setIsRecord] = useState<boolean>(false);

    const { data, loading, error, fetchMore, client } = useQuery<ISchemaEpisodes>(
        GET_ALL_EPISODES,
        {
            variables: {
                name: activeTypeModal == 'Name' ? episodesActiveName : '',
                episode: activeTypeModal == 'Episode' ? episodesActiveEpisode : '',
            },
        },
    );

    useEffect(() => {
        Voice.onSpeechResults = onSpeechResultsHandler;
        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    const onSpeechResultsHandler = (e: any) => {
        if (activeTypeModal == 'Name') {
            setEpisodesActiveName?.(e.value[0]);
        } else {
            setEpisodesActiveEpisode?.(e.value[0]);
        }
    };

    const startRecording = async () => {
        await Voice.start('en-Us');
        setIsRecord(true);
    };

    const stopRecording = async () => {
        await Voice.stop();
        setIsRecord(false);
    };

    const FetchData = () => {
        if (data?.episodes.info.next == null) {
            client.stop();
            return null;
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
        <EpisodesModalNameBlock>
            <EpisodesModalNameInput>
                <Wrapper>
                    <View style={{ position: 'relative' }}>
                        <Input
                            onChangeText={
                                activeTypeModal == 'Name'
                                    ? setEpisodesActiveName
                                    : setEpisodesActiveEpisode
                            }
                            value={
                                activeTypeModal == 'Name'
                                    ? episodesActiveName
                                    : episodesActiveEpisode
                            }
                            placeholder={'Search'}
                            style={{ position: 'relative' }}></Input>
                        <View style={{ position: 'absolute', left: 15, top: 13 }}>
                            <IconSearch />
                        </View>
                        {!isRecord ? (
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 6,
                                    padding: 5,
                                    borderRadius: 50,
                                }}
                                onPress={startRecording}>
                                <IconDictation height="20" width="20" color="#AEAEB2" />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 6,
                                    backgroundColor: 'red',
                                    padding: 5,
                                    borderRadius: 50,
                                }}
                                onPress={stopRecording}>
                                <IconDictation height="20" width="20" color="#FFFFFF" />
                            </TouchableOpacity>
                        )}
                    </View>
                </Wrapper>
            </EpisodesModalNameInput>
            <LocationsModalNameContent>
                <Wrapper>
                    {loading || error ? (
                        <ActivityIndicator
                            style={{ height: '100%' }}
                            color={colors.violet}
                            size="large"
                        />
                    ) : (
                        <FlatList
                            data={data?.episodes.results}
                            renderItem={(el) => <EpisodesContainer {...el.item} />}
                            keyExtractor={(el) => String(el.id)}
                            numColumns={1}
                            onEndReachedThreshold={0}
                            onEndReached={() => FetchData()}
                        />
                    )}
                </Wrapper>
            </LocationsModalNameContent>
        </EpisodesModalNameBlock>
    );
};

const EpisodesModalNameBlock = styled.View``;

const Input = styled.TextInput`
    height: 40px;
    width: 100%;
    background: ${colors.silver.dark};
    padding-horizontal: 40px;
    border-radius: 10px;
`;

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;

const LocationsModalNameContent = styled.View``;

const EpisodesModalNameInput = styled.View`
    padding-bottom: 15px;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.silver.white};
`;
