import React from 'react'
import { View } from 'react-native';
import { IEpisode } from '../../type/types';
import styled from 'styled-components'
import { colors, config } from '../../theme/config';
import { useNavigation } from '@react-navigation/native';
import { EpisodesArrow } from '../../assets/images/EpisodesIcons/Arrow';


const EpisodesContainer: React.FC<IEpisode> = ({id, name, air_date, episode}) => {
    const navigation = useNavigation();
    
    return(     
        <EpisodesContainerBlock onPress={() => navigation.navigate('Details')}>
            <EpisodesContainerContent>
                <View>
                    <EpisodesContainerCount>{episode}</EpisodesContainerCount>
                    <EpisodesContainerName>{name}</EpisodesContainerName>               
                    <EpisodesContainerDate>{air_date}</EpisodesContainerDate> 
                </View>
                <View>
                    <EpisodesArrow/>
                </View>   
            </EpisodesContainerContent>
        </EpisodesContainerBlock>    
        
    )
}




const EpisodesContainerBlock = styled.TouchableOpacity`
    borderBottomColor: ${colors.borderColor};
    borderBottomWidth: 1;
`

const EpisodesContainerContent = styled.View`
    paddingVertical: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`


const EpisodesContainerCount = styled.Text`
    color: ${colors.textTitle};
    font-size: ${config.textSizeContainerTitle};
    font-weight: bold;
`

const EpisodesContainerName = styled.Text`
    color: ${colors.textDiscription};
    font-size: ${config.textSizeContainerDiscription};
    margin-top: 3px;
    font-weight: 500;
`

const EpisodesContainerDate = styled.Text`
    color: ${colors.textNavigaion};
    font-weight: bold;
    margin-top: 3px;
`



export default EpisodesContainer;