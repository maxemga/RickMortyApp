import React, { useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IUser } from '../../type/types';
import styled from 'styled-components'
import { colors, config } from '../../theme/config';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../Navigation/NavigationRoutes';
import { GET_SINGLE_USER } from '../../db/query/requests';
import { useQuery } from '@apollo/client';


const CharatersContainer: React.FC<IUser> = ({id, name, image, status}) => {
    const navigation = useNavigation();
    const { data, loading, error } = useQuery(GET_SINGLE_USER, {
        variables: {
            id: id
        }
    });

    const OpenCharaterCard = () => {
        navigation.navigate(Screens.CHARATER_PROFILE_SCREEN, {
            characterId: id
        })
    }

    return(     
        <CharatersContainerBlock onPress={() => OpenCharaterCard()}>
            <CharatersContainerImage>
                <Image style={{height: 150, width: '100%', borderTopLeftRadius: config.borderRadius, borderTopRightRadius: config.borderRadius}} source={{uri: image}}/>
            </CharatersContainerImage>
            <CharatersContainerContent>
                <CharatersContainerDiscription>{status}</CharatersContainerDiscription>
                <CharatersContainerTitle>{name}</CharatersContainerTitle>
            </CharatersContainerContent>
        </CharatersContainerBlock>    
        
    )
}




const CharatersContainerBlock = styled.TouchableOpacity`
    visible: overflow;
    width: 47%;
    margin: 12px;
    margin-left: 2px;
    margin-right: 15px;
    border: 1px solid ${colors.borderColor};
    border-radius: ${config.borderRadius}px;
`

// ${config.borderColor}

const CharatersContainerImage = styled.View`
`

const CharatersContainerContent = styled.View`
    height: 80px;
    padding: 12px;
`

const CharatersContainerTitle = styled.Text`
    color: ${colors.textTitle};
    font-size: ${config.textSizeContainerTitle};
    font-weight: bold;
`

const CharatersContainerDiscription = styled.Text`
    color: ${colors.textDiscription};
    font-size: ${config.textSizeContainerDiscription}
`

export default CharatersContainer;