import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'
import SwipeLine from '../../../Elements/SwipeLine'
import { colors, config } from '../../../../theme/config'
import { IFilterContext } from '../../../../type/types'
import { FilterContext } from '../../../../context/filterContext'

const LocationsModalHeader = () => {

    const { setLocationsActiveDimension, setLocationsActiveName, setLocationsActiveType,
    locationsActiveDimension, locationsActiveName, locationsActiveType} = useContext<IFilterContext>(FilterContext);

    const clearFilter = () => {
        setLocationsActiveDimension('');
        setLocationsActiveName('');
        setLocationsActiveType('');
    }

    return(
        <LocationsHeader>
            <Wrapper>
                <SwipeLine/>
                <View style={{position: 'relative'}}>

                    {locationsActiveDimension || locationsActiveName || locationsActiveType != '' ? 
                    <LocationsHeaderClear onPress={() => clearFilter()}>
                        <Text style={{color: colors.violet, fontSize: 16}}>Clear</Text>
                    </LocationsHeaderClear> : null}
                    <LocationsHeaderTitle>
                        <LocationsHeaderTitle>Filter</LocationsHeaderTitle>
                        
                    </LocationsHeaderTitle>
                    {/* <LocationsHeaderButton>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>APPLY</Text>
                    </LocationsHeaderButton> */}

                </View>
            </Wrapper>
        </LocationsHeader>
    )
}

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`

const LocationsHeader = styled.View`
    background-color: white; 
    padding-bottom: 20px;
`

const LocationsHeaderTitle = styled.Text`
    color: ${colors.textTitle};
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
    padding-top: 5px;
    padding-bottom: 15px;

`

const LocationsHeaderClear = styled.TouchableOpacity`
    position: absolute;
    top: 6px;
    left: 0px;
`

const LocationsHeaderButton = styled.TouchableOpacity`
    background-color: ${colors.violet};
    padding: 5px 10px;
    border-radius: 20px;
    position: absolute;
    right: 0;
`



export default LocationsModalHeader;