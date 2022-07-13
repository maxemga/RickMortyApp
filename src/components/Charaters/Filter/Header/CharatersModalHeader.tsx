import React, { useContext } from 'react';
import { Platform, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { SwipeLine } from '../../../Elements/SwipeLine';
import { colors } from '../../../../theme/config';
import { IFilterContext } from '../../../../type/types';
import { FilterContext } from '../../../../context/filterContext';
import { useNavigation } from '@react-navigation/native';

export const CharatersModalHeader = () => {
    const navigation = useNavigation();
    const {
        charatersActiveGender,
        charatersActiveName,
        charatersActiveSpecies,
        charatersActiveStatus,
        clearFilter,
    } = useContext<IFilterContext>(FilterContext);

    return (
        <CharatersHeader>
            <Wrapper>
                <SwipeLine />
                <View style={{ position: 'relative' }}>
                    {charatersActiveGender ||
                    charatersActiveName ||
                    charatersActiveSpecies ||
                    charatersActiveStatus !== '' ? (
                        <CharatersHeaderClear onPress={() => clearFilter?.('Charaters')}>
                            <Text style={{ color: colors.violet, fontSize: 16 }}>Clear</Text>
                        </CharatersHeaderClear>
                    ) : null}
                    <CharatersHeaderTitle>
                        <CharatersHeaderTitle>Filter</CharatersHeaderTitle>
                    </CharatersHeaderTitle>
                    {Platform.OS == 'android' && (
                        <CharatersHeaderClose onPress={() => navigation.goBack()}>
                            <Text style={{ color: colors.violet, fontSize: 16 }}>Close</Text>
                        </CharatersHeaderClose>
                    )}
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
    padding-bottom: 20px;
`;

const CharatersHeaderTitle = styled.Text`
    color: ${colors.blue.dark};
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
    padding-top: 5px;
    padding-bottom: 15px;
`;

const CharatersHeaderClear = styled.TouchableOpacity`
    position: absolute;
    top: 6px;
    left: 0px;
`;

const CharatersHeaderClose = styled.TouchableOpacity`
    position: absolute;
    top: 6px;
    right: 0px;
`;
