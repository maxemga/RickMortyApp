import React from 'react'
import styled from 'styled-components'
import { Image } from 'react-native';
import { IAllUser } from '../../type/types';
import { colors, config } from '../../theme/config';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../Navigation/NavigationRoutes';

export const CharatersContainer: React.FC<IAllUser> = React.memo(({id, name, image, status}) => {
    const navigation = useNavigation();

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
})




const CharatersContainerBlock = styled.TouchableOpacity`
    visible: overflow;
    width: 47%;
    margin: 12px;
    margin-left: 2px;
    margin-right: 15px;
    border: 1px solid ${colors.borderColor};
    border-radius: ${config.borderRadius}px;
`


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

