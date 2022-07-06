
import React, { useContext, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'
import { EpisodesArrow } from '../../../assets/images/EpisodesIcons/arrow'
import { colors, config } from '../../../theme/config'
import { Screens } from '../../Navigation/NavigationRoutes'
import IconModalNonActive from '../../../assets/images/ModalIcons/IconModalNonActive'
import IconModalActive from '../../../assets/images/ModalIcons/IconModalActive'
import { useNavigation } from '@react-navigation/native'
import { FilterContext } from '../../../context/filterContext'
import { IFilterContext, ITypeModalContext } from '../../../type/types'
import { TypeModalContext } from '../../../context/typeModalContext'



const EpisodesModal = () => {
    const navigation = useNavigation();
    
    const { episodesActiveEpisode, episodesActiveName, setEpisodesActiveEpisode, setEpisodesActiveName} = useContext<IFilterContext>(FilterContext);

    const { setActiveTypeModal } = useContext<ITypeModalContext>(TypeModalContext);

    const redirectModal = () => {
        navigation.navigate(Screens.EPISODES_MODAL_INPUT);
    }    

    return(

        <>

            <EpisodesModalContainer>
                    <Wrapper>
                        <EpisodesModalContainerContent onPress={() => {
                            redirectModal();
                            setActiveTypeModal('Name');
                        }} >
                            <EpisodesModalContainerContentElements>

                                <EpisodesModalContainerContentRadio>
                                    {episodesActiveName != '' ?
                                        <TouchableOpacity>
                                            <IconModalActive/>               
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity>
                                            <IconModalNonActive/>
                                        </TouchableOpacity>
                                    }
                                </EpisodesModalContainerContentRadio>

                                <EpisodesModalContainerContentText>
                                    <EpisodesModalContainerTitle>Name</EpisodesModalContainerTitle>
                                    <EpisodesModalContainerSubTitle>Give a name</EpisodesModalContainerSubTitle>
                                </EpisodesModalContainerContentText>
                                
                            </EpisodesModalContainerContentElements>

                            <View>
                                <EpisodesArrow/>
                            </View>
                        </EpisodesModalContainerContent>
                    </Wrapper>       
            </EpisodesModalContainer> 

            <EpisodesModalContainer style={{marginTop: 25}}>
                    <Wrapper>
                        <EpisodesModalContainerContent onPress={() => {
                            redirectModal();
                            setActiveTypeModal('Episode');
                        }}>
                            <EpisodesModalContainerContentElements>

                                <EpisodesModalContainerContentRadio>
                                    {episodesActiveEpisode != '' ?
                                        <TouchableOpacity>
                                            <IconModalActive/>               
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity>
                                            <IconModalNonActive/>
                                        </TouchableOpacity>
                                    }
                                </EpisodesModalContainerContentRadio>

                                <EpisodesModalContainerContentText>
                                    <EpisodesModalContainerTitle>Episode</EpisodesModalContainerTitle>
                                    <EpisodesModalContainerSubTitle>Select one</EpisodesModalContainerSubTitle>
                                </EpisodesModalContainerContentText>
                                
                            </EpisodesModalContainerContentElements>

                            <View>
                                <EpisodesArrow/>
                            </View>
                        </EpisodesModalContainerContent>
                    </Wrapper>       
            </EpisodesModalContainer> 
       
                        
        </>
    )
}



const EpisodesModalContainer = styled.TouchableOpacity`
    borderTopWidth: 1px;
    borderBottomWidth: 1px;
    borderBottomColor: ${colors.borderColor};
    borderTopColor: ${colors.borderColor};
`

const EpisodesModalContainerContent = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    paddingVertical: 10px;
`

const EpisodesModalContainerTitle = styled.Text`
    color: ${colors.textTitle};
    fontWeight: bold;
    fontSize: ${config.textSizeContainerModalTitle};
`

const CharatersModalContainerStatusTitle = styled.Text`
    color: ${colors.textTitle};
    fontSize: ${config.textSizeContainerModalTitle};
`

const EpisodesModalContainerSubTitle = styled.Text`
    color: ${colors.textDiscription};
    fontSize: ${config.textSizeContainerModalDescription};
`



const EpisodesModalContainerContentElements = styled.View`
    flexDirection: row;
    alignItems: center;
    display: flex;
`

const EpisodesModalContainerContentRadio = styled.View`
    width: 30px;
    height: 30px;
    align-items: center;
    justifyContent: center;
    flexDirection: row;
`

const EpisodesModalContainerContentText = styled.View`
    marginLeft: 15px;
`

const CharatersModalContainerContentStatusText = styled.View`
    marginLeft: 15px;

    width: 100%;
`

const CharatersModalOptionsTitle = styled.Text`
    font-size: 15px;
    color: '#000000';
    opacity: 0.4;
`

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`



export default EpisodesModal;