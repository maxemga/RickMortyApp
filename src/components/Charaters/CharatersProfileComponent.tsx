import { useQuery } from '@apollo/client'
import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'
import { EpisodesArrow } from '../../assets/images/EpisodesIcons/arrow'
import { GET_SINGLE_USER } from '../../db/query/requests'
import { colors, config } from '../../theme/config'
import { ISchemaUser } from '../../db/query/schema'
import EpisodesContainer from '../Episodes/EpisodesContainer'
import { Screens } from '../Navigation/NavigationRoutes'


const CharatersProfileComponent = () => {
    const route = useRoute()
    const navigation = useNavigation();
    const { data, loading, error } = useQuery<ISchemaUser>(GET_SINGLE_USER, {
        variables: {
            id: route.params.characterId
        }
    });


    const OpenLocationCard = () => {
        navigation.navigate(Screens.LOCATIONS_CARD_SCREEN, {
            locationId: data?.character.location.id
        });
    }

    return(
        <CharatersProfileBlock>     
                <CharatersProfileContent>
                    
                        <CharatersContentImageBackground>
                            <Image source={require('./../../assets/images/CharatersIcons/CharatersProfileBackground.jpg')} style={{width: '100%', height: 100}}></Image>
                            <CharatersContentImageIcon>
                                <Image source={{uri: data?.character.image}} style={{width: '100%', height: '100%', borderRadius: 100, zIndex: 100}} />
                            </CharatersContentImageIcon>                           
                        </CharatersContentImageBackground>

                        <CharatersContentImageCard>
                            <Wrapper style={{display: 'flex', alignItems: 'center'}}>
                                {error || loading ? <ErrorBlock style={{width: '50%'}}/> : <CharatersContentImageCardStatus>{data?.character.status}</CharatersContentImageCardStatus>}
                                {error || loading ? <ErrorBlock style={{width: '80%', height: 20}}/> : <CharatersContentImageCardName>{data?.character.name}</CharatersContentImageCardName>}
                                {error || loading ? <ErrorBlock style={{width: '50%'}}/> : <CharatersContentImageGender>{data?.character.species}</CharatersContentImageGender>}
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
                                        { loading || error ? <ErrorBlock/> : 
                                        <CharasetInfoContainerSubTitle>{data?.character.gender}</CharasetInfoContainerSubTitle>}  
                                    </Flex>
                                </CharaterInfoContainer>

                                <CharaterInfoContainer>
                                    <Flex>
                                        <CharasetInfoContainerTitle>Origin</CharasetInfoContainerTitle>
                                        {loading || error ? <ErrorBlock/> : <CharasetInfoContainerSubTitle>{data?.character.origin.name}</CharasetInfoContainerSubTitle>}
                                    </Flex>
                                </CharaterInfoContainer>

                                <CharaterInfoContainer>
                                    <Flex>
                                        <CharasetInfoContainerTitle>Type</CharasetInfoContainerTitle>
                                        { loading || error ? <ErrorBlock/> : <CharasetInfoContainerSubTitle>{data?.character.type.length == 0 ? 'Unknown' : data?.character.type}</CharasetInfoContainerSubTitle>}
                                    </Flex>
                                </CharaterInfoContainer>

                                <TouchableOpacity onPress={() => OpenLocationCard()}>
                                    <CharaterInfoContainer>
                                        <Flex>
                                            <CharasetInfoContainerTitle>Location</CharasetInfoContainerTitle>
                                            { loading || error ? <ErrorBlock/> : <CharasetInfoContainerSubTitle>{data?.character.location.name}</CharasetInfoContainerSubTitle>}
                                        </Flex>
                                        <View>
                                            <EpisodesArrow/>
                                        </View>
                                    </CharaterInfoContainer>
                                </TouchableOpacity>
                            </Wrapper>
                        </CharaterContentInfo>

                        <CharaterContentInfo style={{paddingBottom: 50}}>
                            <Wrapper>
                                <CharasetInfoBlock style={{marginTop: 40}}>
                                    <CharaterInfoTitle>Episodes</CharaterInfoTitle>
                                </CharasetInfoBlock>
                                    
                                    <FlatList
                                        scrollEnabled={false}
                                        showsVerticalScrollIndicator={false}
                                        data={data?.character.episode}
                                        renderItem={(el) => <EpisodesContainer {...el.item}/>}
                                        keyExtractor={(el) => String(el.id)}
                                        numColumns={1}
                                    />
                                
                            </Wrapper>
                        </CharaterContentInfo>

                   
                </CharatersProfileContent>
           
        </CharatersProfileBlock>
    )
}

const CharatersProfileBlock = styled.ScrollView`
    
`

const Wrapper = styled.View`
    margin: 0 auto;
    width: 90%;
`

const CharatersProfileContent= styled.View`

`


const CharatersContentImageBackground= styled.View`
    position: relative;
    display: flex;
    align-items: center;  
    z-index: 100;
`
const CharatersContentImageIcon= styled.View`
    overflow: hidden;
    box-sizing: border-box;
    padding: 8px;
    height: 150px;
    width: 150px;
    position: absolute;
    bottom: -75px;
    background-color: #F2F2F7;
    margin: 0 auto;
    borderRadius: 100px;  
`

const CharatersContentImageCard = styled.View`
    background-color: #F2F2F7;
    padding-top: 90px;
    padding-bottom: 20px;
`

const CharatersContentImageCardStatus = styled.Text`
    color: ${colors.textDiscription};
`
const CharatersContentImageCardName = styled.Text`
    color: ${colors.textTitle};
    font-weight: bold;
    font-size: 30px;
    text-align: center;
`
const CharatersContentImageGender = styled.Text`
    font-weight: bold;
    color: ${colors.textNavigaion}
    margin-top: 5px;
`

const CharaterContentInfo = styled.View`
    background-color: white;
`

const CharasetInfoBlock = styled.View`
    borderBottomWidth: 1px;
    borderBottomColor: ${colors.borderColor};
    paddingVertical: 15px;
`

const CharaterInfoTitle = styled.Text`
    color: ${colors.textNavigaion};
    font-size: 22px;
    font-weight: bold;
`

const CharaterInfoContainer = styled.View`
   padding: 10px 0;
   borderBottomWidth: 1px;
   borderBottomColor: ${colors.borderColor};
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   width: 100%;
`

const CharasetInfoContainerTitle = styled.Text`
   color: ${colors.textTitle};
   font-weight: bold;
   font-size: ${config.textSizeContainerTitle};
`

const CharasetInfoContainerSubTitle = styled.Text`
   color: ${colors.textDiscription};
   font-size: 15px;
   margin-top: 3px;
`

const Flex = styled.View`
    width: 100%;
`

const ErrorBlock = styled.View`
    background-color: #CFCFCF;
    border-radius: 15px;
    width: 100%;
    height: 15px;
    margin-top: 3px;
`


export default CharatersProfileComponent;