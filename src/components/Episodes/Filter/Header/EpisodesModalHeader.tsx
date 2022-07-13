import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import {SwipeLine} from '../../../Elements/SwipeLine';
import { colors, config } from '../../../../theme/config';
import { IFilterContext } from '../../../../type/types';
import { FilterContext } from '../../../../context/filterContext';

export const EpisodesModalHeader = () => {
    const { clearFilter, episodesActiveEpisode, episodesActiveName } = useContext<IFilterContext>(FilterContext);
 
    return(
        <EpisodesHeader>
            <Wrapper>
                <SwipeLine/>
                <View style={{position: 'relative'}}>
                    {episodesActiveEpisode || episodesActiveName != '' ?
                    <EpisodesHeaderClear onPress={() => clearFilter?.('Episodes')}>
                        <Text style={{color: colors.violet, fontSize: 16}}>Clear</Text>
                    </EpisodesHeaderClear> : null}
                    <EpisodesHeaderTitle>
                        <EpisodesHeaderTitle>Filter</EpisodesHeaderTitle>
                    </EpisodesHeaderTitle>
                </View>
            </Wrapper>
        </EpisodesHeader>
    );
};

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;

const EpisodesHeader = styled.View`
    background-color: ${colors.white.default}; 
    padding-bottom: 20px;
`;

const EpisodesHeaderTitle = styled.Text`
    color: ${colors.blue.dark};
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
    padding-top: 5px;
    padding-bottom: 15px;
`;

const EpisodesHeaderClear = styled.TouchableOpacity`
    position: absolute;
    top: 6px;
    left: 0px;
`;