import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { GET_SINGLE_USER } from 'src/db/query/requests';
import { ISchemaUser } from 'src/db/query/schema';
import { colors, config, fonts } from 'src/theme/config';
import { EpisodesContainer } from 'src/components/Episodes/EpisodesContainer';
import { EpisodesArrow } from 'src/components/icons/EpisodesIcons/arrow';
import { Screens } from 'src/components/Navigation/NavigationRoutes';
import { ActiveDataContext } from 'src/context/activeData';
import { IActiveDataContext } from 'src/type/types';

export const CharatersProfileComponent = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { data, loading, error } = useQuery<ISchemaUser>(GET_SINGLE_USER, {
        variables: {
            id: route.params?.characterId,
        },
    });
    const { setLocationsCardActiveName } = useContext<IActiveDataContext>(ActiveDataContext);

    const openLocationCard = () => {
        navigation.navigate(Screens.LOCATIONS_SCREEN, {
            screen: Screens.LOCATIONS_CARD_SCREEN,
            initial: false,
            params: {
                locationId: data?.character.location.id,
            },
        });
        setLocationsCardActiveName?.(data.character.location.name);
    };

    return (
        <CharatersProfileBlock>
            <CharatersProfileContent>
                <CharatersContentImageBackground>
                    <Image
                        source={require('./../icons/CharatersIcons/CharatersProfileBackground.jpg')}
                        style={{ width: '100%', height: 100 }}
                    />
                    <CharatersContentImageIcon>
                        <Image
                            source={{ uri: data?.character.image }}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 100,
                                zIndex: 100,
                            }}
                        />
                    </CharatersContentImageIcon>
                </CharatersContentImageBackground>

                <CharatersContentImageCard>
                    <Wrapper style={{ alignItems: 'center' }}>
                        {error || loading ? (
                            <ErrorBlock style={{ width: '50%' }} />
                        ) : (
                            <CharatersContentImageCardStatus>
                                {data?.character.status}
                            </CharatersContentImageCardStatus>
                        )}
                        {error || loading ? (
                            <ErrorBlock style={{ width: '80%', height: 20 }} />
                        ) : (
                            <CharatersContentImageCardName>
                                {data?.character.name}
                            </CharatersContentImageCardName>
                        )}
                        {error || loading ? (
                            <ErrorBlock style={{ width: '50%' }} />
                        ) : (
                            <CharatersContentImageGender>
                                {data?.character.species}
                            </CharatersContentImageGender>
                        )}
                    </Wrapper>
                </CharatersContentImageCard>

                <CharaterContentInfo>
                    <Wrapper>
                        <CharasetInfoBlock>
                            <CharaterInfoTitle>Informations</CharaterInfoTitle>
                        </CharasetInfoBlock>

                        <CharaterInfoContainer>
                            <Flex>
                                <CharasetInfoContainerTitle>Gender</CharasetInfoContainerTitle>
                                {loading || error ? (
                                    <ErrorBlock />
                                ) : (
                                    <CharasetInfoContainerSubTitle>
                                        {data?.character.gender}
                                    </CharasetInfoContainerSubTitle>
                                )}
                            </Flex>
                        </CharaterInfoContainer>
                        <CharaterInfoContainer>
                            <Flex>
                                <CharasetInfoContainerTitle>Origin</CharasetInfoContainerTitle>
                                {loading || error ? (
                                    <ErrorBlock />
                                ) : (
                                    <CharasetInfoContainerSubTitle>
                                        {data?.character.origin.name}
                                    </CharasetInfoContainerSubTitle>
                                )}
                            </Flex>
                        </CharaterInfoContainer>

                        <CharaterInfoContainer>
                            <Flex>
                                <CharasetInfoContainerTitle>Type</CharasetInfoContainerTitle>
                                {loading || error ? (
                                    <ErrorBlock />
                                ) : (
                                    <CharasetInfoContainerSubTitle>
                                        {data?.character.type.length == 0
                                            ? 'Unknown'
                                            : data?.character.type}
                                    </CharasetInfoContainerSubTitle>
                                )}
                            </Flex>
                        </CharaterInfoContainer>

                        <TouchableOpacity onPress={() => openLocationCard()}>
                            <CharaterInfoContainer>
                                <Flex>
                                    <CharasetInfoContainerTitle>
                                        Location
                                    </CharasetInfoContainerTitle>
                                    {loading || error ? (
                                        <ErrorBlock />
                                    ) : (
                                        <CharasetInfoContainerSubTitle>
                                            {data?.character.location.name}
                                        </CharasetInfoContainerSubTitle>
                                    )}
                                </Flex>
                                <View>
                                    <EpisodesArrow />
                                </View>
                            </CharaterInfoContainer>
                        </TouchableOpacity>
                    </Wrapper>
                </CharaterContentInfo>

                <CharaterContentInfo style={{ paddingBottom: 20 }}>
                    <Wrapper>
                        <CharasetInfoBlock style={{ marginTop: 40 }}>
                            <CharaterInfoTitle>Episodes</CharaterInfoTitle>
                        </CharasetInfoBlock>
                        {data?.character.episode.map((el) => {
                            return <EpisodesContainer type={'Charater'} key={el.id} {...el} />;
                        })}
                    </Wrapper>
                </CharaterContentInfo>
            </CharatersProfileContent>
        </CharatersProfileBlock>
    );
};

const CharatersProfileBlock = styled.ScrollView``;

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`;

const CharatersProfileContent = styled.View``;

const CharatersContentImageBackground = styled.View`
    position: relative;
    align-items: center;
    z-index: 100;
`;
const CharatersContentImageIcon = styled.View`
    overflow: hidden;
    box-sizing: border-box;
    padding: 8px;
    height: 150px;
    width: 150px;
    position: absolute;
    bottom: -75px;
    background-color: ${colors.white.bright};
    margin: 0 auto;
    border-radius: 100px;
`;

const CharatersContentImageCard = styled.View`
    background-color: ${colors.white.bright};
    padding-top: 90px;
    padding-bottom: 20px;
`;

const CharatersContentImageCardStatus = styled.Text`
    font-family: ${fonts.roboto.default};
    color: ${colors.blue.dim};
`;
const CharatersContentImageCardName = styled.Text`
    color: ${colors.blue.dark};
    font-weight: bold;
    font-size: 30px;
    text-align: center;
`;
const CharatersContentImageGender = styled.Text`
    font-family: ${fonts.roboto.bold};
    font-weight: bold;
    color: ${colors.silver.bright}
    margin-top: 5px;
`;

const CharaterContentInfo = styled.View`
    background-color: ${colors.white.default};
`;

const CharasetInfoBlock = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${colors.silver.white};
    padding-vertical: 15px;
`;

const CharaterInfoTitle = styled.Text`
    font-family: ${fonts.roboto.bold};
    color: ${colors.silver.bright};
    font-size: 22px;
    font-weight: bold;
`;

const CharaterInfoContainer = styled.View`
    padding: 10px 0;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.silver.white};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const CharasetInfoContainerTitle = styled.Text`
    font-family: ${fonts.roboto.default};
    color: ${colors.blue.dark};
    font-weight: bold;
    font-size: ${config.textSizeContainerTitle};
`;

const CharasetInfoContainerSubTitle = styled.Text`
    font-family: ${fonts.roboto.default};
    color: ${colors.blue.dim};
    font-size: 15px;
    margin-top: 3px;
`;

const Flex = styled.View`
    width: 100%;
`;

const ErrorBlock = styled.View`
  background-color: ${colors.silver.lunar}
  border-radius: 15px;
  width: 100%;
  height: 15px;
  margin-top: 3px;
`;
