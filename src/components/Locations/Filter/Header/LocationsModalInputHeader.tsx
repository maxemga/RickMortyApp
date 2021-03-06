import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { SwipeLine } from 'src/components/Elements/SwipeLine';
import { ArrowBack } from 'src/components/icons/ModalIcons/Arrow';
import { Screens } from 'src/components/Navigation/NavigationRoutes';
import { FilterContext } from 'src/context/filterContext';
import { TypeModalContext } from 'src/context/typeModalContext';
import { colors } from 'src/theme/config';
import { IFilterContext, ITypeModalContext } from 'src/type/types';

export const LocationsModalInputHeader = () => {
    const navigation = useNavigation();
    const {
        setLocationsActiveDimension,
        setLocationsActiveName,
        setLocationsActiveType,
        locationsActiveDimension,
        locationsActiveName,
        locationsActiveType,
    } = useContext<IFilterContext>(FilterContext);
    const { activeTypeModal } = useContext<ITypeModalContext>(TypeModalContext);

    return (
        <CharatersLocations>
            <Wrapper>
                <SwipeLine />
                <View style={{ position: 'relative' }}>
                    <LocationsHeaderTitle>{activeTypeModal}</LocationsHeaderTitle>
                    <LocaionsHeaderButton
                        onPress={() => navigation.navigate(Screens.LOCATIONS_MODAL)}>
                        <ArrowBack />
                        <Text style={{ color: colors.violet, fontSize: 16, marginLeft: 7 }}>
                            Back
                        </Text>
                    </LocaionsHeaderButton>
                    {activeTypeModal == 'Name' ? (
                        locationsActiveName != '' ? (
                            <LocationsHeaderClear onPress={() => setLocationsActiveName?.('')}>
                                <Text style={{ color: colors.violet, fontSize: 16 }}>Clear</Text>
                            </LocationsHeaderClear>
                        ) : null
                    ) : activeTypeModal == 'Type' ? (
                        locationsActiveType != '' ? (
                            <LocationsHeaderClear onPress={() => setLocationsActiveType?.('')}>
                                <Text style={{ color: colors.violet, fontSize: 16 }}>Clear</Text>
                            </LocationsHeaderClear>
                        ) : null
                    ) : activeTypeModal == 'Dimension' ? (
                        locationsActiveDimension != '' ? (
                            <LocationsHeaderClear onPress={() => setLocationsActiveDimension?.('')}>
                                <Text style={{ color: colors.violet, fontSize: 16 }}>Clear</Text>
                            </LocationsHeaderClear>
                        ) : null
                    ) : null}
                </View>
            </Wrapper>
        </CharatersLocations>
    );
};

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;

const CharatersLocations = styled.View`
    background-color: ${colors.white.default};
    padding-bottom: 10px;
`;

const LocationsHeaderClear = styled.TouchableOpacity`
    position: absolute;
    top: 6px;
    right: 0px;
`;

const LocationsHeaderTitle = styled.Text`
    background-color: white;
    color: ${colors.blue.dark};
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
    padding-top: 5px;
    padding-bottom: 15px;
`;

const LocaionsHeaderButton = styled.TouchableOpacity`
    padding: 5px 10px;
    border-radius: 20px;
    position: absolute;
    left: -15px;
    flex-direction: row;
`;
