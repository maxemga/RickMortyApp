import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { EpisodesArrow } from 'src/components/icons/EpisodesIcons/arrow';
import { IconModalActive } from 'src/components/icons/ModalIcons/IconModalActive';
import { IconModalNonActive } from 'src/components/icons/ModalIcons/IconModalNonActive';
import { Screens } from 'src/components/Navigation/NavigationRoutes';
import { FilterContext } from 'src/context/filterContext';
import { TypeModalContext } from 'src/context/typeModalContext';
import { colors, config } from 'src/theme/config';
import { IFilterContext, ITypeModalContext } from 'src/type/types';

export const EpisodesModal = () => {
    const navigation = useNavigation();
    const { episodesActiveEpisode, episodesActiveName } = useContext<IFilterContext>(FilterContext);
    const { setActiveTypeModal } = useContext<ITypeModalContext>(TypeModalContext);

    const redirectModal = () => {
        navigation.navigate(Screens.EPISODES_MODAL_INPUT);
    };

    return (
        <>
            <EpisodesModalContainer>
                <Wrapper>
                    <EpisodesModalContainerContent
                        onPress={() => {
                            redirectModal();
                            setActiveTypeModal?.('Name');
                        }}>
                        <EpisodesModalContainerContentElements>
                            <EpisodesModalContainerContentRadio>
                                {episodesActiveName !== '' ? (
                                    <TouchableOpacity>
                                        <IconModalActive />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity>
                                        <IconModalNonActive />
                                    </TouchableOpacity>
                                )}
                            </EpisodesModalContainerContentRadio>
                            <EpisodesModalContainerContentText>
                                <EpisodesModalContainerTitle>Name</EpisodesModalContainerTitle>
                                <EpisodesModalContainerSubTitle>
                                    Give a name
                                </EpisodesModalContainerSubTitle>
                            </EpisodesModalContainerContentText>
                        </EpisodesModalContainerContentElements>
                        <View>
                            <EpisodesArrow />
                        </View>
                    </EpisodesModalContainerContent>
                </Wrapper>
            </EpisodesModalContainer>
            <EpisodesModalContainer style={{ marginTop: 25 }}>
                <Wrapper>
                    <EpisodesModalContainerContent
                        onPress={() => {
                            redirectModal();
                            setActiveTypeModal?.('Episode');
                        }}>
                        <EpisodesModalContainerContentElements>
                            <EpisodesModalContainerContentRadio>
                                {episodesActiveEpisode !== '' ? (
                                    <TouchableOpacity>
                                        <IconModalActive />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity>
                                        <IconModalNonActive />
                                    </TouchableOpacity>
                                )}
                            </EpisodesModalContainerContentRadio>

                            <EpisodesModalContainerContentText>
                                <EpisodesModalContainerTitle>Episode</EpisodesModalContainerTitle>
                                <EpisodesModalContainerSubTitle>
                                    Select one
                                </EpisodesModalContainerSubTitle>
                            </EpisodesModalContainerContentText>
                        </EpisodesModalContainerContentElements>
                        <View>
                            <EpisodesArrow />
                        </View>
                    </EpisodesModalContainerContent>
                </Wrapper>
            </EpisodesModalContainer>
        </>
    );
};

const EpisodesModalContainer = styled.TouchableOpacity`
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.silver.white};
    border-top-color: ${colors.silver.white};
`;

const EpisodesModalContainerContent = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-vertical: 10px;
`;

const EpisodesModalContainerTitle = styled.Text`
    color: ${colors.blue.dark};
    font-weight: bold;
    font-size: ${config.textSizeContainerModalTitle};
`;

const EpisodesModalContainerSubTitle = styled.Text`
    color: ${colors.blue.dim};
    font-size: ${config.textSizeContainerModalDescription};
`;

const EpisodesModalContainerContentElements = styled.View`
    flex-direction: row;
    align-items: center;
`;

const EpisodesModalContainerContentRadio = styled.View`
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const EpisodesModalContainerContentText = styled.View`
    margin-left: 15px;
`;

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;
