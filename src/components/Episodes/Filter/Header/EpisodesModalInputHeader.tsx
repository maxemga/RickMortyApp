import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import {SwipeLine} from '../../../Elements/SwipeLine';
import { colors } from '../../../../theme/config';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../../Navigation/NavigationRoutes';
import {ArrowBack} from '../../../../assets/images/ModalIcons/Arrow';
import { IFilterContext, ITypeModalContext } from '../../../../type/types';
import { FilterContext } from '../../../../context/filterContext';
import { TypeModalContext } from '../../../../context/typeModalContext';

export const EpisodesModalInputHeader = () => {
    const navigation = useNavigation();
    const { episodesActiveEpisode, episodesActiveName, setEpisodesActiveEpisode, setEpisodesActiveName } = useContext<IFilterContext>(FilterContext);
    const { activeTypeModal } = useContext<ITypeModalContext>(TypeModalContext);

    return(
        <EpisodesLocations>
            <Wrapper>
                <SwipeLine/>
                <View style={{position: 'relative'}}>
                    <EpisodesHeaderTitle>
                        {activeTypeModal}
                    </EpisodesHeaderTitle>
                    <EpisodesHeaderButton onPress={() => navigation.navigate(Screens.EPISODES_MODAL)}>
                        <ArrowBack/>
                        <Text style={{color: colors.violet, fontSize: 16, marginLeft: 7}}>Back</Text>
                    </EpisodesHeaderButton>
                    {activeTypeModal == 'Name' ? 
                        episodesActiveName != '' ? <EpisodesHeaderClear onPress={() => setEpisodesActiveName?.('')}>
                            <Text style={{color: colors.violet, fontSize: 16}}>Clear</Text>
                        </EpisodesHeaderClear> : null : 
                    activeTypeModal == 'Episode' ? 
                        episodesActiveEpisode != '' ? <EpisodesHeaderClear onPress={() =>  setEpisodesActiveEpisode?.('')}>
                            <Text style={{color: colors.violet, fontSize: 16}}>Clear</Text>
                        </EpisodesHeaderClear> : null : null         
                    }
                </View>
            </Wrapper>
        </EpisodesLocations>
    );
};

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;

const EpisodesLocations = styled.View`
    background-color: ${colors.white.default}; 
    padding-bottom: 10px;
`;

const EpisodesHeaderClear = styled.TouchableOpacity`
    position: absolute;
    top: 6px;
    right: 0px;
`;

const EpisodesHeaderTitle = styled.Text`
    color: ${colors.blue.dark};
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
    padding-top: 5px;
    padding-bottom: 15px;
`;

const EpisodesHeaderButton = styled.TouchableOpacity`
    padding: 5px 10px;
    border-radius: 20px;
    position: absolute;
    left: -15px;
    flex-direction: row;
`;
