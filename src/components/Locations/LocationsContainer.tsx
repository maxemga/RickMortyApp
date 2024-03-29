import React, { useContext } from 'react';
import { IActiveDataContext, IAllLocation, IThemeContext } from '../../type/types';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { ActiveDataContext } from 'src/context/activeData';
import { colors, config, fonts } from 'src/theme/config';
import { Screens } from 'src/components/Navigation/NavigationRoutes';
import { ThemeContext } from 'src/context/themeContext';

export const LocationsContainer: React.FC<IAllLocation> = React.memo(({ id, name, type }) => {
    const navigation = useNavigation();
    const { setLocationsCardActiveName } = useContext<IActiveDataContext>(ActiveDataContext);
    const { isDarkMode } = useContext<IThemeContext>(ThemeContext);

    const openLocationCard = () => {
        navigation.navigate(Screens.LOCATIONS_CARD_SCREEN, {
            locationId: id,
            screen: Screens.LOCATIONS_CARD_SCREEN,
        });
        setLocationsCardActiveName?.(name);
    };

    return (
        <LocationsContainerBlock
            onPress={() => openLocationCard()}
            style={{
                backgroundColor: isDarkMode ? colors.black.light : colors.white.lunar,
                borderColor: isDarkMode ? colors.black.light : colors.silver.white,
            }}>
            <LocationsContainerContent>
                <LocationsContainerDiscription>{type}</LocationsContainerDiscription>
                <LocationsContainerTitle
                    numberOfLines={2}
                    style={{ color: isDarkMode ? colors.white.default : colors.blue.dark }}>
                    {name}
                </LocationsContainerTitle>
            </LocationsContainerContent>
        </LocationsContainerBlock>
    );
});

const LocationsContainerBlock = styled.TouchableOpacity`
    visible: overflow;
    width: 47%;
    margin: 12px;
    margin-left: 2px;
    margin-right: 15px;
    border: 1px solid ${colors.silver.white};
    border-radius: ${config.borderRadius}px;
`;

const LocationsContainerContent = styled.View`
    height: 80px;
    padding: 12px;
`;

const LocationsContainerTitle = styled.Text`
    font-family: ${fonts.roboto.default};
    color: ${colors.blue.dark};
    font-size: ${config.textSizeContainerTitle};
    font-weight: bold;
`;

const LocationsContainerDiscription = styled.Text`
    font-family: ${fonts.roboto.default};
    color: ${colors.blue.dim};
    font-size: ${config.textSizeContainerDiscription};
`;
