import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import {SwipeLine} from '../../../Elements/SwipeLine';
import { colors } from '../../../../theme/config';
import { IFilterContext } from '../../../../type/types';
import { FilterContext } from '../../../../context/filterContext';

export const LocationsModalHeader = () => {
    const { clearFilter, locationsActiveDimension, locationsActiveName, locationsActiveType} = useContext<IFilterContext>(FilterContext);

    return(
        <LocationsHeader>
            <Wrapper>
                <SwipeLine/>
                <View style={{position: 'relative'}}>
                    {locationsActiveDimension || locationsActiveName || locationsActiveType != '' ? 
                    <LocationsHeaderClear onPress={() => clearFilter?.('Locations')}>
                        <Text style={{color: colors.violet, fontSize: 16}}>Clear</Text>
                    </LocationsHeaderClear> : null}
                    <LocationsHeaderTitle>
                        <LocationsHeaderTitle>Filter</LocationsHeaderTitle>
                    </LocationsHeaderTitle>
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

const LocationsHeaderButton = styled.TouchableOpacity`
    background-color: ${colors.violet};
    padding: 5px 10px;
    border-radius: 20px;
    position: absolute;
    right: 0;
`;
