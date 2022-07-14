import React, { useContext } from 'react';
import { Platform, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { SwipeLine } from 'src/components/Elements/SwipeLine';
import { FilterContext } from 'src/context/filterContext';
import { colors } from 'src/theme/config';
import { IFilterContext } from 'src/type/types';

export const LocationsModalHeader = () => {
    const navigation = useNavigation();
    const { clearFilter, locationsActiveDimension, locationsActiveName, locationsActiveType } =
        useContext<IFilterContext>(FilterContext);

    return (
        <LocationsHeader>
            <Wrapper>
                <SwipeLine />
                <View style={{ position: 'relative' }}>
                    {locationsActiveDimension ||
                    locationsActiveName ||
                    locationsActiveType != '' ? (
                        <LocationsHeaderClear onPress={() => clearFilter?.('Locations')}>
                            <Text style={{ color: colors.violet, fontSize: 16 }}>Clear</Text>
                        </LocationsHeaderClear>
                    ) : null}
                    <LocationsHeaderTitle>
                        <LocationsHeaderTitle>Filter</LocationsHeaderTitle>
                    </LocationsHeaderTitle>
                    {Platform.OS == 'android' && (
                        <CharatersHeaderClose onPress={() => navigation.goBack()}>
                            <Text style={{ color: colors.violet, fontSize: 16 }}>Close</Text>
                        </CharatersHeaderClose>
                    )}
                </View>
            </Wrapper>
        </LocationsHeader>
    );
};

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;

const LocationsHeader = styled.View`
    background-color: ${colors.white.default};
    padding-bottom: 20px;
`;

const LocationsHeaderTitle = styled.Text`
    color: ${colors.blue.dark};
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
    padding-top: 5px;
    padding-bottom: 15px;
`;

const LocationsHeaderClear = styled.TouchableOpacity`
    position: absolute;
    top: 6px;
    left: 0px;
`;

const CharatersHeaderClose = styled.TouchableOpacity`
    position: absolute;
    top: 6px;
    right: 0px;
`;
