import { Text, TouchableOpacity, TouchableOpacityBase } from "react-native"
import React from 'react';
import { useNavigation } from "@react-navigation/native";

const CharatersComponent: React.FC = () => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
<Text>fsaf</Text>
        </TouchableOpacity>
    )
}

export default CharatersComponent;