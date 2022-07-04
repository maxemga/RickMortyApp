import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Text, TextInput, View, Image, TouchableOpacityBase, TouchableOpacity, FlatList } from 'react-native';
import { colors } from '../../../theme/config';
import IconSearch from '../../../assets/images/ModalIcons/Search';
import IconDictation from '../../../assets/images/ModalIcons/Dictation';
import { CharatersContainer } from '../CharatersCotainer';
import { ActivityIndicator } from 'react-native-paper';
import { useQuery } from '@apollo/client';
import { ISchemaUsers } from '../../../db/query/schema';
import { GET_ALL_USERS } from '../../../db/query/requests';
import { FilterContext } from '../../../context/filterContext';
import { IFilterContext } from '../../../type/types';


const CharatersModalSpecies = () => {
    const { activeSpecies, setActiveSpecies } = useContext<IFilterContext>(FilterContext);

    const { data, loading, error, fetchMore, client } = useQuery<ISchemaUsers>(GET_ALL_USERS, {
        variables: {
            species: activeSpecies
        }
    });

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
            })
        }
    }

    return(
        <CharatersModalNameBlock>

            <CharatersModalNameInput>
                <Wrapper>
                    <View style={{position: 'relative'}}>
                        <Input           
                            inlineImageLeft={require('./../../../assets/images/ModalIcons/Search')}
                            onChangeText={setActiveSpecies}
                            value={activeSpecies}
                            placeholder={'Search'}
                            style={{position: 'relative'}}
                        > 
                        </Input>
                        <View style={{position: 'absolute', left: 15, top: 13}}>
                            <IconSearch/>
                        </View>
                        <TouchableOpacity style={{position: 'absolute', right: 15, top: 10}}>
                            <IconDictation/>
                        </TouchableOpacity>              
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
    )
}

const CharatersModalNameBlock = styled.View`

`

const Input = styled.TextInput`
    height: 40px;
    width: 100%;
    background: ${colors.backgroundInputColor};
    paddingHorizontal: 40px;
    border-radius: 10px;
`


const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`

const CharatersModalNameContent = styled.View`
    
`

const CharatersModalNameInput = styled.View`
    padding-bottom: 15px;
    borderBottomWidth: 1px;
    borderBottomColor: ${colors.borderColor};
`
export default CharatersModalSpecies;