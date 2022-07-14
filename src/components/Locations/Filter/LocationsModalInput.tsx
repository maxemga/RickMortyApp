import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { View, TouchableOpacity, FlatList, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useQuery } from '@apollo/client';
import Voice from '@react-native-community/voice';
import { IconDictation } from 'src/components/icons/ModalIcons/Dictation';
import { IconSearch } from 'src/components/icons/ModalIcons/Search';
import { FilterContext } from 'src/context/filterContext';
import { TypeModalContext } from 'src/context/typeModalContext';
import { GET_ALL_LOCATIONS } from 'src/db/query/requests';
import { ISchemaLocations } from 'src/db/query/schema';
import { colors } from 'src/theme/config';
import { IFilterContext, ITypeModalContext } from 'src/type/types';
import { LocationsContainer } from 'src/components/Locations/LocationsContainer';

export const LocationsModalInput = () => {
    const {
        locationsActiveDimension,
        locationsActiveName,
        locationsActiveType,
        setLocationsActiveDimension,
        setLocationsActiveName,
        setLocationsActiveType,
    } = useContext<IFilterContext>(FilterContext);
    const { activeTypeModal } = useContext<ITypeModalContext>(TypeModalContext);
    const [isRecord, setIsRecord] = useState<boolean>(false);

    const { data, loading, error, fetchMore, client } = useQuery<ISchemaLocations>(
        GET_ALL_LOCATIONS,
        {
            variables: {
                name: activeTypeModal == 'Name' ? locationsActiveName : '',
                dimension: activeTypeModal == 'Dimension' ? locationsActiveDimension : '',
                type: activeTypeModal == 'Type' ? locationsActiveType : '',
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
            setLocationsActiveName?.(e.value[0]);
            console.log(e);
        } else if (activeTypeModal == 'Type') {
            setLocationsActiveType?.(e.value[0]);
        } else {
            setLocationsActiveDimension?.(e.value[0]);
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
        if (data?.locations.info.next == null) {
            client.stop();
            return null;
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
        <LocationsModalNameBlock>
            <LocationsModalNameInput>
                <Wrapper>
                    <View style={{ position: 'relative' }}>
                        <Input
                            onChangeText={
                                activeTypeModal == 'Name'
                                    ? setLocationsActiveName
                                    : activeTypeModal == 'Type'
                                    ? setLocationsActiveType
                                    : setLocationsActiveDimension
                            }
                            value={
                                activeTypeModal == 'Name'
                                    ? locationsActiveName
                                    : activeTypeModal == 'Type'
                                    ? locationsActiveType
                                    : locationsActiveDimension
                            }
                            placeholder={'Search'}
                            style={{ position: 'relative' }}
                        />
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
            </LocationsModalNameInput>
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
                            data={data?.locations.results}
                            renderItem={(el) => <LocationsContainer {...el.item} />}
                            keyExtractor={(el) => String(el.id)}
                            numColumns={2}
                            onEndReachedThreshold={0}
                            onEndReached={() => FetchData()}
                        />
                    )}
                </Wrapper>
            </LocationsModalNameContent>
        </LocationsModalNameBlock>
    );
};

const LocationsModalNameBlock = styled.View``;

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

const LocationsModalNameInput = styled.View`
    padding-bottom: 15px;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.silver.white};
`;
