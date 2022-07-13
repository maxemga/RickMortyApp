import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { colors } from '../../../theme/config';
import { CharatersContainer } from '../CharatersCotainer';
import { ActivityIndicator } from 'react-native-paper';
import { useQuery } from '@apollo/client';
import { ISchemaUsers } from '../../../db/query/schema';
import { GET_ALL_USERS } from '../../../db/query/requests';
import { FilterContext } from '../../../context/filterContext';
import { IFilterContext, ITypeModalContext } from '../../../type/types';
import { TypeModalContext } from '../../../context/typeModalContext';
import { IconDictation } from '../../../assets/images/ModalIcons/Dictation';
import { IconSearch } from '../../../assets/images/ModalIcons/Search';
import Voice from '@react-native-community/voice';

export const CharatersModalInput = () => {
    const { charatersActiveName, charatersActiveSpecies, setCharatersActiveName, setCharatersActiveSpecies } = useContext<IFilterContext>(FilterContext);
    const { activeTypeModal } = useContext<ITypeModalContext>(TypeModalContext);
    const [isRecord, setIsRecord] = useState<boolean>(false);
    
    const { data, loading, error, fetchMore, client } = useQuery<ISchemaUsers>(GET_ALL_USERS, {
        variables: {
            name: activeTypeModal == 'Name' ? charatersActiveName : '',
            species: activeTypeModal == 'Species' ? charatersActiveSpecies : '',
        }
    });

    useEffect(() => {
        Voice.onSpeechResults = onSpeechResultsHandler;
        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        }
    }, []);

    const onSpeechResultsHandler = (e: any) => {
        if (activeTypeModal == 'Name') {
            setCharatersActiveName?.(e.value[0]);
        }
        else {
            setCharatersActiveSpecies?.(e.value[0]);
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
        if(data?.characters.info.next == null) {
            client.stop();
            return null;
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
            });
        }
    };

    return(
        <>
            <CharatersModalNameBlock>
                <CharatersModalNameInput> 
                    <Wrapper>
                        <View style={{position: 'relative'}}>
                            <Input           
                                onChangeText={activeTypeModal == 'Name' ? setCharatersActiveName : setCharatersActiveSpecies }
                                value={activeTypeModal == 'Name' ? charatersActiveName : charatersActiveSpecies}
                                placeholder={'Search'}
                                style={{position: 'relative'}}> 
                            </Input>
                            <View style={{position: 'absolute', left: 15, top: 13}}>
                                <IconSearch/>
                            </View>
                            {!isRecord ? 
                            <TouchableOpacity style={{position: 'absolute', right: 8, top: 6, padding: 5, borderRadius: 50}} onPress={startRecording}>                
                                <IconDictation height='20' width='20' color='#AEAEB2'/>          
                            </TouchableOpacity>   
                            :     
                            <TouchableOpacity style={{position: 'absolute', right: 8, top: 6, backgroundColor: 'red', padding: 5, borderRadius: 50}} onPress={stopRecording}>                            
                                <IconDictation height='20' width='20' color='#FFFFFF'/>                                        
                            </TouchableOpacity>}       
                        </View>
                    </Wrapper>
                </CharatersModalNameInput>
                <CharatersModalNameContent>
                    <Wrapper>
                    {loading || error ? <ActivityIndicator style={{height: '100%'}} color={colors.violet} size='large'/> :
                    <FlatList                   
                        data={data?.characters.results}
                        renderItem={(el) => <CharatersContainer {...el.item}/>}
                        keyExtractor={(el) => String(el.id)}  
                        numColumns={2}
                        onEndReachedThreshold={0}
                        onEndReached={() => FetchData()}
                    />}
                    </Wrapper>
                </CharatersModalNameContent>
            </CharatersModalNameBlock>
        </>
    )
}

const CharatersModalNameBlock = styled.View``;

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

const CharatersModalNameContent = styled.View``;

const CharatersModalNameInput = styled.View`
    padding-bottom: 15px;
    borderBottomWidth: 1px;
    borderBottomColor: ${colors.silver.white};
`;
