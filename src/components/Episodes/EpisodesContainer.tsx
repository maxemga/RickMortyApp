import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActiveDataContext } from 'src/context/activeData';
import { colors, config, fonts } from 'src/theme/config';
import { IAllEpisode, IActiveDataContext } from 'src/type/types';
import { EpisodesArrow } from 'src/components/icons/EpisodesIcons/arrow';
import { Screens } from 'src/components/Navigation/NavigationRoutes';

export const EpisodesContainer: React.FC<IAllEpisode> = React.memo(
    ({ id, name, air_date, episode, type }) => {
        const navigation = useNavigation();
        const { setEpisodesCardActiveName } = useContext<IActiveDataContext>(ActiveDataContext);

        const openEpisodeCard = () => {
            if (type == 'Charater') {
                navigation.navigate(Screens.EPISODE_SCREEN, {
                    screen: Screens.EPISODES_CARD_SCREEN,
                    initial: false,
                    params: {
                        episodeId: id,
                    },
                });
            } else {
                navigation.navigate(Screens.EPISODES_CARD_SCREEN, {
                    episodeId: id,
                });
            }

            setEpisodesCardActiveName?.(name);
        };

        return (
            <EpisodesContainerBlock onPress={() => openEpisodeCard()}>
                <EpisodesContainerContent>
                    <View>
                        <EpisodesContainerCount>{episode}</EpisodesContainerCount>
                        <EpisodesContainerName>{name}</EpisodesContainerName>
                        <EpisodesContainerDate>{air_date}</EpisodesContainerDate>
                    </View>
                    <View>
                        <EpisodesArrow />
                    </View>
                </EpisodesContainerContent>
            </EpisodesContainerBlock>
        );
    },
);

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
    font-family: ${fonts.roboto.default};
    color: ${colors.blue.dim};
    font-size: ${config.textSizeContainerDiscription};
    margin-top: 3px;
`;

const EpisodesContainerDate = styled.Text`
    font-family: ${fonts.roboto.default};
    color: ${colors.silver.bright};
    font-weight: bold;
    margin-top: 3px;
`;
