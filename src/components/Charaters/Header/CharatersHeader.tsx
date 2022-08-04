import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Platform, useColorScheme } from 'react-native';
import { Screens } from 'src/components/Navigation/NavigationRoutes';
import { FilterContext } from 'src/context/filterContext';
import { ThemeContext } from 'src/context/themeContext';
import { colors } from 'src/theme/config';
import { IFilterContext, IThemeContext } from 'src/type/types';
import styled from 'styled-components/native';

export const CharatersHeader: React.FC = () => {
    const navigation = useNavigation();

    const {
        charatersActiveGender,
        charatersActiveName,
        charatersActiveSpecies,
        charatersActiveStatus,
    } = useContext<IFilterContext>(FilterContext);
    const { isDarkMode } = useContext<IThemeContext>(ThemeContext);

    return (
        <HeaderBlock
            style={{ backgroundColor: isDarkMode ? colors.black.bright : colors.white.dim }}>
            <Wrapper>
                <HeaderButton onPress={() => navigation.navigate(Screens.CHARATER_MODAL)}>
                    {charatersActiveGender ||
                    charatersActiveName ||
                    charatersActiveSpecies ||
                    charatersActiveStatus ? (
                        <ButtonIcon />
                    ) : null}
                    <ButtonText>Filter</ButtonText>
                </HeaderButton>
                <HeaderTitle>
                    <HeaderTitleText
                        style={{
                            color: isDarkMode ? colors.white.default : colors.blue.dark,
                        }}>
                        Charaters
                    </HeaderTitleText>
                </HeaderTitle>
            </Wrapper>
        </HeaderBlock>
    );
};

const HeaderBlock = styled.SafeAreaView``;

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;

const ButtonText = styled.Text`
    color: ${colors.violet};
    font-size: 17px;
    font-weight: bold;
    margin-left: 5px;
`;

const ButtonIcon = styled.View`
    background-color: ${colors.violet};
    height: 15px;
    width: 15px;
    border-radius: 50px;
`;

const HeaderButton = styled.TouchableOpacity`
    ${Platform.OS == 'android' ? 'margin-top: 15px' : null}
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
`;

const HeaderTitle = styled.View`
    margin-top: 20px;
    margin-bottom: 10px;
`;

const HeaderTitleText = styled.Text`
    font-size: 34px;
    font-weight: bold;

    color: ${({ isDarkMode }: { isDarkMode: any }) =>
        isDarkMode ? colors.white.default : colors.blue.dark};
`;
