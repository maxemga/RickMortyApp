import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActiveDataContext } from 'src/context/activeData';
import { config, colors, fonts } from 'src/theme/config';
import { IAllUser, IActiveDataContext, IThemeContext } from 'src/type/types';
import { Screens } from 'src/components/Navigation/NavigationRoutes';
import { ThemeContext } from 'src/context/themeContext';

export const CharatersContainer: React.FC<IAllUser> = React.memo(({ id, name, image, status }) => {
    const navigation = useNavigation();
    const { setCharatersCardActiveName } = useContext<IActiveDataContext>(ActiveDataContext);
    const { isDarkMode } = useContext<IThemeContext>(ThemeContext);

    const openCharaterCard = () => {
        navigation.navigate(Screens.CHARATER_PROFILE_SCREEN, {
            characterId: id,
        });
        setCharatersCardActiveName?.(name);
    };

    return (
        <CharatersContainerBlock
            onPress={() => openCharaterCard()}
            style={{
                backgroundColor: isDarkMode ? colors.black.light : colors.white.lunar,
                borderColor: isDarkMode ? colors.black.light : colors.silver.white,
            }}>
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
                <CharatersContainerTitle
                    style={{ color: isDarkMode ? colors.white.default : colors.blue.dark }}>
                    {name}
                </CharatersContainerTitle>
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
    font-size: ${config.textSizeContainerTitle};
    font-weight: bold;
`;

const CharatersContainerDiscription = styled.Text`
    font-family: ${fonts.roboto.default};
    color: ${colors.blue.dim};
    font-size: ${config.textSizeContainerDiscription};
`;
