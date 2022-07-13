import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { EpisodesArrow } from '../../../assets/images/EpisodesIcons/arrow';
import { colors, config } from '../../../theme/config';
import { Screens } from '../../Navigation/NavigationRoutes';
import { useNavigation } from '@react-navigation/native';
import { FilterContext } from '../../../context/filterContext';
import { IFilterContext, ITypeModalContext } from '../../../type/types';
import { TypeModalContext } from '../../../context/typeModalContext';
import { IconModalActive } from '../../../assets/images/ModalIcons/IconModalActive';
import { IconModalNonActive } from '../../../assets/images/ModalIcons/IconModalNonActive';
import styled from 'styled-components/native';

export const LocationsModal = () => {
    const navigation = useNavigation();
    const { locationsActiveDimension, locationsActiveName, locationsActiveType } = useContext<IFilterContext>(FilterContext);
    const { setActiveTypeModal } = useContext<ITypeModalContext>(TypeModalContext);

    const redirectModal = () => {
        navigation.navigate(Screens.LOCATIONS_MODAL_INPUT);
    };

    return(
        <>
            <LocationsModalContainer>
                    <Wrapper>
                        <LocationsModalContainerContent onPress={() => {
                            redirectModal();
                            setActiveTypeModal?.('Name');
                        }} >
                            <LocationsModalContainerContentElements>
                                <LocationsModalContainerContentRadio>
                                    {locationsActiveName !== '' ?
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
                            setActiveTypeModal?.('Type');
                        }}>
                            <LocationsModalContainerContentElements>
                                <LocationsModalContainerContentRadio>
                                    {locationsActiveType !== '' ?
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
                            setActiveTypeModal?.('Dimension');
                        }}>
                            <LocationsModalContainerContentElements>

                                <LocationsModalContainerContentRadio>
                                    {locationsActiveDimension !== '' ?
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
    );
};

const LocationsModalContainer = styled.TouchableOpacity`
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.silver.white};
    border-top-color: ${colors.silver.white};
`;

const LocationsModalContainerContent = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-vertical: 10px;
`;

const LocationsModalContainerTitle = styled.Text`
    color: ${colors.blue.dark};
    fontWeight: bold;
    fontSize: ${config.textSizeContainerModalTitle};
`;

const LocationsModalContainerSubTitle = styled.Text`
    color: ${colors.blue.dim};
    fontSize: ${config.textSizeContainerModalDescription};
`;

const LocationsModalContainerContentElements = styled.View`
    flexDirection: row;
    alignItems: center;
`;

const LocationsModalContainerContentRadio = styled.View`
    width: 30px;
    height: 30px;
    align-items: center;
    justifyContent: center;
    flexDirection: row;
`;

const LocationsModalContainerContentText = styled.View`
    margin-left: 15px;
`;

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;
