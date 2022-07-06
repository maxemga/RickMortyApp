
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



const LocationsModal = () => {
    const navigation = useNavigation();
    
    const { locationsActiveDimension, locationsActiveName, locationsActiveType,
    setLocationsActiveDimension, setLocationsActiveName, setLocationsActiveType } = useContext<IFilterContext>(FilterContext);

    const { setActiveTypeModal } = useContext<ITypeModalContext>(TypeModalContext);

    const redirectModal = () => {
        navigation.navigate(Screens.LOCATIONS_MODAL_INPUT);
    }    

    return(

        <>

            <LocationsModalContainer>
                    <Wrapper>
                        <LocationsModalContainerContent onPress={() => {
                            redirectModal();
                            setActiveTypeModal('Name');
                        }} >
                            <LocationsModalContainerContentElements>

                                <LocationsModalContainerContentRadio>
                                    {locationsActiveName != '' ?
                                        <TouchableOpacity>
                                            <IconModalActive/>               
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity>
                                            <IconModalNonActive/>
                                        </TouchableOpacity>
                                    }
                                </LocationsModalContainerContentRadio>

                                <LocationsModalContainerContentText>
                                    <LocationsModalContainerTitle>Name</LocationsModalContainerTitle>
                                    <LocationsModalContainerSubTitle>Give a name</LocationsModalContainerSubTitle>
                                </LocationsModalContainerContentText>
                                
                            </LocationsModalContainerContentElements>

                            <View>
                                <EpisodesArrow/>
                            </View>
                        </LocationsModalContainerContent>
                    </Wrapper>       
            </LocationsModalContainer> 

            <LocationsModalContainer style={{marginTop: 25}}>
                    <Wrapper>
                        <LocationsModalContainerContent onPress={() => {
                            redirectModal();
                            setActiveTypeModal('Type');
                        }}>
                            <LocationsModalContainerContentElements>

                                <LocationsModalContainerContentRadio>
                                    {locationsActiveType != '' ?
                                        <TouchableOpacity>
                                            <IconModalActive/>               
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity>
                                            <IconModalNonActive/>
                                        </TouchableOpacity>
                                    }
                                </LocationsModalContainerContentRadio>

                                <LocationsModalContainerContentText>
                                    <LocationsModalContainerTitle>Type</LocationsModalContainerTitle>
                                    <LocationsModalContainerSubTitle>Select one</LocationsModalContainerSubTitle>
                                </LocationsModalContainerContentText>
                                
                            </LocationsModalContainerContentElements>

                            <View>
                                <EpisodesArrow/>
                            </View>
                        </LocationsModalContainerContent>
                    </Wrapper>       
            </LocationsModalContainer> 
            <LocationsModalContainer style={{marginTop: 25}}>
                    <Wrapper>
                        <LocationsModalContainerContent onPress={() => {
                            redirectModal();
                            setActiveTypeModal('Dimension');
                        }}>
                            <LocationsModalContainerContentElements>

                                <LocationsModalContainerContentRadio>
                                    {locationsActiveDimension != '' ?
                                        <TouchableOpacity>
                                            <IconModalActive/>               
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity>
                                            <IconModalNonActive/>
                                        </TouchableOpacity>
                                    }
                                </LocationsModalContainerContentRadio>

                                <LocationsModalContainerContentText>
                                    <LocationsModalContainerTitle>Dimension</LocationsModalContainerTitle>
                                    <LocationsModalContainerSubTitle>Select one</LocationsModalContainerSubTitle>
                                </LocationsModalContainerContentText>
                                
                            </LocationsModalContainerContentElements>

                            <View>
                                <EpisodesArrow/>
                            </View>
                        </LocationsModalContainerContent>
                    </Wrapper>       
            </LocationsModalContainer> 
                        
        </>
    )
}



const LocationsModalContainer = styled.TouchableOpacity`
    borderTopWidth: 1px;
    borderBottomWidth: 1px;
    borderBottomColor: ${colors.borderColor};
    borderTopColor: ${colors.borderColor};
`

const LocationsModalContainerContent = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    paddingVertical: 10px;
`

const LocationsModalContainerTitle = styled.Text`
    color: ${colors.textTitle};
    fontWeight: bold;
    fontSize: ${config.textSizeContainerModalTitle};
`

const CharatersModalContainerStatusTitle = styled.Text`
    color: ${colors.textTitle};
    fontSize: ${config.textSizeContainerModalTitle};
`

const LocationsModalContainerSubTitle = styled.Text`
    color: ${colors.textDiscription};
    fontSize: ${config.textSizeContainerModalDescription};
`



const LocationsModalContainerContentElements = styled.View`
    flexDirection: row;
    alignItems: center;
    display: flex;
`

const LocationsModalContainerContentRadio = styled.View`
    width: 30px;
    height: 30px;
    align-items: center;
    justifyContent: center;
    flexDirection: row;
`

const LocationsModalContainerContentText = styled.View`
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



export default LocationsModal;