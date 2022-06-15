import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Checkbox } from 'react-native-paper'
import styled from 'styled-components'
import { EpisodesArrow } from '../../../assets/images/EpisodesIcons/arrow'
import { colors } from '../../../theme/config'

const CharatersModal = () => {
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false)
    return(
        // <TouchableOpacity onPress={() => navigation.navigate(Screens.CHARATER_MODAL_NAME)}>
        //         <Text>Модалка</Text>         
        // </TouchableOpacity> 
        <>
   
            
        </>
    )
}


const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`



export default CharatersModal;