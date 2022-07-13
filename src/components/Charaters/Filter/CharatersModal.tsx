import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { colors, config } from '../../../theme/config';
import { Screens } from '../../Navigation/NavigationRoutes';
import { useNavigation } from '@react-navigation/native';
import { FilterContext } from '../../../context/filterContext';
import { IFilterContext, ITypeModalContext } from '../../../type/types';
import { TypeModalContext } from '../../../context/typeModalContext';
import { IconModalActive } from '../../icons/ModalIcons/IconModalActive';
import { IconModalNonActive } from '../../icons/ModalIcons/IconModalNonActive';
import { EpisodesArrow } from '../../icons/EpisodesIcons/arrow';

export const CharatersModal = () => {
    const navigation = useNavigation();
    const { setActiveTypeModal } = useContext<ITypeModalContext>(TypeModalContext);

    const {
        charatersActiveGender,
        charatersActiveName,
        charatersActiveSpecies,
        charatersActiveStatus,
        setCharatersActiveGender,
        setCharatersActiveStatus,
    } = useContext<IFilterContext>(FilterContext);

    const redirect = () => {
        navigation.navigate(Screens.CHARATER_MODAL_INPUT);
    };

    const filterElements = {
        status: [
            {
                title: 'Alive',
            },
            {
                title: 'Dead',
            },
            {
                title: 'Unknown',
            },
        ],
        gender: [
            {
                title: 'Female',
            },
            {
                title: 'Male',
            },
            {
                title: 'Genderless',
            },
            {
                title: 'Unknown',
            },
        ],
    };

    return (
        <CharatersModalBlock>
            <CharatersModalContainer>
                <Wrapper>
                    <CharatersModalContainerContent
                        onPress={() => {
                            redirect();
                            setActiveTypeModal?.('Name');
                        }}>
                        <CharatersModalContainerContentElements>
                            <CharatersModalContainerContentRadio>
                                {charatersActiveName != '' ? (
                                    <TouchableOpacity>
                                        <IconModalActive />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity>
                                        <IconModalNonActive />
                                    </TouchableOpacity>
                                )}
                            </CharatersModalContainerContentRadio>
                            <CharatersModalContainerContentText>
                                <CharatersModalContainerTitle>Name</CharatersModalContainerTitle>
                                <CharatersModalContainerSubTitle>
                                    Give a name
                                </CharatersModalContainerSubTitle>
                            </CharatersModalContainerContentText>
                        </CharatersModalContainerContentElements>
                        <View>
                            <EpisodesArrow />
                        </View>
                    </CharatersModalContainerContent>
                </Wrapper>
            </CharatersModalContainer>
            <CharatersModalContainer style={{ marginTop: 25 }}>
                <Wrapper>
                    <CharatersModalContainerContent
                        onPress={() => {
                            redirect();
                            setActiveTypeModal?.('Species');
                        }}>
                        <CharatersModalContainerContentElements>
                            <CharatersModalContainerContentRadio>
                                {charatersActiveSpecies !== '' ? (
                                    <TouchableOpacity>
                                        <IconModalActive />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity>
                                        <IconModalNonActive />
                                    </TouchableOpacity>
                                )}
                            </CharatersModalContainerContentRadio>

                            <CharatersModalContainerContentText>
                                <CharatersModalContainerTitle>Species</CharatersModalContainerTitle>
                                <CharatersModalContainerSubTitle>
                                    Enter species
                                </CharatersModalContainerSubTitle>
                            </CharatersModalContainerContentText>
                        </CharatersModalContainerContentElements>

                        <View>
                            <EpisodesArrow />
                        </View>
                    </CharatersModalContainerContent>
                </Wrapper>
            </CharatersModalContainer>
            <Wrapper style={{ marginTop: 25, marginBottom: 10 }}>
                <CharatersModalOptionsTitle>Status</CharatersModalOptionsTitle>
            </Wrapper>
            <CharatersModalContainer>
                <Wrapper>
                    {filterElements.status.map((el) => {
                        return (
                            <CharatersModalContainerContent
                                key={Math.random()}
                                onPress={() =>
                                    charatersActiveStatus == el.title
                                        ? setCharatersActiveStatus?.('')
                                        : setCharatersActiveStatus?.(el.title)
                                }>
                                <CharatersModalContainerContentElements>
                                    <CharatersModalContainerContentRadio>
                                        {charatersActiveStatus == el.title ? (
                                            <TouchableOpacity>
                                                <IconModalActive />
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity>
                                                <IconModalNonActive />
                                            </TouchableOpacity>
                                        )}
                                    </CharatersModalContainerContentRadio>

                                    <CharatersModalContainerContentStatusText>
                                        <CharatersModalContainerStatusTitle>
                                            {el.title}
                                        </CharatersModalContainerStatusTitle>
                                    </CharatersModalContainerContentStatusText>
                                </CharatersModalContainerContentElements>
                            </CharatersModalContainerContent>
                        );
                    })}
                </Wrapper>
            </CharatersModalContainer>
            <Wrapper style={{ marginTop: 25, marginBottom: 10 }}>
                <CharatersModalOptionsTitle>Gender</CharatersModalOptionsTitle>
            </Wrapper>
            <CharatersModalContainer>
                <Wrapper>
                    {filterElements.gender.map((el) => {
                        return (
                            <CharatersModalContainerContent
                                key={Math.random()}
                                onPress={() =>
                                    charatersActiveGender == el.title
                                        ? setCharatersActiveGender?.('')
                                        : setCharatersActiveGender?.(el.title)
                                }>
                                <CharatersModalContainerContentElements>
                                    <CharatersModalContainerContentRadio>
                                        {charatersActiveGender === el.title ? (
                                            <TouchableOpacity>
                                                <IconModalActive />
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity>
                                                <IconModalNonActive />
                                            </TouchableOpacity>
                                        )}
                                    </CharatersModalContainerContentRadio>
                                    <CharatersModalContainerContentStatusText>
                                        <CharatersModalContainerStatusTitle>
                                            {el.title}
                                        </CharatersModalContainerStatusTitle>
                                    </CharatersModalContainerContentStatusText>
                                </CharatersModalContainerContentElements>
                            </CharatersModalContainerContent>
                        );
                    })}
                </Wrapper>
            </CharatersModalContainer>
        </CharatersModalBlock>
    );
};

const CharatersModalBlock = styled.ScrollView``;

const CharatersModalContainer = styled.TouchableOpacity`
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.silver.white};
    border-top-color: ${colors.silver.white};
`;

const CharatersModalContainerContent = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-vertical: 10px;
`;

const CharatersModalContainerTitle = styled.Text`
    color: ${colors.blue.dark};
    font-weight: bold;
    font-size: ${config.textSizeContainerModalTitle};
`;

const CharatersModalContainerStatusTitle = styled.Text`
    color: ${colors.blue.dark};
    font-size: ${config.textSizeContainerModalTitle};
`;

const CharatersModalContainerSubTitle = styled.Text`
    color: ${colors.blue.dim};
    font-size: ${config.textSizeContainerModalDescription};
`;

const CharatersModalContainerContentElements = styled.View`
    flex-direction: row;
    align-items: center;
`;

const CharatersModalContainerContentRadio = styled.View`
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const CharatersModalContainerContentText = styled.View`
    margin-left: 15px;
`;

const CharatersModalContainerContentStatusText = styled.View`
    margin-left: 15px;
    width: 100%;
`;

const CharatersModalOptionsTitle = styled.Text`
    font-size: 15px;
    color: ${colors.black};
    opacity: 0.4;
`;

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;
