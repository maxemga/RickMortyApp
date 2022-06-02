import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { Text } from 'react-native-paper';
import CharatersHeader from '../components/Charaters/CharatersHeader';



const Test2: React.FC = () => {
    const navigate = useNavigation();
    return(
        <>
            <CharatersHeader/>
            <TouchableOpacity>
                <Text>ffsfaf</Text>
            </TouchableOpacity>
                
        </>
    )
}

export default Test2