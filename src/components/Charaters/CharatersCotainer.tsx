import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActiveDataContext } from 'src/context/activeData';
import { config, colors, fonts } from 'src/theme/config';
import { IAllUser, IActiveDataContext } from 'src/type/types';
import { Screens } from 'src/components/Navigation/NavigationRoutes';

export const CharatersContainer: React.FC<IAllUser> = React.memo(({ id, name, image, status }) => {
    const navigation = useNavigation();
    const { setCharatersCardActiveName } = useContext<IActiveDataContext>(ActiveDataContext);

    const openCharaterCard = () => {
        navigation.navigate(Screens.CHARATER_PROFILE_SCREEN, {
            characterId: id,
        });
        setCharatersCardActiveName?.(name);
    };

    return (
        <CharatersContainerBlock onPress={() => openCharaterCard()}>
            <CharatersContainerImage>
                <Image
                    style={{
                        height: 150,
                        width: '100%',
                        borderTopLeftRadius: config.borderRadius,
                        borderTopRightRadius: config.borderRadius,
                    }}
                    source={{ uri: image }}
                />
            </CharatersContainerImage>
            <CharatersContainerContent>
                <CharatersContainerDiscription>{status}</CharatersContainerDiscription>
                <CharatersContainerTitle>{name}</CharatersContainerTitle>
            </CharatersContainerContent>
        </CharatersContainerBlock>
    );
});

const CharatersContainerBlock = styled.TouchableOpacity`
    visible: overflow;
    width: 46%;
    margin: 12px;
    margin-left: 7px;
    margin-right: 6px;
    border: 1px solid ${colors.silver.white};
    border-radius: ${config.borderRadius}px;
`;

const CharatersContainerImage = styled.View``;

const CharatersContainerContent = styled.View`
    height: 80px;
    padding: 12px;
`;

const CharatersContainerTitle = styled.Text`
    font-family: ${fonts.roboto.bold};
    color: ${colors.blue.dark};
    font-size: ${config.textSizeContainerTitle};
    font-weight: bold;
`;

const CharatersContainerDiscription = styled.Text`
    font-family: ${fonts.roboto.default};
    color: ${colors.blue.dim};
    font-size: ${config.textSizeContainerDiscription};
`;
