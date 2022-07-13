import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { IActiveDataContext, IAllEpisode } from '../../type/types';
import { colors, config } from '../../theme/config';
import { useNavigation } from '@react-navigation/native';
import { EpisodesArrow } from '../../assets/images/EpisodesIcons/arrow';
import { Screens } from '../Navigation/NavigationRoutes';
import { ActiveDataContext } from '../../context/activeData';

export const EpisodesContainer: React.FC<IAllEpisode> = React.memo(({id, name, air_date, episode}) => {
    const navigation = useNavigation();
    const { setEpisodesCardActiveName } = useContext<IActiveDataContext>(ActiveDataContext);

    const openEpisodeCard = () => {
        navigation.navigate(Screens.EPISODES_CARD_SCREEN, {
            episodeId: id
        })
        setEpisodesCardActiveName?.(name);
    };

    return(     
        <EpisodesContainerBlock onPress={() => openEpisodeCard()}>
            <EpisodesContainerContent>
                <View>
                    <EpisodesContainerCount>{episode}</EpisodesContainerCount>
                    <EpisodesContainerName>{name}</EpisodesContainerName>               
                    <EpisodesContainerDate>{air_date}</EpisodesContainerDate> 
                </View>
                <View>
                    <EpisodesArrow/>
                </View>   
            </EpisodesContainerContent>
        </EpisodesContainerBlock>       
    );
});

const EpisodesContainerBlock = styled.TouchableOpacity`
    border-bottom-color: ${colors.silver.white};
    border-bottom-width: 1px;
`;

const EpisodesContainerContent = styled.View`
    padding-vertical: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const EpisodesContainerCount = styled.Text`
    color: ${colors.blue.dark};
    font-size: ${config.textSizeContainerTitle};
    font-weight: bold;
`;

const EpisodesContainerName = styled.Text`
    color: ${colors.blue.dim};
    font-size: ${config.textSizeContainerDiscription};
    margin-top: 3px;
    font-weight: 500;
`;

const EpisodesContainerDate = styled.Text`
    color: ${colors.silver.bright};
    font-weight: bold;
    margin-top: 3px;
`;



