import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { SwipeLine } from '../../../Elements/SwipeLine';
import { colors } from '../../../../theme/config';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../../Navigation/NavigationRoutes';
import { IFilterContext, ITypeModalContext } from '../../../../type/types';
import { FilterContext } from '../../../../context/filterContext';
import { TypeModalContext } from '../../../../context/typeModalContext';
import { ArrowBack } from '../../../icons/ModalIcons/Arrow';

export const CharatersModalInputHeader = () => {
    const navigation = useNavigation();
    const {
        charatersActiveName,
        charatersActiveSpecies,
        setCharatersActiveName,
        setCharatersActiveSpecies,
    } = useContext<IFilterContext>(FilterContext);
    const { activeTypeModal } = useContext<ITypeModalContext>(TypeModalContext);

    return (
        <CharatersHeader>
            <Wrapper>
                <SwipeLine />
                <View style={{ position: 'relative' }}>
                    <CharatersHeaderTitle>
                        {activeTypeModal == 'Name' ? 'Name' : 'Species'}
                    </CharatersHeaderTitle>
                    <CharatersHeaderButton
                        onPress={() => navigation.navigate(Screens.CHARATER_MODAL)}>
                        <ArrowBack />
                        <Text style={{ color: colors.violet, fontSize: 16, marginLeft: 7 }}>
                            Back
                        </Text>
                    </CharatersHeaderButton>
                    {activeTypeModal == 'Name' ? (
                        charatersActiveName != '' ? (
                            <CharatersHeaderClear onPress={() => setCharatersActiveName?.('')}>
                                <Text style={{ color: colors.violet, fontSize: 16 }}>Clear</Text>
                            </CharatersHeaderClear>
                        ) : null
                    ) : charatersActiveSpecies != '' ? (
                        <CharatersHeaderClear onPress={() => setCharatersActiveSpecies?.('')}>
                            <Text style={{ color: colors.violet, fontSize: 16 }}>Clear</Text>
                        </CharatersHeaderClear>
                    ) : null}
                </View>
            </Wrapper>
        </CharatersHeader>
    );
};

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;

const CharatersHeader = styled.View`
    background-color: white;
    padding-bottom: 10px;
`;

const CharatersHeaderClear = styled.TouchableOpacity`
    position: absolute;
    top: 6px;
    right: 0px;
`;

const CharatersHeaderTitle = styled.Text`
    background-color: white;
    color: ${colors.blue.dark};
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
    padding-top: 5px;
    padding-bottom: 15px;
`;

const CharatersHeaderButton = styled.TouchableOpacity`
    padding: 5px 10px;
    border-radius: 20px;
    position: absolute;
    left: -15px;
    display: flex;
    flex-direction: row;
`;
