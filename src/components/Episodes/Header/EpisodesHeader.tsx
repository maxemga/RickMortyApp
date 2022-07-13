import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { FilterContext } from '../../../context/filterContext';
import { colors } from '../../../theme/config';
import { IFilterContext } from '../../../type/types';
import { Screens } from '../../Navigation/NavigationRoutes';

export const EpisodesHeader: React.FC = () => {
    const navigation = useNavigation();
    const { episodesActiveEpisode, episodesActiveName} = useContext<IFilterContext>(FilterContext);

    return(
        <HeaderBlock>
            <Wrapper>
                <HeaderButton onPress={() => navigation.navigate(Screens.EPISODES_MODAL)}>
                    { episodesActiveEpisode || episodesActiveName ? <ButtonIcon/> : null}
                    <ButtonText>Filter</ButtonText>
                </HeaderButton>
                <HeaderTitle>
                    <HeaderTitleText>Episodes</HeaderTitleText>
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
`;

const ButtonIcon = styled.View`
    background-color: ${colors.violet};
    height: 15px;
    width: 15px;
    border-radius: 50;
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
    color: ${colors.blue.dark}
`;

