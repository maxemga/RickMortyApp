import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { FilterContext } from '../../../context/filterContext';
import { colors } from '../../../theme/config';
import { IFilterContext } from '../../../type/types';
import { Screens } from '../../Navigation/NavigationRoutes';

export const LocationsHeader: React.FC = () => {
    const navigation = useNavigation();
    const { locationsActiveDimension, locationsActiveName, locationsActiveType } =
        useContext<IFilterContext>(FilterContext);

    return (
        <HeaderBlock>
            <Wrapper>
                <HeaderButton onPress={() => navigation.navigate(Screens.LOCATIONS_MODAL)}>
                    {locationsActiveType || locationsActiveName || locationsActiveDimension ? (
                        <ButtonIcon />
                    ) : null}
                    <ButtonText>Filter</ButtonText>
                </HeaderButton>
                <HeaderTitle>
                    <HeaderTitleText>Locations</HeaderTitleText>
                </HeaderTitle>
            </Wrapper>
        </HeaderBlock>
    );
};

const HeaderBlock = styled.SafeAreaView`
    background-color: ${colors.white.dim};
    opacity: 0.92;
`;

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;

const ButtonText = styled.Text`
    color: ${colors.violet};
    font-size: 17px;
    font-weight: bold;
    margin-left: 5px;
    ${Platform.OS == 'android' ? 'margin-top: 15px' : null}
`;

const ButtonIcon = styled.View`
    background-color: ${colors.violet};
    height: 15px;
    width: 15px;
    border-radius: 50px;
`;

const HeaderButton = styled.TouchableOpacity`
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
    color: ${colors.blue.dark};
`;
