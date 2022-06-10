import React from 'react'
import { IAllLocation } from '../../type/types';
import styled from 'styled-components'
import { colors, config } from '../../theme/config';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../Navigation/NavigationRoutes';


const LocationsContainer: React.FC<IAllLocation> = ({id, name, type}) => {
    const navigation = useNavigation();

    const OpenLocationCard = () => {
        navigation.navigate(Screens.LOCATIONS_CARD_SCREEN, {
            locationId: id
        });
    }

    return(     
        <LocationsContainerBlock onPress={() => OpenLocationCard()}>
            <LocationsContainerContent>
                <LocationsContainerDiscription>{type}</LocationsContainerDiscription>
                <LocationsContainerTitle>{name}</LocationsContainerTitle>
            </LocationsContainerContent>
        </LocationsContainerBlock>    
        
    )
}




const LocationsContainerBlock = styled.TouchableOpacity`
    visible: overflow;
    width: 47%;
    margin: 12px;
    margin-left: 2px;
    margin-right: 15px;
    border: 1px solid ${colors.borderColor};
    border-radius: ${config.borderRadius}
`


const LocationsContainerContent = styled.View`
    height: 80px;
    padding: 12px;
`

const LocationsContainerTitle = styled.Text`
    color: ${colors.textTitle};
    font-size: ${config.textSizeContainerTitle};
    font-weight: bold;
`

const LocationsContainerDiscription = styled.Text`
    color: ${colors.textDiscription};
    font-size: ${config.textSizeContainerDiscription}
`

export default LocationsContainer;