
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
import { TypeModalContext, TypeModalProvider } from '../../../context/typeModalContext'



const CharatersModal = () => {
    const navigation = useNavigation();
    const { activeTypeModal, setActiveTypeModal } = useContext<ITypeModalContext>(TypeModalContext);
    
    const { charatersActiveGender, charatersActiveName, charatersActiveSpecies, charatersActiveStatus,
    setCharatersActiveGender, setCharatersActiveName, setCharatersActiveSpecies, setCharatersActiveStatus} = useContext<IFilterContext>(FilterContext);

    const redirect = () => {
        navigation.navigate(Screens.CHARATER_MODAL_INPUT)
    }

    const filterElements = {
        status: [
            {
                title: 'Alive'
            },
            {
                title: 'Dead'
            },
            {
                title: 'Unknown'
            }
        ],
        gender: [
            {
                title: 'Female'
            },
            {
                title: 'Male'
            },
            {
                title: 'Genderless'
            },
            {
                title: 'Unknown'
            }
        ]
    }


    return(
 
        <>

            <CharatersModalContainer>
                    <Wrapper>
                        <CharatersModalContainerContent onPress={() => {
                            redirect();
                            setActiveTypeModal('Name');
                        }} >
                            <CharatersModalContainerContentElements>

                                <CharatersModalContainerContentRadio>
                                    {charatersActiveName != '' ?
                                        <TouchableOpacity>
                                            <IconModalActive/>               
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity>
                                            <IconModalNonActive/>
                                        </TouchableOpacity>
                                    }
                                </CharatersModalContainerContentRadio>

                                <CharatersModalContainerContentText>
                                    <CharatersModalContainerTitle>Name</CharatersModalContainerTitle>
                                    <CharatersModalContainerSubTitle>Give a name</CharatersModalContainerSubTitle>
                                </CharatersModalContainerContentText>
                                
                            </CharatersModalContainerContentElements>

                            <View>
                                <EpisodesArrow/>
                            </View>
                        </CharatersModalContainerContent>
                    </Wrapper>       
            </CharatersModalContainer> 

            <CharatersModalContainer style={{marginTop: 25}}>
                    <Wrapper>
                        <CharatersModalContainerContent onPress={() => {
                            redirect();
                            setActiveTypeModal('Species')
                        }}>
                            <CharatersModalContainerContentElements>

                                <CharatersModalContainerContentRadio>
                                    {charatersActiveSpecies != '' ?
                                        <TouchableOpacity>
                                            <IconModalActive/>               
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity>
                                            <IconModalNonActive/>
                                        </TouchableOpacity>
                                    }
                                </CharatersModalContainerContentRadio>

                                <CharatersModalContainerContentText>
                                    <CharatersModalContainerTitle>Species</CharatersModalContainerTitle>
                                    <CharatersModalContainerSubTitle>Enter species</CharatersModalContainerSubTitle>
                                </CharatersModalContainerContentText>
                                
                            </CharatersModalContainerContentElements>

                            <View>
                                <EpisodesArrow/>
                            </View>
                        </CharatersModalContainerContent>
                    </Wrapper>       
            </CharatersModalContainer> 


            <Wrapper style={{marginTop: 25, marginBottom: 10}}>
                <CharatersModalOptionsTitle>Status</CharatersModalOptionsTitle>
            </Wrapper>
            <CharatersModalContainer>
                <Wrapper>
                    <FlatList
                    
                        scrollEnabled={false}
                        ItemSeparatorComponent={() => <View style={{backgroundColor: colors.borderColor, height: 1}}></View>}
                        data={filterElements.status}
                        renderItem={(el) => {
                            return(
                                <CharatersModalContainerContent onPress={() => charatersActiveStatus == el.item.title ? setCharatersActiveStatus('') : setCharatersActiveStatus(el.item.title)}>
                            <CharatersModalContainerContentElements>

                                <CharatersModalContainerContentRadio>
                                    {charatersActiveStatus == el.item.title ?
                                        <TouchableOpacity>
                                            <IconModalActive/>               
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity>
                                            <IconModalNonActive/>
                                        </TouchableOpacity>
                                    }
                                </CharatersModalContainerContentRadio>

                                <CharatersModalContainerContentStatusText>
                                    <CharatersModalContainerStatusTitle>{el.item.title}</CharatersModalContainerStatusTitle>
                                </CharatersModalContainerContentStatusText>                  
                                
                            </CharatersModalContainerContentElements>

                        </CharatersModalContainerContent>
                            )
                                }}
                        />

                </Wrapper>
            </CharatersModalContainer>
            
            <Wrapper style={{marginTop: 25, marginBottom: 10}}>
                <CharatersModalOptionsTitle>Gender</CharatersModalOptionsTitle>
            </Wrapper>
            <CharatersModalContainer>
                <Wrapper>
                    <FlatList
                        scrollEnabled={false}
                        ItemSeparatorComponent={() => <View style={{backgroundColor: colors.borderColor, height: 1}}></View>}
                        data={filterElements.gender}
                        renderItem={(el) => {
                            return(
                                <CharatersModalContainerContent onPress={() => charatersActiveGender == el.item.title ? setCharatersActiveGender('') : setCharatersActiveGender(el.item.title)}>
                            <CharatersModalContainerContentElements>

                                <CharatersModalContainerContentRadio>
                                    {charatersActiveGender == el.item.title ?
                                        <TouchableOpacity>
                                            <IconModalActive/>               
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity>
                                            <IconModalNonActive/>
                                        </TouchableOpacity>
                                    }
                                </CharatersModalContainerContentRadio>

                                <CharatersModalContainerContentStatusText>
                                     <CharatersModalContainerStatusTitle>{el.item.title}</CharatersModalContainerStatusTitle>
                                </CharatersModalContainerContentStatusText>
                                
                            </CharatersModalContainerContentElements>

                        </CharatersModalContainerContent>
                            )
                                }}
                        />

                </Wrapper>
            </CharatersModalContainer>
                        
        </>
    )
}



const CharatersModalContainer = styled.TouchableOpacity`
    borderTopWidth: 1px;
    borderBottomWidth: 1px;
    borderBottomColor: ${colors.borderColor};
    borderTopColor: ${colors.borderColor};
`

const CharatersModalContainerContent = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    paddingVertical: 10px;
`

const CharatersModalContainerTitle = styled.Text`
    color: ${colors.textTitle};
    fontWeight: bold;
    fontSize: ${config.textSizeContainerModalTitle};
`

const CharatersModalContainerStatusTitle = styled.Text`
    color: ${colors.textTitle};
    fontSize: ${config.textSizeContainerModalTitle};
`

const CharatersModalContainerSubTitle = styled.Text`
    color: ${colors.textDiscription};
    fontSize: ${config.textSizeContainerModalDescription};
`



const CharatersModalContainerContentElements = styled.View`
    flexDirection: row;
    alignItems: center;
    display: flex;
`

const CharatersModalContainerContentRadio = styled.View`
    width: 30px;
    height: 30px;
    align-items: center;
    justifyContent: center;
    flexDirection: row;
`

const CharatersModalContainerContentText = styled.View`
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



export default CharatersModal;