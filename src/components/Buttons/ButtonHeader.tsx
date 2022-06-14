import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from "react-native"

import styled from 'styled-components'
import { colors } from '../../theme/config'
import { Screens } from '../Navigation/NavigationRoutes'

interface IButtonHeader {
    title: string
}

export const ButtonHeader: React.FC<IButtonHeader> = (props) => {
    const navigation = useNavigation();
    
    return(
        <TouchableOpacity onPress={() => navigation.navigate(Screens.CHARATER_MODAL)}>
            <ButtonText>{props.title}</ButtonText>
        </TouchableOpacity>
    )
}

const ButtonText = styled.Text`
    color: ${colors.violet};
    font-size: 17px;
    font-weight: bold;
`

