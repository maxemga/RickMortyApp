import React from 'react'
import { TouchableOpacity } from "react-native"

import styled from 'styled-components'
import { colors } from '../../theme/colors'

interface IButtonHeader {
    title: string
}

export const ButtonHeader: React.FC<IButtonHeader> = (props) => {
    return(
        <TouchableOpacity>
            <ButtonText>{props.title}</ButtonText>
        </TouchableOpacity>
    )
}

const ButtonText = styled.Text`
    color: ${colors.violet};
    font-size: 17px;
    font-weight: bold;
`

