import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Screens } from '../../Navigation/NavigationRoutes';

const CharatersModal = () => {
    const navigation = useNavigation();

    return(
        <TouchableOpacity onPress={() => navigation.navigate(Screens.CHARATER_MODAL_NAME)}>
                <Text>fsf</Text>
        </TouchableOpacity>
        
    )
}

export default CharatersModal;