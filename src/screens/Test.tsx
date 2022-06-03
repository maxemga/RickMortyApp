import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Touchable, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import CharatersComponent from '../components/Charaters/CharatersComponent';
import CharatersHeader from '../components/Header/Header';



const Test: React.FC = () => {
    const navigation = useNavigation();
    return(
        <>
            <TouchableOpacity>
                <Text>fsafsaf</Text>
            </TouchableOpacity>
        </>
    )
}

export default Test;