import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IUsers } from '../../type/types';
import styled from 'styled-components'
import { config } from '../../theme/config';


const CharatersContainer: React.FC<IUsers> = ({id, name, image, status}) => {
    return(     
        <CharatersContainerBlock>
            <CharatersContainerImage>
                <Image style={{height: 150, width: '100%', borderTopLeftRadius: config.borderRadius, borderTopRightRadius: config.borderRadius}} source={{uri: image}}/>
            </CharatersContainerImage>
            <CharatersContainerContent>
                <Text>{name}</Text>
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
    border: 1px solid ${config.borderColor}
`

const CharatersContainerImage = styled.View`
`

const CharatersContainerContent = styled.View`
`

export default CharatersContainer;