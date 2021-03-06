import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { EpisodesArrow } from 'src/components/icons/EpisodesIcons/arrow';
import { IconModalActive } from 'src/components/icons/ModalIcons/IconModalActive';
import { IconModalNonActive } from 'src/components/icons/ModalIcons/IconModalNonActive';
import { Screens } from 'src/components/Navigation/NavigationRoutes';
import { FilterContext } from 'src/context/filterContext';
import { TypeModalContext } from 'src/context/typeModalContext';
import { colors, config } from 'src/theme/config';
import { IFilterContext, ITypeModalContext } from 'src/type/types';

export const LocationsModal = () => {
    const navigation = useNavigation();
    const { locationsActiveDimension, locationsActiveName, locationsActiveType } =
        useContext<IFilterContext>(FilterContext);
    const { setActiveTypeModal } = useContext<ITypeModalContext>(TypeModalContext);

    const redirectModal = () => {
        navigation.navigate(Screens.LOCATIONS_MODAL_INPUT);
    };

    return (
        <>
            <LocationsModalContainer>
                <Wrapper>
                    <LocationsModalContainerContent
                        onPress={() => {
                            redirectModal();
                            setActiveTypeModal?.('Name');
                        }}>
                        <LocationsModalContainerContentElements>
                            <LocationsModalContainerContentRadio>
                                {locationsActiveName !== '' ? (
                                    <TouchableOpacity>
                                        <IconModalActive />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity>
                                        <IconModalNonActive />
                                    </TouchableOpacity>
                                )}
                            </LocationsModalContainerContentRadio>
                            <LocationsModalContainerContentText>
                                <LocationsModalContainerTitle>Name</LocationsModalContainerTitle>
                                <LocationsModalContainerSubTitle>
                                    Give a name
                                </LocationsModalContainerSubTitle>
                            </LocationsModalContainerContentText>
                        </LocationsModalContainerContentElements>
                        <View>
                            <EpisodesArrow />
                        </View>
                    </LocationsModalContainerContent>
                </Wrapper>
            </LocationsModalContainer>
            <LocationsModalContainer style={{ marginTop: 25 }}>
                <Wrapper>
                    <LocationsModalContainerContent
                        onPress={() => {
                            redirectModal();
                            setActiveTypeModal?.('Type');
                        }}>
                        <LocationsModalContainerContentElements>
                            <LocationsModalContainerContentRadio>
                                {locationsActiveType !== '' ? (
                                    <TouchableOpacity>
                                        <IconModalActive />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity>
                                        <IconModalNonActive />
                                    </TouchableOpacity>
                                )}
                            </LocationsModalContainerContentRadio>

                            <LocationsModalContainerContentText>
                                <LocationsModalContainerTitle>Type</LocationsModalContainerTitle>
                                <LocationsModalContainerSubTitle>
                                    Select one
                                </LocationsModalContainerSubTitle>
                            </LocationsModalContainerContentText>
                        </LocationsModalContainerContentElements>
                        <View>
                            <EpisodesArrow />
                        </View>
                    </LocationsModalContainerContent>
                </Wrapper>
            </LocationsModalContainer>
            <LocationsModalContainer style={{ marginTop: 25 }}>
                <Wrapper>
                    <LocationsModalContainerContent
                        onPress={() => {
                            redirectModal();
                            setActiveTypeModal?.('Dimension');
                        }}>
                        <LocationsModalContainerContentElements>
                            <LocationsModalContainerContentRadio>
                                {locationsActiveDimension !== '' ? (
                                    <TouchableOpacity>
                                        <IconModalActive />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity>
                                        <IconModalNonActive />
                                    </TouchableOpacity>
                                )}
                            </LocationsModalContainerContentRadio>
                            <LocationsModalContainerContentText>
                                <LocationsModalContainerTitle>
                                    Dimension
                                </LocationsModalContainerTitle>
                                <LocationsModalContainerSubTitle>
                                    Select one
                                </LocationsModalContainerSubTitle>
                            </LocationsModalContainerContentText>
                        </LocationsModalContainerContentElements>
                        <View>
                            <EpisodesArrow />
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
    font-weight: bold;
    font-size: ${config.textSizeContainerModalTitle};
`;

const LocationsModalContainerSubTitle = styled.Text`
    color: ${colors.blue.dim};
    font-size: ${config.textSizeContainerModalDescription};
`;

const LocationsModalContainerContentElements = styled.View`
    flex-direction: row;
    align-items: center;
`;

const LocationsModalContainerContentRadio = styled.View`
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const LocationsModalContainerContentText = styled.View`
    margin-left: 15px;
`;

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;
